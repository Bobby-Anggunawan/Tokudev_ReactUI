import React from 'react'
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import AppBarToku from '../component/general/app_bar';
import suya from '../MyImg/wallpaperSuya.png';
import FooterToku from '../component/general/footer';

export default function Home() {

  return (
    <Box sx={{height: "100vh", margin: 0, padding:0}}>

        <AppBarToku></AppBarToku>

        <img src={suya} style={{width: "100vw", height: "100vh", position: "fixed", left: "0px", top: "0px", zIndex:-1}}></img>

        <Box sx={{height: "100vh", paddingX: {xs: "20px", md: "50px"}}}>
            <Box paddingTop={"20vh"}>
                <Typography variant='h1' component="span" sx={{backgroundColor: "primary.main", color: "primary.contrastText", paddingX: "10px"}}>Simple</Typography>
            </Box>
            <Typography variant='h3' component="span" sx={{backgroundColor: "primary.main", color: "primary.contrastText", paddingX: "10px"}}>Don't disturb me!!</Typography>
        </Box>

        <Box sx={{backgroundColor: "primary.contrastText", paddingX: {xs: "20px", md: "100px"}}}>
            <Typography variant='h1' sx={{textAlign: "center", paddingY: "20px", color: "text.primary"}}>
                Content
            </Typography>

            <Grid container spacing={{xs: 2, md: 5}} sx={{paddingBottom: "50px"}}>
                <Grid item xs={4}>
                    <Card>
                        <CardActionArea href="/tutorial">
                            <CardMedia
                                component="img"
                                image="https://firebasestorage.googleapis.com/v0/b/tokudev-c4305.appspot.com/o/pexels-markus-winkler-4160078.jpg?alt=media&token=c434e5e0-2668-41c6-9a1e-5accb9fe5573"
                                alt="sebuah gambar"/>
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
                                alt="sebuah gambar"/>
                            <CardContent variant="body2" color="text.secondary">
                                <Typography gutterBottom variant="h5" component="div" align="center">
                                    Article
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            </Grid>
        </Box>

        <FooterToku></FooterToku>

    </Box>
  )
}