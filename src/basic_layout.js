import { Box, Toolbar } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'
import AppBarToku from './component/general/app_bar'
import FooterToku from './component/general/footer'

export default function BasicLayout() {
    return (
        <React.Fragment>
            <AppBarToku />
            <Toolbar />

            <Outlet/>

            <FooterToku />
        </React.Fragment>
    )
}