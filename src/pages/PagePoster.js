import { Box, Button, MenuItem, Stack, TextField, Toolbar, Card, Typography, Grid } from '@mui/material'
import React from 'react'
import AppBarToku from '../component/general/app_bar'
import FooterToku from '../component/general/footer'
import { contentHorizontalPadding, db } from '../constant';
import PageBuilderFunction from '../myLib/pageBuilderFunction';
import { getFirestore, collection, getDoc, doc, setDoc, Timestamp, updateDoc } from "firebase/firestore";


async function postTutorial(category, division, subDivision, postTitle, postSubTitle, posterImage, content){
  const docData = {
    title: postTitle,
    subTitle: postSubTitle,
    poster: posterImage,
    date: Timestamp.now(),
    content: content
  };

  let buildURL = postTitle;
  //hapus semua non alphanumerical character
  //ganti spasi dengan _
  //buat semua huruf jadi kecil
  buildURL = buildURL.replace(/[^\w\s]/gi,"").replaceAll(" ", "_").toLowerCase()
  buildURL = division+"\\"+buildURL;

  await setDoc(doc(db, "TutorialPost", buildURL), docData);

  
  //========================
  const tutorialContentView = doc(db, "TutorialContentView", division);
  const docSnap = await getDoc(tutorialContentView);

  var headerName = docSnap.data().headerName;
  for(var x =0; x<headerName.length; x++){
    if(headerName[x]==subDivision){
      var temp = docSnap.data()[`headerChild${x+1}`];
      temp.push(postTitle);
      await updateDoc(tutorialContentView, {
        [`headerChild${x+1}`] : temp
      });

      break;
    }
  }
  
}


export default function PagePoster() {

  const [urlTitle, setUrlTitle] = React.useState([]);
  React.useEffect(() => {
      const docRef = doc(db, "CategoryList", "Tutorial");
      const docSnap = getDoc(docRef).then((doc) => {
        setUrlTitle(doc.data().urlTitle);
      });
  }, []);

  const [listSubUrlTitle, listSetUrlTitle] = React.useState([]);
  const [subUrlTitleStore, setSubUrlTitleStore] = React.useState("");
  const subAddUrlTitleStore = (event) => {
    setSubUrlTitleStore(event.target.value);
  };

  const [urlTitleStore, setUrlTitleStore] = React.useState("");
  const addUrlTitleStore = (event) => {
    var eventValue = event.target.value;
    setUrlTitleStore(eventValue);

    const docRef2 = doc(db, "TutorialContentView", eventValue);
    const docSnap2 = getDoc(docRef2).then((doc) => {
      listSetUrlTitle(doc.data().headerName);
    });
  };
  //===================================
  const [postTitle, setPostTitle] = React.useState("");
  const addSetPostTitle = (event) => {
    setPostTitle(event.target.value);
  };
  const [postSubTitle, setPostSubTitle] = React.useState("");
  const addSetSubPostTitle = (event) => {
    setPostSubTitle(event.target.value);
  };
  const [postPoster, setPostPoster] = React.useState("");
  const addSetPostPoster = (event) => {
    setPostPoster(event.target.value);
  };


  const [urlCategory, setUrlCategory] = React.useState("Article");
  const addsetUrlCategory = (event) => {
    setUrlCategory(event.target.value);
  };

  const [paragraphTypes, setParagraphType] = React.useState("p");
  const handleChange = (event) => {
    setParagraphType(event.target.value);
  };

  const [newParagraph, setNewParagraph] = React.useState("");
  const addNewParagraph = (event) => {
    setNewParagraph(event.target.value);
  };
  const [newParagraph1, setNewParagraph1] = React.useState("");
  const addNewParagraph1 = (event) => {
    setNewParagraph1(event.target.value);
  };
  const [newParagraph2, setNewParagraph2] = React.useState("");
  const addNewParagraph2 = (event) => {
    setNewParagraph2(event.target.value);
  };

  const [contents, setContents] = React.useState([]);
  const [contentResult, setContentResult] = React.useState([]);
  const addContents = (event) => {
    if(paragraphTypes == "p"){
      if(newParagraph!=""){
        var contain = contents;
        contain.push("p");
        contain.push(newParagraph);
        setContents(contain);

        setContentResult(PageBuilderFunction(contents).Hasil);
      }
    }
    else if(paragraphTypes == "img"){
      if(newParagraph !="" && newParagraph1 !="" && newParagraph2 !=""){
        var contain = contents;
        contain.push("img");
        contain.push(newParagraph2);
        contain.push(newParagraph1);
        contain.push(newParagraph);
        setContents(contain);

        setContentResult(PageBuilderFunction(contents).Hasil);
      }
    }
    else if(paragraphTypes == "h1" && newParagraph!= ""){
      var contain = contents;
      contain.push("h1");
      contain.push(newParagraph);
      setContents(contain);
      setContentResult(PageBuilderFunction(contents).Hasil);
    }
    else if(paragraphTypes == "h2" && newParagraph!= ""){
      var contain = contents;
      contain.push("h2");
      contain.push(newParagraph);
      setContents(contain);
      setContentResult(PageBuilderFunction(contents).Hasil);
    }
    else if(paragraphTypes == "h3" && newParagraph!= ""){
      var contain = contents;
      contain.push("h3");
      contain.push(newParagraph);
      setContents(contain);
      setContentResult(PageBuilderFunction(contents).Hasil);
    }
    else if(paragraphTypes == "h4" && newParagraph!= ""){
      var contain = contents;
      contain.push("h4");
      contain.push(newParagraph);
      setContents(contain);
      setContentResult(PageBuilderFunction(contents).Hasil);
    }

    discardContent();
  }
  const discardContent = (event) => {
    setNewParagraph("");
    setNewParagraph1("");
    setNewParagraph2("");
  }

  return (
    <Box>
      <AppBarToku/>
      <Toolbar/>
      
      <Box minHeight="100vh" padding={contentHorizontalPadding}>

        <Box display= "flex">
          <Stack flex="50%" spacing={2}>
            {contentResult.map((items) =>(
              <Card key={Math.floor(Date.now() / 1000)}>
                {items}
              </Card>
            ))}
          </Stack>
          
          <Box flex="50%" paddingLeft={contentHorizontalPadding}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField id="urlCategory"
                    label="Category"
                    margin="normal"
                    select
                    value={urlCategory}
                    onChange={addsetUrlCategory}
                    fullWidth>
                  <MenuItem value="Article">Article</MenuItem>
                  <MenuItem value="Tutorial">Tutorial</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={6}>
                {(urlCategory=="Tutorial" && urlTitle.length>0) &&
                  <TextField id="urlDivision"
                      label="Division"
                      margin="normal"
                      select
                      fullWidth
                      value={urlTitleStore}
                      onChange={addUrlTitleStore}>
                    {urlTitle.map((dataURLTitle) => {
                      return(
                        <MenuItem value={dataURLTitle} key={dataURLTitle}>{dataURLTitle}</MenuItem>
                      );
                    })}
                  </TextField>
                }
              </Grid>
            </Grid>
            {
              (urlCategory=="Tutorial")&&
              <TextField id="subUrlDivision"
                        label="Sub Division"
                        margin="normal"
                        fullWidth
                        select
                        value={subUrlTitleStore}
                        onChange={subAddUrlTitleStore}>
                {listSubUrlTitle.map((aDataMap) => {
                  return(
                    <MenuItem value={aDataMap} key={aDataMap}>{aDataMap}</MenuItem>
                  );
                })}

              </TextField>
            }
            <TextField  id="postTitle"
                    label="Post Title"
                    margin="normal"
                    fullWidth
                    value={postTitle}
                    onChange={addSetPostTitle}/>
            <TextField  id="postSubTitle"
                    label="Post Sub Title"
                    margin="normal"
                    fullWidth
                    onChange={addSetSubPostTitle}
                    value={postSubTitle}/>
            <TextField  id="postPoster"
                    label="Poster Image"
                    margin="normal"
                    fullWidth
                    onChange={addSetPostPoster}
                    value={postPoster}/>
            <Button variant="contained" onClick={() => {postTutorial(urlCategory, urlTitleStore, subUrlTitleStore, postTitle, postSubTitle, postPoster, contents);}}>
              Post
            </Button>
          </Box>
        </Box>

        <TextField  id="paragraphType"
                    select
                    label="Paragraph Type"
                    margin="normal"
                    fullWidth
                    value={paragraphTypes}
                    onChange={handleChange}>

          <MenuItem value="p">P</MenuItem>
          <MenuItem value="img">IMG</MenuItem>
          <MenuItem value="h1">H1</MenuItem>
          <MenuItem value="h2">H2</MenuItem>
          <MenuItem value="h3">H3</MenuItem>
          <MenuItem value="h4">H4</MenuItem>

        </TextField>

        <Box  component="form"
              noValidate
              autoComplete="off">

          <TextField  multiline
                    id="newParagraph"
                    label={paragraphTypes=="img" && "Src" || "New Paragraph"}
                    margin="normal"
                    fullWidth
                    onChange={addNewParagraph}
                    value={newParagraph}/>

          {
            paragraphTypes=="img"&&

            <Box>
              <TextField  multiline
                    id="Alt"
                    label="Alt"
                    margin="normal"
                    fullWidth
                    onChange={addNewParagraph1}/>
              <TextField  multiline
                    id="Caption"
                    label="Caption"
                    margin="normal"
                    fullWidth
                    onChange={addNewParagraph2}/>
            </Box>
          }

        </Box>

        <Stack direction="row" spacing={2}>
          <Button variant="outlined" onClick={addContents}>Add Paragraph</Button>
          <Button variant="contained" color="error" onClick={discardContent}>Discard</Button>
        </Stack>
      </Box>

      <FooterToku/>
    </Box>
  )
}
