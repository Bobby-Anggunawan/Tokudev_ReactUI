import { AppBar, Box, CssBaseline, Tab, Tabs, Toolbar } from '@mui/material';
import React from 'react';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';



function TabPanel(props) {
  const { children, value, index } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      sx={{backgroundColor: "#302c2c"}}
    >
      {children}
    </Box>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const EnumType = {
  Markup: "markup",
  C_like: "clike",

  HTML: "html",
  XML: "xml",
  SVG: "svg",
  CSS: "css",
  React_JSX: "jsx",
  React_TSX: "tsx",

  JavaScript: "javascript",
  GDScript: "gdscript"
}

function PrismLoadLanguages(){
  require('prismjs/components/prism-csharp');
  require('prismjs/components/prism-dart');
  require('prismjs/components/prism-gdscript');
}

function SyntaxHighlighter(props) {
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>

      <CssBaseline />

      <Tabs value={value} onChange={handleChange}>
        {
          props.langList.map((data, x) => {
            return (
              <Tab label={data} key={x}/>
            );
          })
        }
      </Tabs>
      {
        props.code.map((data, x) => {
          return (
            <TabPanel value={value} index={x} key={x}>
              <pre className="line-numbers">
                <code className={`language-${props.langList[x]}`} dangerouslySetInnerHTML={{ __html: data }}>
                </code>
              </pre>
            </TabPanel>
          );
        })
      }
    </Box>
  )
}


SyntaxHighlighter.propTypes = {
  langList: PropTypes.array.isRequired,
  code: PropTypes.array.isRequired
};

export default SyntaxHighlighter;
export {EnumType, PrismLoadLanguages};