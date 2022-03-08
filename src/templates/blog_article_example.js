import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import ImageToku from '../component/image';
import HeadingToku from '../component/heading';
import PostHeaderToku from '../component/post_header';
import Box from '@mui/material/Box';
import { tableOfContentsWidth, muiToolbarHeight, contentHorizontalPadding, contentVerticalPadding, borderRadius} from '../constant';
import ScrollSpy from 'react-scrollspy-navigation';
import CssBaseline from '@mui/material/CssBaseline';


function BlogArticleExample() {
    return ( 
        <React.Fragment>
          <PostHeaderToku title="Lorem Ipsum" date="7 March 2022" imgAlt="Lorem Ipsum" imgUrl="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"/>

          <Box sx={{display: "flex", marginTop: contentVerticalPadding}}>
            {/*Blog Post*/}
            <Box sx={{flexGrow: 1}}>
              <Typography paragraph align="justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam interdum augue ac turpis congue faucibus. Nullam enim ex, suscipit quis libero euismod, hendrerit aliquet metus. Aenean eleifend molestie lectus, accumsan condimentum purus tempor vitae. Aenean a lorem est. Donec tristique lacus ut egestas venenatis. Nullam eu mollis libero. Nunc tincidunt faucibus tortor, ut porttitor eros bibendum non. Vivamus vel libero ex. Curabitur condimentum ipsum in mi gravida, et cursus sem pretium. Etiam eget ante ut arcu iaculis eleifend. Donec varius magna eu elit dapibus bibendum. Curabitur luctus imperdiet mauris, non ultrices ligula ultrices at. Maecenas sollicitudin egestas tellus, ac congue libero dignissim eu. Praesent mollis massa dictum velit venenatis tempus. 
              </Typography>
              <Typography paragraph align="justify">
                Phasellus sit amet felis urna. Sed quis nulla in libero commodo tincidunt at a ex. Nunc viverra elit eros, blandit rhoncus odio sodales quis. Cras sagittis tortor vitae quam pulvinar aliquam quis in justo. Cras vel nibh ligula. Integer nec justo ornare, elementum lorem sit amet, bibendum tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed scelerisque ante tellus. Aenean ante mauris, cursus quis tincidunt sed, malesuada fermentum velit. Morbi porttitor, massa pellentesque volutpat maximus, urna lacus dapibus nunc, ac viverra risus nunc at justo. Nam aliquet lectus in metus pulvinar auctor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat lectus vitae nunc scelerisque laoreet. Donec bibendum diam quis posuere varius. Proin bibendum cursus dui viverra ornare. 
              </Typography>

              <section id="Lorem">
                <HeadingToku variant={2} title="Lorem"/>
                <Typography paragraph align="justify">
                  Proin consequat euismod ex, vel facilisis enim iaculis eget. Vivamus lacus felis, suscipit sed odio ut, luctus posuere neque. Curabitur vitae laoreet lacus, ac volutpat risus. Fusce sit amet ligula eget felis ultricies dapibus vitae eu magna. Mauris ac nunc nec mi egestas vulputate. Vestibulum tincidunt purus finibus, placerat risus quis, lobortis sapien. Vivamus dictum enim quis nisl condimentum, sed eleifend nulla tempor. Curabitur laoreet dictum neque, at porta nisi vehicula ac. Integer mollis nunc ornare, rutrum mauris a, dapibus est. Morbi eu auctor leo. Integer eu auctor urna, nec elementum ante. Quisque egestas nunc at nisi auctor, in commodo diam lobortis. Nulla nibh lorem, vestibulum a posuere at, accumsan ut urna. Nullam sed urna tortor. Maecenas ut risus et risus iaculis ultrices. 
                </Typography>
                <ImageToku image="https://blog.amartha.com/wp-content/uploads/2021/02/Lorem-Ipsum-alternatives.png" caption="Gambar tentang Lorem Ipsum dengan latar pink" alt="Lorem Ipsum"/>
                <Typography paragraph align="justify">
                  Aenean vel gravida eros, vitae tincidunt quam. Morbi consequat et magna a accumsan. Duis ut odio pulvinar, vehicula turpis eu, dignissim purus. Nunc odio est, iaculis in mollis vitae, tempor auctor lacus. Cras vel arcu id nibh dignissim suscipit non in metus. Nulla vel ipsum felis. Vestibulum nunc felis, molestie in varius et, eleifend aliquet sem. 
                </Typography>
              </section>

              <section id="Ipsum">
                <HeadingToku variant={2} title="Ipsum"/>
                <Typography paragraph align="justify">
                  Suspendisse eget felis sit amet diam faucibus imperdiet ac et libero. Phasellus dignissim lectus ut condimentum efficitur. Nunc sagittis eleifend mi, a pellentesque lectus congue eget. Donec a auctor lacus. Curabitur vel urna a metus luctus porttitor. Morbi tincidunt justo porttitor, sollicitudin ligula ut, ultrices purus. Donec molestie lorem elit, ultricies ullamcorper dolor consectetur in. Morbi finibus tincidunt velit, vitae aliquet lacus.
                </Typography>
              </section>
            </Box>

            {/*Table of contents*/}
            <Box sx={{
              width: tableOfContentsWidth,
              flexShrink: 0,
              '& .active':{
                color: "error.main"
              },
              '& a': {
                display: "block",
                borderRadius: borderRadius,
                px: 1.5,
                textDecoration: "none"
              },
              '& a:hover': {
                backgroundColor: 'primary.main',
                color: "primary.contrastText"
              }
            }}>
              <section style={{position: "sticky", top: `${parseInt(muiToolbarHeight)+parseInt(contentVerticalPadding)}px`, textAlign: "center", paddingLeft: contentHorizontalPadding}}>
                <Typography component="h2" variant="h5">Table of contents</Typography>
                <ScrollSpy>
                  <Link href="#Lorem" ref={React.createRef()}>Lorem hahbj shuh</Link>
                  <Link href="#Ipsum" ref={React.createRef()}>Ipsum</Link>
                </ScrollSpy>
              </section>
            </Box>
          </Box>
        </React.Fragment>
    );
}

export default BlogArticleExample;