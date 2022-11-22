import React from 'react'
import { Box, Button, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, ImageList, ImageListItem, Pagination, PaginationItem, Stack, Toolbar, Typography } from '@mui/material';
import AppBarToku from '../../component/general/app_bar';
import FooterToku from '../../component/general/footer';
import { getFirestore, collection, getDoc, doc } from "firebase/firestore";
import { db, contentVerticalPadding, ConvertDateToString, urlBuilder } from '../../constant'
import LoadingPage from '../Loading';
import { Link, useLocation } from 'react-router-dom';


export default function Article() {


    const thisURL = useLocation();
    const initHash = thisURL.hash;
    var initPage = 1;
    if (initHash != "") {
        initPage = parseInt(initHash.replace("#page_", ""));
    }
    const [page, setPage] = React.useState(initPage);

    const [pageCount, setPageCount] = React.useState(1);

    React.useEffect(() => {
        const docRef = doc(db, "ArticlePaging", "master");
        const docSnap = getDoc(docRef).then((doc) => {
            var maxPage = doc.data().pagesCount;
            setPageCount(maxPage);
            setPagingPage(page, maxPage);
        });
    }, []);

    const [date, setDate] = React.useState([]);
    const [poster, setPoster] = React.useState([]);
    const [preview, setPriview] = React.useState([]);
    const [title, setTitle] = React.useState([]);


    const setPagingPage = (_value, maxPage) => {
        console.log(maxPage-_value+1);
        var docRef2 = doc(db, "ArticlePaging", `page${maxPage-_value+1}`);
        var docSnap2 = getDoc(docRef2).then((doc) => {
            setDate(doc.data().date);
            setPoster(doc.data().poster);
            setPriview(doc.data().preview);
            setTitle(doc.data().title);
        });
    }

    const handleChange = (event, value) => {
        setPage(value);
        setTitle([]);
        setPagingPage(value, pageCount);
    };

    return (
        <Box sx={{ margin: 0, padding: 0 }}>
            <AppBarToku />
            <Toolbar />
            <ImageList variant="masonry" cols={3} gap={8} sx={{ width: "50%", marginX: "auto" }}>
                {title != 0 &&

                    title.map((data, x) => {
                        return (
                            <ImageListItem key={x}>
                                <Card>
                                    <CardHeader
                                        title={data}
                                        subheader={ConvertDateToString(date[x])} />
                                    <CardMedia
                                        component="img"
                                        image={poster[x]}
                                        alt={data} />
                                    <CardContent variant="body2" color="text.secondary">
                                        <Typography>{preview[x]}</Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button href={`/article/${urlBuilder(data)}`}>Read More</Button>
                                    </CardActions>
                                </Card>
                            </ImageListItem>
                        );
                    })

                    || <LoadingPage />
                }
            </ImageList>

            <Box sx={{ width: "50%", marginX: "auto", marginY: contentVerticalPadding }}>
                <Pagination
                    page={page}
                    onChange={handleChange}
                    count={pageCount}
                    color="primary"
                    renderItem={(item) => (
                        <PaginationItem
                            component={Link}
                            to={`#page_${item.page}`}
                            {...item}
                        />
                    )}
                />
            </Box>
            <FooterToku />
        </Box>
    )
}
