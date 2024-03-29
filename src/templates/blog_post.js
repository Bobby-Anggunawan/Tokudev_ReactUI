import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ListSubheader from '@mui/material/ListSubheader';
import { contentHorizontalPadding, drawerWidth } from '../constant';
import AppBarToku from '../component/general/app_bar';
import FooterToku from '../component/general/footer';
import PageBuilder from '../myLib/page_builder';
import { useLocation } from "react-router-dom";
import NotFound from '../pages/NotFound';
import { Button, ListItemButton } from '@mui/material';
import { urlBuilder, tutorialList } from '../constant'


function BlogPost(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const sideBarObj = JSON.parse(props.sideBarJson)

  const location = useLocation();
  const tutorialName = location.pathname.split("/")[2];
  const judulArtikel = location.pathname.split("/")[3];
  const url = tutorialName + "\\" + judulArtikel;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar>
        <Typography>{"Tutorial " + tutorialList.get(tutorialName).title}</Typography>
      </Toolbar>
      <Divider />
      {/*65px di List maxHeight adalah tinggi toolbar. maxHeight nya emang harus di set dan gak boleh 100% karena kalo begitu efek stickynya gak kelihatan*/}
      <List
        sx={{
          width: '100%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: `calc(100vh - 65px)`,
          '& ul': { padding: 0 },
          minHeight: "100vh"
        }}
        subheader={<li />}
      >
        {sideBarObj.headerName.map((sectionId, indeks) => (
          <li key={`section-${sectionId}`}>
            <ul>
              {indeks > 0 && <Divider />}
              <ListSubheader>{`${sectionId}`}</ListSubheader>
              {sideBarObj.headerChild[indeks].map((item) => {
                if (judulArtikel != urlBuilder(item)) {
                  return (
                    <ListItem key={`${sectionId}-${item}`} disablePadding>
                      <ListItemButton component="a" href={urlBuilder(item)}>
                        <ListItemText primary={item} />
                      </ListItemButton>
                    </ListItem>
                  );
                }
                else {
                  return (
                    <ListItem key={`${sectionId}-${item}`} disablePadding>
                      <ListItemButton component="a" selected={true}>
                        <ListItemText primary={item} />
                      </ListItemButton>
                    </ListItem>
                  );
                }
              })}
            </ul>
          </li>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  //================================================
  const getPageNotFound = (isFound) => {
    setNotFound(isFound);
  }

  const [isNotFound, setNotFound] = React.useState(false);
  //================================================

  if (isNotFound) {
    return (
      <NotFound />
    );
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="Tutorial List"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            position: 'sticky',
            top: 0,
            '& .MuiPaper-root': {
              position: 'sticky'
            }
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, width: { sm: `calc(100% - ${drawerWidth}px)` }, paddingLeft: contentHorizontalPadding, paddingRight: contentHorizontalPadding }}
      >
        {
          //<BlogArticleExample/>
          <PageBuilder pageUrl={url} getNotFound={getPageNotFound} isTutorial />
        }
      </Box>
    </Box>
  );
}

BlogPost.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default BlogPost;