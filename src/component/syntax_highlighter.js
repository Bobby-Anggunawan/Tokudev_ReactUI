import { AppBar, Box, Toolbar } from '@mui/material';
import React from 'react';
import AppBarToku from './general/app_bar';
import FooterToku from './general/footer';
import Prism from 'prismjs';

export default function SyntaxHighlighter() {

    var code = `<!DOCTYPE html>
    <html>
    <body>
    
    <h1>My First Web Page</h1>
    <p>My first paragraph.</p>
    
    <script>
    document.write(5 + 6);
    </script>
    
    </body>
    </html>`

    const html = Prism.highlight(code, Prism.languages.html, 'html');

  return (
    <Box>
        <AppBarToku/>
        <Toolbar/>
        {html}
        <FooterToku/>
    </Box>
  )
}