import { Box } from '@mui/material';
import React from 'react';
import BreadcrumbsToku from './breadcrumbs';
import HeadingToku from './heading';

function PostHeaderToku(props) {

    //variable drawerWidth dicopy dari file blog_post.js
    const drawerWidth = 240;

    return (
        //note calc(100vw - ${drawerWidth+17}px) di box di bawah, 17nya gak tahu dari mana
        <Box component="header" sx={{position: "relative", height: "200px", width: {xs: "100vw", sm: `calc(100vw - ${drawerWidth+17}px)`}, color: "primary.contrastText"}}>

            {/*Header Featured Image*/}
            <Box sx={{height: "100%", width:"100%"}}>
                <img src={props.imgUrl} alt={props.imgAlt} style={{height: "100%", width:"100%", objectFit:"cover"}}/>
                <Box sx={{height: "100%", width:"100%", position: "absolute", top:0, backgroundColor: "common.black", opacity: "0.5"}}></Box>
            </Box>

            {/*Header Content*/}
            <Box sx={{height: "100%", width:"100%", display: "flex", flexDirection:"column", position: "absolute", top:0, paddingLeft: 3, paddingRight: 3, paddingTop:2, paddingBottom:2}}>
                <BreadcrumbsToku/>
                <Box sx={{flexGrow:1}}></Box>
                <HeadingToku variant={1} title={props.title}/>
            </Box>
        </Box>
    );
}

export default PostHeaderToku;