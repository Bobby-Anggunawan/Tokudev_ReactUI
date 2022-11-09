import React from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, doc } from "firebase/firestore";
import Typography from '@mui/material/Typography';
import HeadingToku from '../component/heading';

function PageBuilder(props) {

    //===============================
    const firebaseConfig = {
        apiKey: "AIzaSyByZci3vOnrmdBViEcW74i9IUZbvzo2etU",
        authDomain: "tokudev-c4305.firebaseapp.com",
        projectId: "tokudev-c4305",
        storageBucket: "tokudev-c4305.appspot.com",
        messagingSenderId: "249828565786",
        appId: "1:249828565786:web:855a1e6fb7e7b46c96c2a3"
    };
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);  
    //===============================
    const [data, setData] = React.useState("kosong");
    React.useEffect(() => {
        const docRef = doc(db, "BlogPost", "Lorem Ipsum");
        const docSnap = getDoc(docRef).then((doc) => {
        setData(doc.data().content);
        });
    }, []);

    //=======================
    var prev_arg = [];
    var hasil = [];
    var counter  = 0;
    while(counter<data.length){
        if(prev_arg.length == 0){
            prev_arg.push(data[counter]);
        }
        else{
            if(prev_arg[0] == "p"){
                prev_arg = [];
                hasil.push(
                    <Typography paragraph align="justify">
                        {data[counter]}
                    </Typography>
                );
            }
            else if(prev_arg[0] == "h1" || prev_arg[0] == "h2" || prev_arg[0] == "h3" || prev_arg[0] == "h4"){
                if(prev_arg[0] == "h1"){
                    prev_arg = [];
                    hasil.push(
                        <HeadingToku variant={1} title={data[counter]}/>
                    );
                }
                if(prev_arg[0] == "h2"){
                    prev_arg = [];
                    hasil.push(
                        <HeadingToku variant={2} title={data[counter]}/>
                    );
                }
                if(prev_arg[0] == "h3"){
                    prev_arg = [];
                    hasil.push(
                        <HeadingToku variant={3} title={data[counter]}/>
                    );
                }
                if(prev_arg[0] == "h4"){
                    prev_arg = [];
                    hasil.push(
                        <HeadingToku variant={4} title={data[counter]}/>
                    );
                }
            }
        }
        counter+=1
    }

    return (
        <div>
            {hasil}
        </div>
    );
}

export default PageBuilder;