import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ListSubheader from '@mui/material/ListSubheader';
import { Container, Grid, ListItemButton } from '@mui/material';

function FooterToku(props){
    return(
        <Box component="footer" sx={{backgroundColor: 'primary.main'}}>
        <Grid container>
          <Grid item xs={6}>
            <List subheader={
              <ListSubheader sx={{backgroundColor: 'primary.main', textAlign: "center", color: 'primary.contrastText'}}>
                Resources
              </ListSubheader>
            }>
              <ListSubheader></ListSubheader>
              <ListItemButton component="a" href="/about">
                <ListItemText primary="About" primaryTypographyProps={{align: "center", color: 'grey.400'}}/>
              </ListItemButton>
              <ListItemButton component="a" href="#">
                <ListItemText primary="Contact" primaryTypographyProps={{align: "center", color: 'grey.400'}}/>
              </ListItemButton>
              <ListItemButton component="a" href="#">
                <ListItemText primary="Sitemap" primaryTypographyProps={{align: "center", color: 'grey.400'}}/>
              </ListItemButton>
            </List>
          </Grid>

          <Grid item xs={6}>
            <List subheader={
              <ListSubheader sx={{backgroundColor: 'primary.main', textAlign: "center", color: 'primary.contrastText'}}>
                Legal
              </ListSubheader>
            }>
              <ListItemButton component="a" href="#">
                <ListItemText primary="Privacy Policy" primaryTypographyProps={{align: "center", color: 'grey.400'}}/>
              </ListItemButton>
              <ListItemButton component="a" href="#">
                <ListItemText primary="Terms of Use" primaryTypographyProps={{align: "center", color: 'grey.400'}}/>
              </ListItemButton>
            </List>
          </Grid>

          <Grid item xs={12} sx={{backgroundColor: 'info.dark', color: 'info.contrastText'}}>
            <Typography align="center">
              Copyright © 2022 Link
            </Typography>
            <Typography align="center">
              Build with <Link href="https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-6.0">ASP.NET</Link> as backend and <Link href="https://mui.com/">MUI</Link>, the <Link href="https://reactjs.org/">React</Link> UI library ~ Based on <Link href="https://material.io/">Google Material Design</Link> ~ Hosted on <Link href="https://cloud.google.com/">Google Cloud</Link>
            </Typography>
          </Grid>
        </Grid>
      </Box>
    );
}

export default FooterToku;