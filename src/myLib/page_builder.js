import React from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, doc } from "firebase/firestore";
import Typography from '@mui/material/Typography';
import HeadingToku from '../component/heading';
import ImageToku from '../component/image';
import PostHeaderToku from '../component/post_header';

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
    const [title, setTitle] = React.useState("Loading");
    const [updateDate, setUpdateDate] = React.useState("Loading");
    const [poster, setPostere] = React.useState("Loading");
    React.useEffect(() => {
        const docRef = doc(db, "BlogPost", "Lorem Ipsum");
        const docSnap = getDoc(docRef).then((doc) => {
            setData(doc.data().content);
            setTitle(doc.data().title);
            setPostere(doc.data().poster);

            var t = new Date(Date.UTC(1970, 0, 1)); // Epoch
            t.setUTCSeconds(doc.data().date.seconds);
            setUpdateDate(t.toDateString());
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
                    <Typography paragraph align="justify" key={counter}>
                        {data[counter]}
                    </Typography>
                );
            }
            else if(prev_arg[0] == "img"){
                if(prev_arg.length>1){
                    console.log(counter);
                    hasil2.push(
                        <ImageToku key={counter} image={data[counter]} caption={prev_arg[1]} altTxt={data[counter-1]}/>
                    );
                    prev_arg = [];
                }
                else{
                    prev_arg.push(data[counter]);
                    counter+=1;
                }
            }
            else if(prev_arg[0] == "h1" || prev_arg[0] == "h2" || prev_arg[0] == "h3" || prev_arg[0] == "h4"){
                var hasil2 = [];
                
                if(prev_arg[0] == "h1"){
                    prev_arg = [];
                    hasil2.push(
                        <HeadingToku variant={1} title={data[counter]} key={counter}/>
                    );
                }
                else if(prev_arg[0] == "h2"){
                    prev_arg = [];
                    hasil2.push(
                        <HeadingToku variant={2} title={data[counter]} key={counter}/>
                    );
                }
                else if(prev_arg[0] == "h3"){
                    prev_arg = [];
                    hasil2.push(
                        <HeadingToku variant={3} title={data[counter]} key={counter}/>
                    );
                }
                else if(prev_arg[0] == "h4"){
                    prev_arg = [];
                    hasil2.push(
                        <HeadingToku variant={4} title={data[counter]} key={counter}/>
                    );
                }
                counter+=1;
                while(true){
                    if(counter>data.length) break;
                    if(prev_arg.length == 0){
                        prev_arg.push(data[counter]);
                        if(data[counter] == "h1" || data[counter] == "h2" || data[counter] == "h3" || data[counter] == "h4") break;
                    }
                    else{
                        if(prev_arg[0] == "p"){
                            prev_arg = [];
                            hasil2.push(
                                <Typography paragraph align="justify" key={counter}>
                                    {data[counter]}
                                </Typography>
                            );
                        }
                        else if(prev_arg[0] == "img"){
                            if(prev_arg.length>1){
                                console.log(counter);
                                hasil2.push(
                                    <ImageToku key={counter} image={data[counter]} caption={prev_arg[1]} altTxt={data[counter-1]}/>
                                );
                                prev_arg = [];
                            }
                            else{
                                prev_arg.push(data[counter]);
                                counter+=1;
                            }
                        }
                    }
                    counter+=1;
                }
                hasil.push(
                    <section key={counter}>{hasil2}</section>
                );
            }
        }
        counter+=1
    }

    return (
        <React.Fragment>
            <PostHeaderToku title={title} date={updateDate} imgAlt={title} imgUrl={poster}/>
            {hasil}
        </React.Fragment>
    );
}

export default PageBuilder;