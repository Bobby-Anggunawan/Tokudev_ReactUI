import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, ImageList, ImageListItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AppBarToku from '../../component/general/app_bar'
import FooterToku from '../../component/general/footer'

export default function Tutorial_Content() {
  return (
    <Box>
        <AppBarToku/>
        <Toolbar/>


        <ImageList variant="masonry" cols={3} gap={8} sx={{width: "50%", marginX: "auto"}}>
            <ImageListItem>
                <Card>
                    <CardActionArea href="/tutorial/cs/loop">
                        <CardHeader title="Loop"/>
                        <CardMedia  component="img"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAEssp5xBCP420VJTAkFru3VTpDnHVnXzjg&usqp=CAU"
                                    alt="Paella dish"/>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                It start over and over again
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </ImageListItem>
            <ImageListItem>
                <Card>
                    <CardActionArea href="/tutorial/cs/loop">
                        <CardHeader title="Loop"/>
                        <CardMedia  component="img"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAEssp5xBCP420VJTAkFru3VTpDnHVnXzjg&usqp=CAU"
                                    alt="Paella dish"/>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                It start over and over again
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </ImageListItem>
            <ImageListItem>
                <Card>
                    <CardActionArea href="/tutorial/cs/loop">
                        <CardHeader title="Loop"/>
                        <CardMedia  component="img"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAEssp5xBCP420VJTAkFru3VTpDnHVnXzjg&usqp=CAU"
                                    alt="Paella dish"/>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                It start over and over again
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </ImageListItem>
            <ImageListItem>
                <Card>
                    <CardActionArea href="/tutorial/cs/loop">
                        <CardHeader title="Loop"/>
                        <CardMedia  component="img"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAEssp5xBCP420VJTAkFru3VTpDnHVnXzjg&usqp=CAU"
                                    alt="Paella dish"/>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                It start over and over again
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </ImageListItem>
            <ImageListItem>
                <Card>
                    <CardActionArea href="/tutorial/cs/loop">
                        <CardHeader title="Loop"/>
                        <CardMedia  component="img"
                                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoAEssp5xBCP420VJTAkFru3VTpDnHVnXzjg&usqp=CAU"
                                    alt="Paella dish"/>
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                                It start over and over again
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
