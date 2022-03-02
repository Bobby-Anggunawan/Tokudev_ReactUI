import React from 'react';
import { Typography } from '@mui/material';
import { Box } from '@mui/material';

function ImageToku(props) {
    return (
        <Box component="figure" sx={{border: 2, borderRadius: 3, borderColor: 'primary.main'}}>
            {/*Border masih bingung border radius di IMG ini. Seharusnya kan 3 ngikutin parrent, tapi malah 9 */}
            <img src={props.image} alt={props.alt} style={{width: "100%", height: "auto", borderTopLeftRadius: 9, borderTopRightRadius: 9}}/>
            <Box component="figcaption"><Typography variant="caption" sx={{mx: 2, display: 'block'}} align="center">{props.caption}</Typography > </Box>
        </Box>
    );
}

export default ImageToku;