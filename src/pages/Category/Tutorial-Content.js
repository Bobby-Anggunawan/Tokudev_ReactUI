import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, ImageList, ImageListItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AppBarToku from '../../component/general/app_bar'
import FooterToku from '../../component/general/footer'
import { getFirestore, collection, getDoc, doc } from "firebase/firestore";
import { db } from '../../constant';
import { useLocation } from "react-router-dom";

export default function Tutorial_Content() {


    const location = useLocation();
    const tutorialName = location.pathname.split("/")[2];
    console.log(tutorialName);

    const [poster, setPoster] = React.useState([]);
    const [subTitle, setSubTitle] = React.useState([]);
    const [title, setTitle] = React.useState([]);
    React.useEffect(() => {
        const docRef = doc(db, "TutorialContentView", tutorialName);
        const docSnap = getDoc(docRef).then((doc) => {

            const headerNameCount = doc.data().headerName.length;

            var tempPoster = [];
            var tempSubTitle = [];
            var tempTitle = [];
            for (var x = 0; x < headerNameCount; x++) {
                tempPoster = tempPoster.concat(doc.data()[`childPoster${x + 1}`]);
                tempSubTitle = tempSubTitle.concat(doc.data()[`childSubTitle${x + 1}`]);
                tempTitle = tempTitle.concat(doc.data()[`headerChild${x + 1}`]);
            }

            setPoster(tempPoster);
            setSubTitle(tempSubTitle);
            setTitle(tempTitle);
        });
    }, []);

    return (
        <Box>
            <AppBarToku />
            <Toolbar />


            <ImageList variant="masonry" cols={3} gap={8} sx={{ width: "50%", marginX: "auto" }}>
                {
                    title.map((data, x) => {
                        return (
                            <ImageListItem key={x}>
                                <Card>
                                    <CardActionArea href="/tutorial/cs/loop">
                                        <CardHeader title={data} />
                                        <CardMedia component="img"
                                            image={poster[x]}
                                            alt={data} />
                                        <CardContent>
                                            <Typography variant="body2" color="text.secondary">
                                                {subTitle[x]}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </ImageListItem>
                        );
                    })
                }
            </ImageList>


            <FooterToku />
        </Box>
    )
}
