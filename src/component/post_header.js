import { Box, Typography } from '@mui/material';
import React from 'react';
import { contentHorizontalPadding } from '../constant';
import BreadcrumbsToku from './breadcrumbs';
import HeadingToku from './heading';

function PostHeaderToku(props) {

    return (
        <Box component="header" sx={{position: "relative", left: "-"+contentHorizontalPadding, height: "200px", width: {xs: `calc(100% + ${parseInt(contentHorizontalPadding)*2}px)`}, color: "primary.contrastText"}}>

            {/*Header Featured Image*/}
            <Box sx={{height: "100%", width:"100%"}}>
                <img src={props.imgUrl} alt={props.imgAlt} style={{height: "100%", width:"100%", objectFit:"cover"}}/>
                <Box sx={{height: "100%", width:"100%", position: "absolute", top:0, backgroundColor: "common.black", opacity: "0.5"}}></Box>
            </Box>

            {/*Header Content*/}
            <Box sx={{color: "common.white",height: "100%", width:"100%", display: "flex", flexDirection:"column", position: "absolute", top:0, paddingLeft: 3, paddingRight: 3, paddingTop:2, paddingBottom:2}}>
                <BreadcrumbsToku/>
                <Box sx={{flexGrow:1}}></Box>
                <HeadingToku variant={1} title={props.title}/>
                <Typography>Last update {props.date}</Typography>
            </Box>
        </Box>
    );
}

export default PostHeaderToku;