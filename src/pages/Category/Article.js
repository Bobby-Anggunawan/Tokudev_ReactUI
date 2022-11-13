import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, ImageList, ImageListItem, Toolbar, Typography } from '@mui/material';
import AppBarToku from '../../component/general/app_bar';
import FooterToku from '../../component/general/footer';

export default function Article() {
  return (
    <Box sx={{margin: 0, padding:0}}>
        <AppBarToku/>
        <Toolbar/>
        <ImageList variant="masonry" cols={3} gap={8} sx={{width: "50%", marginX: "auto"}}>
            <ImageListItem>
                <Card>
                    <CardHeader
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"/>
                    <CardMedia
                        component="img"
                        image="https://images.unsplash.com/photo-1563298723-dcfebaa392e3?w=248&fit=crop&auto=format"
                        alt="sebuah gambar"/>
                    <CardContent variant="body2" color="text.secondary">
                        <Typography>This impressive paella is a perfect party dish and a fun meal to cooktogether with your guests. Add 1 cup of frozen peas along with the mussels,if you like.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button href="/article/komputer_bagus">Read More</Button>
                    </CardActions>
                </Card>
            </ImageListItem>
            <ImageListItem>
                <Card>
                    <CardHeader
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"/>
                    <CardMedia
                        component="img"
                        image="https://images.unsplash.com/photo-1530731141654-5993c3016c77?w=248&fit=crop&auto=format"
                        alt="sebuah gambar"/>
                    <CardContent variant="body2" color="text.secondary">
                        <Typography>This impressive paella is a perfect party dish and a fun meal to cooktogether with your guests. Add 1 cup of frozen peas along with the mussels,if you like.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button  href="/article/komputer_bagus">Read More</Button>
                    </CardActions>
                </Card>
            </ImageListItem>
            <ImageListItem>
                <Card>
                    <CardHeader
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"/>
                    <CardMedia
                        component="img"
                        image="https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee?w=248&fit=crop&auto=format"
                        alt="sebuah gambar"/>
                    <CardContent variant="body2" color="text.secondary">
                        <Typography>This impressive paella is a perfect party dish and a fun meal to cooktogether with your guests. Add 1 cup of frozen peas along with the mussels,if you like.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button href="/article/komputer_bagus">Read More</Button>
                    </CardActions>
                </Card>
            </ImageListItem>
            <ImageListItem>
                <Card>
                    <CardHeader
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"/>
                    <CardMedia
                        component="img"
                        image="https://images.unsplash.com/photo-1549388604-817d15aa0110?w=248&fit=crop&auto=format"
                        alt="sebuah gambar"/>
                    <CardContent variant="body2" color="text.secondary">
                        <Typography>This impressive paella is a perfect party dish and a fun meal to cooktogether with your guests. Add 1 cup of frozen peas along with the mussels,if you like.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button href="/article/komputer_bagus">Read More</Button>
                    </CardActions>
                </Card>
            </ImageListItem>
            <ImageListItem>
                <Card>
                    <CardHeader
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"/>
                    <CardMedia
                        component="img"
                        image="https://images.unsplash.com/photo-1588436706487-9d55d73a39e3?w=248&fit=crop&auto=format"
                        alt="sebuah gambar"/>
                    <CardContent variant="body2" color="text.secondary">
                        <Typography>This impressive paella is a perfect party dish and a fun meal to cooktogether with your guests. Add 1 cup of frozen peas along with the mussels,if you like.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button href="/article/komputer_bagus">Read More</Button>
                    </CardActions>
                </Card>
            </ImageListItem>
        </ImageList>
        <FooterToku/>
    </Box>
  )
}
