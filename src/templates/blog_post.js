import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import AdbIcon from '@mui/icons-material/Adb';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ImageToku from '../component/image';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import ListSubheader from '@mui/material/ListSubheader';
import BlogArticleExample from './blog_article_example';
import { Container, Grid, ListItemButton } from '@mui/material';
import { height } from '@mui/system';
import { contentHorizontalPadding } from '../constant';
import AppBarToku from '../component/general/app_bar';
import FooterToku from '../component/general/footer';
import PageBuilder from '../myLib/page_builder';


const drawerWidth = 240;

var sideBarJson = `
{
  "headerName": ["satu", "dua", "tiga", "empat", "lima", "enam", "tujuh"],
  "headerChild": [
    ["a", "b"],
    ["c", "d", "e", "f"],
    ["g"],
    ["h", "i", "j"],
    ["k", "l", "m", "n", "o", "p"],
    ["q", "r", "s", "t"],
    ["u", "v"]
  ]
}
`;
const sideBarObj = JSON.parse(sideBarJson);

function BlogPost(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <div>
      <Toolbar>
        <Typography>Tutorial React</Typography>
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
      }}
      subheader={<li />}
    >
      {sideBarObj.headerName.map((sectionId, indeks) => (
        <li key={`section-${sectionId}`}>
          <ul>
            <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader>
            {sideBarObj.headerChild[indeks].map((item) => (
              <ListItem key={`item-${sectionId}-${item}`}>
                <ListItemText primary={`Item ${item}`} />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;


  return (
    <Box>
      <CssBaseline />
      <AppBarToku appBarType="blogPost" drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle}></AppBarToku>

      {/*Sidebar dan main content container*/}
      <Box sx={{ display: 'flex'}}>
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
          sx={{ flexGrow: 1, width: {  sm: `calc(100% - ${drawerWidth}px)` }, paddingLeft: contentHorizontalPadding, paddingRight: contentHorizontalPadding}}
        >
          {/*Toolbar ini sebenarnya gak penting. Tapi kalau dihapus, tulisan paling atas di content nanti ada di bawah appbar(gak kelihatan. Coba aja hapus terus lihat pengaruhnya)*/}
          <Toolbar />
          {
            //<BlogArticleExample/>
            <PageBuilder/>
          }
        </Box>
      </Box>

      <FooterToku></FooterToku>
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