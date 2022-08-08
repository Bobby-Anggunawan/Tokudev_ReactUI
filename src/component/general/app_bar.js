import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

function AppBarToku(props){
    if(props.appBarType == "blogPost"){
        return(
            <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${props.drawerWidth}px)` },
          ml: { sm: `${props.drawerWidth}px` },
        }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={props.handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Link href="/" variant="h6" underline="none" color="primary.contrastText">TokuDev</Link>
        </Toolbar>
      </AppBar>
        );
    }

    return(
    <AppBar position="fixed">
        <Toolbar>
            <Link href="/" variant="h6" underline="none" color="primary.contrastText">TokuDev</Link>
        </Toolbar>
    </AppBar>
    );
}

export default AppBarToku;