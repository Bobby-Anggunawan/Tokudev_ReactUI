import React from 'react'
import Container from '@mui/material/Container'
import { Box, Button, Grid, Typography } from '@mui/material';
import logo from '../MyImg/tokudev.png';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
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

        <Box sx={{backgroundColor: "primary.contrastText", paddingX: {xs: "20px", md: "50px"}}}>
            <Typography variant='h1' sx={{textAlign: "center", paddingY: "20px"}}>
                Content
            </Typography>

            <Grid container spacing={2} sx={{paddingBottom: "50px"}}>
                <Grid item xs={6}>
                    <Button variant="outlined" sx={{width:"100%"}} href="/blog_post">Article</Button>
                </Grid>
                <Grid item xs={6}>
                    <Button variant="outlined" sx={{width:"100%"}} href="/blog_post">Unity Tutorial</Button>
                </Grid>
            </Grid>
        </Box>

        <FooterToku></FooterToku>

    </Box>
  )
}