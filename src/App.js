import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import BlogPost from './templates/blog_post';
import Home from './pages/Home';
import { prefersDarkMode, myTheme, darkModeTheme, lightModeTheme } from './constant';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {

  const [mode, setMode] = React.useState('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="/blog_post">
              <BlogPost/>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
export {ColorModeContext};