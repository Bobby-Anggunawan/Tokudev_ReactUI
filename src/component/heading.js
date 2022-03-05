import React from 'react';
import { IconButton, Typography } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { styled } from '@mui/system';
import Slide from '@mui/material/Slide';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';


const MyHeading = styled(Typography)({
    '&:hover > .MuiIconButton-root': {
        visibility: "visible",
    }
});
  

function HeadingToku(props) {
    return (
        <MyHeading variant={props.variant}>
            <Typography component="span" variant={props.variant}>{props.title}</Typography>
            <IconButton sx={{visibility: "hidden"}} onClick={() => {navigator.clipboard.writeText(props.title)}}>
                <LinkIcon/>
            </IconButton>
        </MyHeading>
    );
}

export default HeadingToku;