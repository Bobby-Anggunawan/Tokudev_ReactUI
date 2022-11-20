import { Box, Typography } from '@mui/material';
import React from 'react'
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import menkominfo from '../MyImg/Johnny_G_Plate.jpg';

export default function NotFound() {

  const location = useLocation();
  console.log('hash', location.hash);
  console.log('pathname', location.pathname);
  console.log('search', location.search);

  return (
    <Box sx={{ height: "100vh", margin: 0, padding: 0 }}>
      <img src={menkominfo} style={{ width: "100vw", height: "100vh", position: "fixed", left: "0px", top: "0px", zIndex: -1 }}></img>

      <Box sx={{ height: "100vh", paddingX: { xs: "20px", md: "50px" } }}>
        <Box margin="auto" paddingTop="30vh">
          <Typography paddingBottom="20px" align="center" variant='h1' display="block" component="span" sx={{ color: "common.white", textShadow: "0px 2px 5px rgba(0,0,0,1)", fontWeight: "500" }}>Error 404, page has been "BLOCKED"</Typography>
          <Typography align="center" variant='h3' display="block" component="span" sx={{ color: "common.white", textShadow: "0px 2px 5px rgba(0,0,0,1)", fontWeight: "500" }}>Ministry of Communication and Information Technology, Indonesia</Typography>
        </Box>
      </Box>
    </Box>
  )
}