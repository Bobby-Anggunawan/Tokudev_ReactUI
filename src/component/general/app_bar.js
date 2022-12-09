import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { Link, Box, Button, Stack } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Switch from '@mui/material/Switch';
import App from '../../App';
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';
import { ColorModeContext } from '../../App';
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { contentHorizontalPadding } from "../../constant";

function AppBarToku(props) {

  var myVar = localStorage['DarkModeValue'] || 'light';
  var initTogle = false;
  if (myVar === 'light') initTogle = true;
  else initTogle = false;

  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  const [checked, setChecked] = React.useState(initTogle);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    colorMode.toggleColorMode();
    if (event.target.checked) localStorage['DarkModeValue'] = 'light';
    else localStorage['DarkModeValue'] = 'dark';
  };


  //=========================
  const auth = getAuth();
  const [isLogin, setLogin] = React.useState(false);
  const [userPhoto, setUserPhoto] = React.useState("");
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUserPhoto(user.photoURL);
      setLogin(true);
    } else {
      // User is signed out
      // ...
    }
  });



  if (props.appBarType == "blogPost") {
    return (
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
          <Link href="/" variant="h6" underline="none" color="common.white" rel="nofollow">TokuDev</Link>
          <Box sx={{ flexGrow: 1 }}></Box>

          <Typography>{checked ? 'Dark' : 'Light'} Mode</Typography>
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

  return (
    <AppBar position="fixed">
      <Toolbar>
        {isLogin &&
          <Stack direction="row">
            <Avatar alt="Avatar" src={userPhoto} />
            <Box width={contentHorizontalPadding}></Box>
          </Stack>
        }
        <Link href="/" variant="h6" underline="none" color="common.white" rel="nofollow">TokuDev</Link>

        <Box sx={{ flexGrow: 1 }}></Box>

        <Button color="inherit" href="/" rel="nofollow">Home</Button>
        <Button color="inherit" href="/about" rel="nofollow">About</Button>
        <Button color="inherit">Contact</Button>

        <Box sx={{ flexGrow: 1 }}></Box>

        <Typography>{checked ? 'Dark' : 'Light'} Mode</Typography>
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