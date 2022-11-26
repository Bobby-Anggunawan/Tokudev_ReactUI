import React from 'react';
import { IconButton, Typography } from '@mui/material';
import LinkIcon from '@mui/icons-material/Link';
import { styled } from '@mui/system';
import { useLocation } from "react-router-dom";
import {url, urlBuilder} from '../constant'


const MyHeading = styled(Typography)({
    '&:hover > .MuiIconButton-root': {
        visibility: "visible",
    }
});
  

function HeadingToku(props) {

    const [linkURL, setLinkURL] = React.useState([]);

    const location = useLocation();

    React.useEffect(() => {
        setLinkURL(location.pathname);
    }, []);



    return (
        <React.Fragment>
            {
                /*Dirender dengan ternary operator untuk hilangin tombol salin link di H1 saja*/
                (props.variant>1)?

                /*Yang dirender kalo bukan h1*/
                <MyHeading variant={`h${props.variant}`}>
                    <Typography component="span" variant={`h${props.variant+2}`} sx={{fontWeight: "normal"}}>{props.title}</Typography>
                    <IconButton sx={{visibility: "hidden"}} onClick={() => {navigator.clipboard.writeText(`${url}${linkURL}#${urlBuilder(props.title)}`)}}>
                        <LinkIcon/>
                    </IconButton>
                </MyHeading>:

                /*untuk render h1 */
                <Typography component="h1" variant="h2" noWrap sx={{fontWeight: "normal"}}>{props.title}</Typography>
            }
        </React.Fragment>
    );
}

export default HeadingToku;