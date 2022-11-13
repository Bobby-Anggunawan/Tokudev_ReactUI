import { Box, CssBaseline, Toolbar } from '@mui/material'
import React from 'react'
import AppBarToku from '../component/general/app_bar'
import FooterToku from '../component/general/footer'
import PageBuilder from '../myLib/page_builder'
import { contentHorizontalPadding, drawerWidth } from '../constant';

export default function ArticlePost() {

  return (
    <Box>
        <CssBaseline/>
        <AppBarToku/>
        <Toolbar/>


        <Box    component="main"
                sx={{ flexGrow: 1, paddingLeft: contentHorizontalPadding, paddingRight: contentHorizontalPadding}}>
            <PageBuilder/>
        </Box>

        <FooterToku/>
    </Box>
  )
}