import React from 'react'
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { Button, formControlLabelClasses } from '@mui/material';
import { Box } from '@mui/system';
import { Redirect } from 'react-router-dom'



export default function Login() {

    const provider = new GoogleAuthProvider();
    const auth = getAuth();

    const [isLogin, setLogin] = React.useState(false);


    onAuthStateChanged(auth, (user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            const uid = user.uid;

            setLogin(true)
        } else {
            // User is signed out
            // ...
        }
    });

    if (isLogin == false) {
        return (
            <Box sx={{minHeight: "100vh"}}>
                <h1>Welcome to My Awesome App</h1>

                <Button id="sign-in-button"
                    variant="contained"
                    onClick={() => {
                        signInWithPopup(auth, provider)
                            .then((result) => {
                                // This gives you a Google Access Token. You can use it to access the Google API.
                                const credential = GoogleAuthProvider.credentialFromResult(result);
                                const token = credential.accessToken;
                                const user = result.user;
                                setLogin(true);
                            }).catch((error) => {
                                // Handle Errors here.
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                // The email of the user's account used.
                                const email = error.customData.email;
                                // The AuthCredential type that was used.
                                const credential = GoogleAuthProvider.credentialFromError(error);
                                // ...
                                console.log(`login gagal`);
                            });
                    }}>

                    LogIn

                </Button>
            </Box>
        );
    }
    return (
        <Box sx={{minHeight: "100vh"}}>
            <h1>Welcome to My Awesome App</h1>

            <Button variant="contained" onClick={() => {
                signOut(auth).then(() => {
                    // Sign-out successful.
                    setLogin(false);
                }).catch((error) => {
                    // An error happened.
                    console.log(error);
                });
            }}>
                LogOut
            </Button>
        </Box>
    );
}
