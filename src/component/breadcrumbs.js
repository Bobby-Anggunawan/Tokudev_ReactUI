import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import Typography from '@mui/material/Typography';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ExploreIcon from '@mui/icons-material/Explore';
import { useLocation } from "react-router-dom";
import { Box } from '@mui/system';
import { firstLetterUpercase } from '../constant'

function BreadcrumbsToku(props) {

  const location = useLocation();
  console.log(location.pathname.split("/"));

  if (location.pathname.split("/")[1] == "tutorial") {
    return (
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />} sx={{ color: "primary.contrastText" }}>
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
          href="/tutorial"
        >
          <MenuBookIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Tutorial
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href={`/tutorial/${location.pathname.split("/")[2]}`}
        >
          <ExploreIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {firstLetterUpercase(location.pathname.split("/")[2])}
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="grey.300">
          <CatchingPokemonIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {props.postTitle}
        </Typography>
      </Breadcrumbs>
    );
  }
  else {
    return (
      <Breadcrumbs aria-label="breadcrumb" separator={<NavigateNextIcon fontSize="small" />} sx={{ color: "primary.contrastText" }}>
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
          href="/article"
        >
          <MenuBookIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Article
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="grey.300">
          <CatchingPokemonIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          {props.postTitle}
        </Typography>
      </Breadcrumbs>
    );
  }
}

export default BreadcrumbsToku;