import { Box, Button, Checkbox, FormControlLabel, FormGroup, Stack, TextField, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AppBarToku from '../component/general/app_bar'
import FooterToku from '../component/general/footer'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { contentHorizontalPadding, contentVerticalPadding, db } from '../constant';
import { getFirestore, collection, getDoc, doc, setDoc, Timestamp, updateDoc } from "firebase/firestore";


export default function FileUploader() {

    const inputFile = React.useRef(null)
    const [inputValue, setInputValue] = React.useState(null);
    const [fileName, setFileName] = React.useState("");

    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
    };

    //0: Screenshot, 1: Edit Sendiri(foto sendiri atau hasil editan sendiri), 2: Company Product(logo & benda), 3: Nature, 4: Anime
    const [categoryCheck, setCategoryCheck] = React.useState([false, false, false, false, false]);
    const funsetCategoryCheck = (index) => {
        var temp = categoryCheck;
        temp[index] = !temp[index];
        setCategoryCheck(temp);
    }
    const [description, setDescription] = React.useState("");
    const handleSetDescription = (event) => {
        setDescription(event.target.value);
      };    
    //=================
    const storage = getStorage();
    const [storageRef, setStorageRefName] = React.useState(ref(storage, 'images/' + "null.png"));
    const setStorageRef = (fileName) => {
        setInputValue(inputFile.current.files[0]);
        setFileName(fileName);
        setStorageRefName(ref(storage, 'images/' + `${Math.floor(Date.now() / 1000)}_${fileName.split("\\")[2]}`));
    };

    const [resultLink, setResultLink] = React.useState(null);

    const uploadImage = () => {
        uploadBytes(storageRef, inputValue).then((snapshot) => {
            console.log('Uploaded a blob or file!');

            getDownloadURL(storageRef)
                .then((url) => {
                    setResultLink(url)

                    //data di firestore
                    const docData = {
                        fileName: fileName.split("\\")[2],
                        description: description,
                        date: Timestamp.now(),
                        url: url,
                        fileType: "image",

                        isScreenshot: categoryCheck[0],
                        isPersonal: categoryCheck[1],
                        isCompanyProduct: categoryCheck[2],
                        isNature: categoryCheck[3],
                        isAnime: categoryCheck[4]
                    };

                    setDoc(doc(db, "TokuFiles", `${Math.floor(Date.now() / 1000)}_${fileName.split("\\")[2]}`), docData).then(() => {console.log("image terupload")});
                })
                .catch((error) => {
                    console.log(error);
                });
        });
    }

    return (
        <Box>
            <AppBarToku />
            <Toolbar />

            <Box minHeight="100vh" paddingX={contentHorizontalPadding}>

                <input type="file" accept="image/*" onChange={(e) => { setStorageRef(e.target.value) }} ref={inputFile} style={{ display: "none" }} />


                <h1>File Name: "{fileName}"</h1>
                <Box display="flex">
                    {inputValue != null && <img src={URL.createObjectURL(inputValue)} height="200px" style={{paddingRight: contentHorizontalPadding}} />}
                    <Stack spacing={2}>
                        <TextField label="Description" variant="outlined" multiline value={description} onChange={handleSetDescription} />
                        <FormGroup>
                            <FormControlLabel control={<Checkbox onChange={() => funsetCategoryCheck(0)} value={categoryCheck[0]} />} label="Screenshot" />
                            <FormControlLabel control={<Checkbox onChange={() => funsetCategoryCheck(1)} value={categoryCheck[0]} />} label="Edit Sendiri" />
                            <FormControlLabel control={<Checkbox onChange={() => funsetCategoryCheck(2)} value={categoryCheck[0]} />} label="Company Product (logo & benda)" />
                            <FormControlLabel control={<Checkbox onChange={() => funsetCategoryCheck(3)} value={categoryCheck[0]} />} label="Nature" />
                            <FormControlLabel control={<Checkbox onChange={() => funsetCategoryCheck(4)} value={categoryCheck[0]} />} label="Anime" />
                        </FormGroup>
                    </Stack>
                </Box>
                <Stack direction="row" spacing={2} paddingY={contentVerticalPadding}>
                    <Button variant="contained" onClick={onButtonClick}>Open file upload window</Button>
                    {inputValue != null && <Button variant="contained" onClick={uploadImage} color="success">Upload</Button>}
                </Stack>
                {resultLink != null && <h3><a href={resultLink} target="_blank">Image Terupload</a></h3>}

            </Box>

            <FooterToku />
        </Box>
    )
}
