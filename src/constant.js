import { createTheme, ThemeProvider } from '@mui/material/styles';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, doc } from "firebase/firestore";

const contentHorizontalPadding = "25px";    //kekiri kekanan
const contentVerticalPadding = "25px";      //keatas kebawah
const tableOfContentsWidth = "150px";
const borderRadius = "1em";

const drawerWidth = 240;


//bukan constant saya
const muiToolbarHeight = "64px";

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

export {contentHorizontalPadding, tableOfContentsWidth, muiToolbarHeight, contentVerticalPadding, borderRadius, drawerWidth, db};