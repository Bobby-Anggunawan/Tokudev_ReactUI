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


function urlBuilder(title) {
    let buildURL = title;
    //hapus semua non alphanumerical character
    //ganti spasi dengan _
    //buat semua huruf jadi kecil
    buildURL = buildURL.replace(/[^\w\s]/gi, "").replaceAll(" ", "_").toLowerCase()

    return buildURL;
}

function ConvertDateToString(date){
    var t = new Date(Date.UTC(1970, 0, 1)); // Epoch
    t.setUTCSeconds(date.seconds);
    return t.toDateString();
}

export { contentHorizontalPadding, tableOfContentsWidth, muiToolbarHeight, contentVerticalPadding, borderRadius, drawerWidth, db, urlBuilder, ConvertDateToString };