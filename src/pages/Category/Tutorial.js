import { Box, Card, CardActionArea, CardContent, CardMedia, ImageList, ImageListItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AppBarToku from '../../component/general/app_bar'
import FooterToku from '../../component/general/footer'

export default function Tutorial() {
  return (
    <Box>
        <AppBarToku/>
        <Toolbar/>

        <ImageList  variant="masonry" cols={3} gap={8} sx={{width: "50%", marginX: "auto"}}>
            <ImageListItem>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea href="/">
                        <CardMedia  component="img"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAEssp5xBCP420VJTAkFru3VTpDnHVnXzjg&usqp=CAU"
                                    alt="astronot"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                C#
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Buat game, web, kecerdasan buatan? C#
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </ImageListItem>


            <ImageListItem>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea href="/">
                        <CardMedia  component="img"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAEssp5xBCP420VJTAkFru3VTpDnHVnXzjg&usqp=CAU"
                                    alt="astronot"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                C#
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Buat game, web, kecerdasan buatan? C#
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </ImageListItem>

            <ImageListItem>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea href="/">
                        <CardMedia  component="img"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAEssp5xBCP420VJTAkFru3VTpDnHVnXzjg&usqp=CAU"
                                    alt="astronot"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                C#
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Buat game, web, kecerdasan buatan? C#
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </ImageListItem>

            <ImageListItem>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea href="/">
                        <CardMedia  component="img"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAEssp5xBCP420VJTAkFru3VTpDnHVnXzjg&usqp=CAU"
                                    alt="astronot"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                C#
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Buat game, web, kecerdasan buatan? C#
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </ImageListItem>

            <ImageListItem>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea href="/">
                        <CardMedia  component="img"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAEssp5xBCP420VJTAkFru3VTpDnHVnXzjg&usqp=CAU"
                                    alt="astronot"/>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                C#
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Buat game, web, kecerdasan buatan? C#
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </ImageListItem>
        </ImageList>

        <FooterToku/>
    </Box>
  )
}