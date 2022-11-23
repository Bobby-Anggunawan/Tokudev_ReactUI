import { Box, Card, CardActionArea, CardContent, CardMedia, ImageList, ImageListItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AppBarToku from '../../component/general/app_bar'
import FooterToku from '../../component/general/footer'
import { db, urlBuilder, tutorialList } from '../../constant'
import { getFirestore, collection, getDoc, doc } from "firebase/firestore";

export default function Tutorial() {

    const listOfTutorial = [];
    tutorialList.forEach((data, x) => {
        listOfTutorial.push(
            <ImageListItem>
                <Card>
                    <CardActionArea href={`/tutorial/${data.urlTitle}`}>
                        <CardMedia component="img"
                            image={data.poster}
                            alt={data.title} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {data.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {data.subTitle}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </ImageListItem>
        );
    })

    return (
        <Box>
            <AppBarToku />
            <Toolbar />

            <ImageList variant="masonry" cols={3} gap={8} sx={{ width: "50%", marginX: "auto" }}>
                {listOfTutorial}

            </ImageList>

            <FooterToku />
        </Box>
    )
}