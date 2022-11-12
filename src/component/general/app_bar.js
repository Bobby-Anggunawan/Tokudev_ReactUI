import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Link, Box, Button } from '@mui/material';
import Switch from '@mui/material/Switch';
import App from '../../App';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { ColorModeContext } from '../../App';

function AppBarToku(props){

  var myVar = localStorage['DarkModeValue'] || 'light';
  var initTogle = false;
  if(myVar === 'light') initTogle = true;
  else initTogle = false;

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const [checked, setChecked] = React.useState(initTogle);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    colorMode.toggleColorMode();

    if(event.target.checked) localStorage['DarkModeValue'] = 'light';
    else localStorage['DarkModeValue'] = 'dark';
  };

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
          <Link href="/" variant="h6" underline="none" color="common.white">TokuDev</Link>
        </Toolbar>
      </AppBar>
        );
    }

    return(
    <AppBar position="fixed">
        <Toolbar>
            <Link href="/" variant="h6" underline="none" color="common.white">TokuDev</Link>

            <Box sx={{ flexGrow: 1 }}></Box>

            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button>

            <Box sx={{ flexGrow: 1 }}></Box>

            <Typography>{checked? 'Dark' : 'Light'} Mode</Typography>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
              color="secondary"
            />

        </Toolbar>
    </AppBar>
    );
}


export default AppBarToku;