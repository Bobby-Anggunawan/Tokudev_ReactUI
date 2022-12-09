import { createTheme, ThemeProvider } from '@mui/material/styles';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, doc } from "firebase/firestore";



const url = "http://localhost:3000";


/*const tutorialList = new Map([
  ['cs', {
    title: "C#",
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/C_Sharp_wordmark.svg/1200px-C_Sharp_wordmark.svg.png",
    subTitle: "Subtitle C#",
    urlTitle: "cs"
  }],
  ['javascript', {
    title: "Javascript",
    poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png",
    subTitle: "Subtitle js",
    urlTitle: "javascript"
  }]
]); */
//ENUMS
const tutorialList = new Map([
  ['seo', {
    title: "SEO (Search Engine Optimization)",
    poster: "https://firebasestorage.googleapis.com/v0/b/tokudev-c4305.appspot.com/o/images%2F1670257625_what_is_search-engine-optimization.jpg?alt=media&token=b758a3d1-43f1-4131-817e-e31affeea233",
    subTitle: "Belajar jadi terkenal via Google",
    urlTitle: "seo"
  }],
  ['gdscript', {
    title: "GDScript",
    poster: "https://firebasestorage.googleapis.com/v0/b/tokudev-c4305.appspot.com/o/images%2F1670580731_GDScript%20programming%20language%20logo.jpg?alt=media&token=f883c4a1-0549-4aa9-a13f-8f18a1b33256",
    subTitle: "Bahasa program khusus Godot Engine",
    urlTitle: "gdscript"
  }],
]);


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

function ConvertDateToString(date) {
  var t = new Date(Date.UTC(1970, 0, 1)); // Epoch
  t.setUTCSeconds(date.seconds);
  return t.toDateString();
}

function firstLetterUpercase(data) {
  return data.charAt(0).toUpperCase() + data.slice(1);
}

//untuk dapat list tag darisebuah string
//targetTag adalah tag yang dicari. harus string contohnya mencari tag code inputnya harus "code" tanpa karakter </>
function getTagList(aString, targetTag) {
  var ret = [];

  const myArray = aString.split("");

  myArray.forEach((data, x) => {
    //tag ketemu
    if (data == "<") {
      //cek apakah tag sesuai tag yang dicari
      var tempTag = "";
      var startIndex = -1;
      var endIndex = -1;

      var tagKetemu = false;
      for (var y = x + 1; y < aString.length; y++) {
        //apakah array buka whitespace(agar hemat)
        if (myArray[y].match(/^\s+$/) === null) {
          tempTag += myArray[y];
          if (tempTag.length == targetTag.length) {
            //tag sesuai dengan yang dicari
            if (tempTag == targetTag) {
              startIndex = x;
              //mencari index akhir tag
              for (var z = y; z < aString.length; z++) {
                if (myArray[z] == ">") {
                  for (var a = z + 1; a < aString.length; a++) {
                    //ending tag ketemu
                    if (myArray[a] == ">") {
                      //test apa ending tag ini benar
                      var endingTagBenar = false;
                      var tempEndingTag = "";
                      for (var c = a - 1; c > 0; c--) {
                        if (myArray[c].match(/^\s+$/) === null) {
                          tempEndingTag += myArray[c];
                          if (tempEndingTag.length == targetTag.length) {
                            //reverse string
                            const tempEdReverse = tempEndingTag.split("").reverse().join("");
                            if (tempEdReverse == targetTag) {
                              endingTagBenar = true;
                              tagKetemu = true;
                            }
                            break;
                          }
                        }
                      }

                      if (endingTagBenar) {
                        endIndex = a;
                        break;
                      }
                    }
                  }
                  break;
                }
              }
            }
            break;
          }
        }
      }
    }

    if (tagKetemu) {
      var buildToRet = "";
      for (var b = startIndex; b < endIndex + 1; b++) {
        buildToRet += myArray[b];
      }
      ret.push(buildToRet);
    }
  });

  return ret;

}

//untuk ambil property dari sebuah tag
//parameter
//data: string, sebuah string html 
//targetProp: string contoh "src"
function getTagProps(data, targetProp) {

  const dataArr = data.split("");

  for (var x = 0; x < dataArr.length; x++) {
    if (dataArr[x] == ">") {
      break;
    }
    var tagContain = "";
    for (var y = x; y < dataArr.length; y++) {
      //kalo masuk ke string, keluar(cari end stringnya)
      var apaMasukString = false;
      if(dataArr[y] == "'" || dataArr[y] == '"'){
        while(true){
          y++;
          if(dataArr[y] == "'" || dataArr[y] == '"'){
            y++;
            x = y;
            apaMasukString= true;
            break;
          }
        }
      }
      if(apaMasukString){
        break
      }
      tagContain += dataArr[y];
      if (tagContain.length == targetProp.length) {
        //tag yang dicari ketemu
        if (tagContain == targetProp) {
          //ambil nilai tag
          for (var z = y + 1; z < dataArr.length; z++) {
            if (dataArr[z] == "'" || dataArr[z] == '"') {
              var tempPropValue = "";
              for (var a = z + 1; a < dataArr.length; a++) {
                if (dataArr[a] == "'" || dataArr[a] == '"') {
                  break;
                }
                tempPropValue += dataArr[a];
              }
              return tempPropValue;

              break;
            }
          }
        }
        break;
      }
    }
  }

  return null;
}

export { contentHorizontalPadding, tableOfContentsWidth, muiToolbarHeight, contentVerticalPadding, borderRadius, drawerWidth, db, urlBuilder, ConvertDateToString, firstLetterUpercase, tutorialList, url, getTagList, getTagProps };