import { Box, CssBaseline, Toolbar } from '@mui/material'
import React from 'react'
import AppBarToku from '../component/general/app_bar'
import FooterToku from '../component/general/footer'
import PageBuilder from '../myLib/page_builder'
import { contentHorizontalPadding, drawerWidth } from '../constant';
import NotFound from '../pages/NotFound'
import { useLocation } from "react-router-dom";

export default function ArticlePost() {

  //================================================
  const getPageNotFound = (isFound) => {
    setNotFound(isFound);
  }

  const [isNotFound, setNotFound] = React.useState(false);
  //================================================


  const location = useLocation();
  const judulArtikel = location.pathname.split("/")[2];
  const url = `\\${judulArtikel}`;

  if (isNotFound) {
    return (
      <NotFound />
    );
  }

  return (
    <Box component="main" minHeight="100vh"
      sx={{ flexGrow: 1, paddingLeft: contentHorizontalPadding, paddingRight: contentHorizontalPadding }}>
      
      <CssBaseline />

      <PageBuilder pageUrl={url} getNotFound={getPageNotFound} isArticle />
    </Box>
  )
}