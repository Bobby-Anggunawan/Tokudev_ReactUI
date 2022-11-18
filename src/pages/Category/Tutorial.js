import { Box, Card, CardActionArea, CardContent, CardMedia, ImageList, ImageListItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AppBarToku from '../../component/general/app_bar'
import FooterToku from '../../component/general/footer'
import { db, urlBuilder } from '../../constant'
import { getFirestore, collection, getDoc, doc } from "firebase/firestore";

export default function Tutorial() {

    const [poster, setPoster] = React.useState([]);
    const [subTitle, setSubTitle] = React.useState([]);
    const [title, setTitle] = React.useState([]);
    const [url, setURL] = React.useState([]);
    React.useEffect(() => {
        const docRef = doc(db, "CategoryList", "Tutorial");
        const docSnap = getDoc(docRef).then((doc) => {
            setPoster(doc.data().poster);
            setSubTitle(doc.data().subTitle);
            setTitle(doc.data().title);
            setURL(doc.data().urlTitle);
        });
    }, []);


    return (
        <Box>
            <AppBarToku />
            <Toolbar />

            <ImageList variant="masonry" cols={3} gap={8} sx={{ width: "50%", marginX: "auto" }}>

                {title.map((aTitle, x) => {
                    return (
                        <ImageListItem>
                            <Card>
                                <CardActionArea href={`/tutorial/${url[x]}`}>
                                    <CardMedia component="img"
                                        image={poster[x]}
                                        alt={aTitle} />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div">
                                            {aTitle}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            {subTitle[x]}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </ImageListItem>
                    );
                })}

            </ImageList>

            <FooterToku />
        </Box>
    )
}