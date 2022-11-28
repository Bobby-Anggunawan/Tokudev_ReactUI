import { Box } from '@mui/material'
import React from 'react'
import SyntaxHighlighter from '../component/syntax_highlighter'
import {EnumType} from '../component/syntax_highlighter'

const html = `<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>`;

const css = `h1 {
  color: blue;
  font-family: verdana;
  font-size: 300%;
}
p {
  color: red;
  font-family: courier;
  font-size: 160%;
}`;

const cLike= `#include <stdio.h>
int main() {   
    int number;
   
    printf("Enter an integer: ");  
    
    // reads and stores input
    scanf("%d", &number);

    // displays output
    printf("You entered: %d", number);
    
    return 0;
}`;


export default function Notes() {
  return (
    <Box sx={{minHeight: "100vh"}}>
      <SyntaxHighlighter langList={[EnumType.HTML, EnumType.CSS, EnumType.C_like]} code={[html, css, cLike]}/>
    </Box>
  )
}
