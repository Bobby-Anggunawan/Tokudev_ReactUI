import { Box, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AppBarToku from '../component/general/app_bar'
import FooterToku from '../component/general/footer'
import HeadingToku from '../component/heading'
import {contentHorizontalPadding} from '../constant'

export default function About() {
  return (
    <Box minHeight={"100vh"} padding={contentHorizontalPadding}>
      <HeadingToku variant={1} title="About Tokudev"/>
      <section id="kenapa_website_ini_dibuat">
        <HeadingToku variant={2} title="Kenapa Website Ini Dibuat?"/>
        <Typography paragraph align="justify">
          Ada banyak bidang yang dapat didalami di dunia IT. Saya ingin beajar banyak hal dari membuat game, membuat aplikasi mobile, kecerdasan buatan, sampai membuat website. Namun semakin banyak yang saya pelajari, saya sadar saya juga melupakan banyak hal yang sebelumnya saya pelajari. Wajar saja, saya tidak fokus belajar hanya satu bidang saja. Namun saya tidak suka melupakan apa yang sudah saya pelajari. Jadi saya perlu membuat catatan yang mudah diorganisasikan untuk mencatat hal yang telah dan akan saya pelajari. Oleh karena itu saya memutuskan membuat website ini.
        </Typography>
        <Typography paragraph align="justify">
          Fun fact!! saya belajar backend dan SEO selagi mengembangkan website ini.
        </Typography>
      </section>
    </Box>
  )
}