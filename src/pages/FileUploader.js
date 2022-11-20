import { Box, Button, Stack, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AppBarToku from '../component/general/app_bar'
import FooterToku from '../component/general/footer'
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { contentHorizontalPadding, contentVerticalPadding } from '../constant';


export default function FileUploader() {

    const inputFile = React.useRef(null)
    const [inputValue, setInputValue] = React.useState(null);
    const [fileName, setFileName] = React.useState("");

    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
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
                {inputValue != null && <img src={URL.createObjectURL(inputValue)} height="200px" />}
                <Stack direction="row" spacing={2} paddingY={contentVerticalPadding}>
                    <Button variant="contained" onClick={onButtonClick}>Open file upload window</Button>
                    {inputValue != null && <Button variant="contained" onClick={uploadImage} color="success">Upload</Button>}
                </Stack>
                {resultLink!=null && <h3>Image Terupload: {resultLink}</h3>}

            </Box>

            <FooterToku />
        </Box>
    )
}
