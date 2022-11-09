import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { borderRadius } from '../constant';

function ImageToku(props) {
    return (
        <Box component="figure">
            {/*Border masih bingung border radius di IMG ini. Seharusnya kan 3 ngikutin parrent, tapi malah 9 */}
            <img src={props.image} alt={props.altTxt} style={{width: "100%", height: "auto", borderRadius: borderRadius}}/>
            <Box component="figcaption"><Typography variant="caption">{props.caption}</Typography > </Box>
        </Box>
    );
}

export default ImageToku;