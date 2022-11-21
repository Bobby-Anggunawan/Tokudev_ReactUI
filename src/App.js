import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import BlogPost from './templates/blog_post';
import Home from './pages/Home';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import NotFound from './pages/NotFound';
import Article from './pages/Category/Article';
import Tutorial from './pages/Category/Tutorial';
import Tutorial_Content from './pages/Category/Tutorial-Content';
import ArticlePost from './templates/article_post';
import PagePoster from './pages/PagePoster';
import About from './pages/About';
import Login from './pages/Login';
import FileUploader from './pages/FileUploader';
import PrivacyPolicy from './pages/PrivacyPolicy';

const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {

  var myVar = localStorage['DarkModeValue'] || 'light';

  const [mode, setMode] = React.useState(myVar);
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
            <Route exact path="/login">
              <Login/>
            </Route>
            <Route exact path="/upload_file">
              <FileUploader/>
            </Route>
            <Route exact path="/about">
              <About/>
            </Route>
            <Route exact path="/privacy_policy">
              <PrivacyPolicy/>
            </Route>
            <Route path="/page_poster">
              <PagePoster/>
            </Route>
            <Route exact path="/article">
              <Article/>
            </Route>
            <Route path="/article/*">
              <ArticlePost/>
            </Route>
            <Route exact path="/tutorial">
              <Tutorial/>
            </Route>
            <Route path="/tutorial/*/*">
              <BlogPost/>
            </Route>
            <Route path="/tutorial/*">
              <Tutorial_Content/>
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            <Route path="*">
              <NotFound/>
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
export {ColorModeContext};