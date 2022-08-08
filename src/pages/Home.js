import React from 'react'
import Container from '@mui/material/Container'
import { Box, Typography } from '@mui/material';
import logo from '../MyImg/tokudev.png';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import AppBarToku from '../component/general/app_bar';

export default function Home() {
  return (
    <Container sx={{height: "100vh"}}>
        <AppBarToku></AppBarToku>

        <Box sx={{display: "table", height: "100%", width: "100%"}}>

            <Box sx={{display: "table-cell", verticalAlign: "middle"}}>
                <Box component="img" sx={{width: {xs: "80%", md: "30%"}, display: "block", marginLeft: "auto", marginRight: "auto", paddingTop: "30px"}} src={logo} alt="logo">
                </Box>
                <Typography variant="h1" component="p" align="center" sx={{paddingTop: "30px"}}>
                    TokuDev
                </Typography>
            </Box>
        </Box>
    </Container>
  )
}