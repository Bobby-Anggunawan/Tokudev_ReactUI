import * as React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
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
import BasicLayout from './basic_layout';

const ColorModeContext = React.createContext({ toggleColorMode: () => { } });

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<BasicLayout />}>
              <Route index element={<Home />} />
              <Route path="login" element={<Login/>} />
              <Route path="upload_file" element={<FileUploader/>} />
              <Route path="about" element={<About/>} />
              <Route path="privacy_policy" element={<PrivacyPolicy/>} />
              <Route path="page_poster" element={<PagePoster/>} />
              <Route path="article" element={<Article/>} />
              <Route path="article/*" element={<ArticlePost/>} />
              <Route path="*" element={<NotFound/>} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
export { ColorModeContext };