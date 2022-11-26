import React from 'react'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, CssBaseline, Grid, Typography } from '@mui/material';
import AppBarToku from '../component/general/app_bar';
import suya from '../MyImg/wallpaperSuya.png';
import FooterToku from '../component/general/footer';

export default function Home() {

    const quote = ["I treat people the way I want people to treat me..",

        "You can't change people's minds. But proving what they believe is wrong, crushing their spirit, that's fun!!",

        "A world where people can drag down all incompetent people above them is the perfect world.",
        "I think if everyone fights each other every time while still obeying the law, all incompetence will be gone."];
    const shownQuote = quote[Math.floor(Math.random() * quote.length)];

    return (
        <React.Fragment>

            <img src={suya} style={{ width: "100vw", height: "100vh", position: "fixed", left: "0px", top: "0px", zIndex: -1 }}></img>

            <Box sx={{ height: "100vh", paddingX: { xs: "20px", md: "50px" } }}>
                <Box margin="auto" paddingY="30vh">
                    <Typography paddingBottom="20px" align="center" variant='h1' display="block" component="span" sx={{ color: "common.white", textShadow: "0px 2px 5px rgba(0,0,0,1)", fontWeight: "500" }}>By. Y-Ang</Typography>
                    <Typography align="center" variant='h3' display="block" component="span" sx={{ color: "common.white", textShadow: "0px 2px 5px rgba(0,0,0,1)", fontWeight: "500" }}>{shownQuote}</Typography>
                </Box>
            </Box>

            <Box sx={{ backgroundColor: "primary.contrastText", paddingX: { xs: "20px", md: "100px" } }}>
                <Typography variant='h1' sx={{ textAlign: "center", paddingY: "20px", color: "text.primary" }}>
                    Content
                </Typography>

                <Grid container spacing={{ xs: 2, md: 5 }} sx={{ paddingBottom: "50px" }}>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea href="/tutorial">
                                <CardMedia
                                    component="img"
                                    image="https://firebasestorage.googleapis.com/v0/b/tokudev-c4305.appspot.com/o/pexels-markus-winkler-4160078.jpg?alt=media&token=c434e5e0-2668-41c6-9a1e-5accb9fe5573"
                                    alt="sebuah gambar" />
                                <CardContent variant="body2" color="text.secondary">
                                    <Typography gutterBottom variant="h5" component="div" align="center">
                                        Tutorial
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea href="/article">
                                <CardMedia
                                    component="img"
                                    image="https://firebasestorage.googleapis.com/v0/b/tokudev-c4305.appspot.com/o/pexels-markus-winkler-4106710.jpg?alt=media&token=99817407-7fe1-4afa-b4d1-3c6fed2ab256"
                                    alt="sebuah gambar" />
                                <CardContent variant="body2" color="text.secondary">
                                    <Typography gutterBottom variant="h5" component="div" align="center">
                                        Article
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid item xs={4}>
                        <Card>
                            <CardActionArea href="#">
                                <CardMedia
                                    component="img"
                                    image="https://firebasestorage.googleapis.com/v0/b/tokudev-c4305.appspot.com/o/images%2F1669219207_pexels-antonio-batini%C4%87-4164418.jpg?alt=media&token=8a9259be-793e-4851-8665-59068716c724"
                                    alt="Code React" />
                                <CardContent variant="body2" color="text.secondary">
                                    <Typography gutterBottom variant="h5" component="div" align="center">
                                        Program
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

        </React.Fragment>
    )
}