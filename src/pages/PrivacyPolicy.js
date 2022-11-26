import { Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AppBarToku from '../component/general/app_bar'
import FooterToku from '../component/general/footer'
import HeadingToku from '../component/heading'
import {contentHorizontalPadding} from '../constant'

export default function PrivacyPolicy() {
  return (
    <Box sx={{ minHeight: "100vh" }}  padding={contentHorizontalPadding}>
      <HeadingToku variant={1} title="Privacy Policy" />
      <section id="cache">
        <HeadingToku variant={2} title="Cache" />
        <Typography paragraph align="justify">
          We use cache to store some of our website data in your PC to improve web performance and reduce server costs. Data we store in your computer including your preference to use dark mode or not and a list of links to all content in the tutorial series you view.
          If we didn't store links to all content in a tutorial series, it will cost us twice every time you open a page of the tutorial. So, if you didn't bother, please don't turn off our cache.
        </Typography>
      </section>
    </Box>
  )
}