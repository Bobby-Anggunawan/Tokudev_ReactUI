import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Typography from '@mui/material/Typography';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AdbIcon from '@mui/icons-material/Adb';

function BreadcrumbsToku() {
    return (
        <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />} sx={{color: "primary.contrastText"}}>
            <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              href="/"
            >
              <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Tokudev
            </Link>
            <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              href="/"
            >
              <MenuBookIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Tutorial
            </Link>
            <Link
              underline="hover"
              sx={{ display: 'flex', alignItems: 'center' }}
              color="inherit"
              href="/"
            >
              <AdbIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Android
            </Link>
            <Typography
              sx={{ display: 'flex', alignItems: 'center' }}
              color="grey.300">
              <CatchingPokemonIcon sx={{ mr: 0.5 }} fontSize="inherit" />
              Paging Tutorial
            </Typography>
          </Breadcrumbs>
    );
}

export default BreadcrumbsToku;