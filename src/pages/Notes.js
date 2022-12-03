import { Box, Button } from '@mui/material';
import React from 'react'
import {getTagList, getTagProps} from '../constant'
import refBuilder from '../myLib/refBuilder';


export default function Notes() {


  const test = `sekarang aku mau coba citasi <sup data-ref-title="Definition and Usage" data-link="https://www.w3schools.com/jsref/jsref_substring.asp" class="citation">[xCitNum]</sup>
  mungkin akan gagal tapi aku harus terus semangat mencoba sampai berhasil <sup data-ref-title="JavaScript String replace()" data-link="https://www.w3schools.com/jsref/jsref_replace.asp" class="citation">[xCitNum]</sup>
  ini yang ketiga tapi datanya sama dengan yang pertama <sup data-ref-title="Definition and Usage" data-link="https://www.w3schools.com/jsref/jsref_substring.asp" class="citation">[xCitNum]</sup>
  ini yang keempat dam data baru <sup data-ref-title="JavaScript Class Reference" data-link="https://www.w3schools.com/jsref/jsref_classes.asp" class="citation">[xCitNum]</sup>
  ini yang kelima data yang keempat <sup data-ref-title="JavaScript Class Reference" data-link="https://www.w3schools.com/jsref/jsref_classes.asp" class="citation">[xCitNum]</sup>`

  
  const hasil = refBuilder(test, ["Mozilla Array.prototype.map()", "JavaScript Class Reference"], ["https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map", "https://www.w3schools.com/jsref/jsref_classes.asp"])

  return (
    <Box sx={{ minHeight: "100vh" }}>
      <p>TEST</p>

      {
        hasil.tag.map((data, x) => {
          return(
            <p key={x}>{data}</p>
          );
        })
      }

      <p>{hasil.processedData}</p>
    </Box>
  )
}
