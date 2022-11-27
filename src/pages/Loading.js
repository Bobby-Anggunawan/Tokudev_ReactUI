import { Box, CircularProgress } from '@mui/material'
import React from 'react'

export default function LoadingPage() {
  return (
    <Box sx={{minHeight: "100vh"}}>
        <CircularProgress size="20vh" thickness="4.3" sx={{position: "relative", top: "40vh", left: 'calc(50vw - 10vh)'}}/>
    </Box>
  )
}
