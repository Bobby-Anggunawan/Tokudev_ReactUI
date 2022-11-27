import { Box, Card, CardActionArea, CardContent, CardHeader, CardMedia, ImageList, ImageListItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import AppBarToku from '../../component/general/app_bar'
import FooterToku from '../../component/general/footer'
import { getDoc, doc } from "firebase/firestore";
import { db, urlBuilder } from '../../constant';
import { useLocation } from "react-router-dom";
import BlogPost from '../../templates/blog_post';
import LoadingPage from '../Loading';

export default function Tutorial_Content() {

    const location = useLocation();
    const tutorialName = location.pathname.split("/")[2];

    //data di /tutorial/cs
    const [poster, setPoster] = React.useState([]);
    const [subTitle, setSubTitle] = React.useState([]);
    const [title, setTitle] = React.useState([]);
    //=============================================
    //data real TutorialContentView untuk /tutorial/cs/nama
    const [sideBarObj, setSideBarObj] = React.useState(null);
    //=============================================
    React.useEffect(() => {
        const docRef = doc(db, "TutorialContentView", tutorialName);
        const docSnap = getDoc(docRef).then((doc) => {

            const _headerName = doc.data().headerName;
            setSideBarObj({
                headerName: _headerName,
                headerChild: _headerName.map((item, x) => {
                    return doc.data()[`headerChild${x + 1}`];
                })
            });

            const headerNameCount = _headerName.length;

            var tempPoster = [];
            var tempSubTitle = [];
            var tempTitle = [];
            for (var x = 0; x < headerNameCount; x++) {
                tempPoster = tempPoster.concat(doc.data()[`childPoster${x + 1}`]);
                tempSubTitle = tempSubTitle.concat(doc.data()[`childSubTitle${x + 1}`]);
                tempTitle = tempTitle.concat(doc.data()[`headerChild${x + 1}`]);
            }

            setPoster(tempPoster);
            setSubTitle(tempSubTitle);
            setTitle(tempTitle);
        });
    }, []);

    if (sideBarObj == null) {
        return (<LoadingPage />);
    }

    else if (location.pathname.split("/").length > 3 && location.pathname.split("/")[3] != "") {
        return (
            <BlogPost sideBarJson={JSON.stringify(sideBarObj)} />
        );
    }

    return (
        <ImageList variant="masonry" cols={3} gap={8} sx={{ width: "50%", marginX: "auto", minHeight: "100vh"}}>
            {
                title.map((data, x) => {
                    return (
                        <ImageListItem key={x}>
                            <Card>
                                <CardActionArea href={`/tutorial/${tutorialName}/${urlBuilder(data)}`}>
                                    <CardHeader title={data} />
                                    <CardMedia component="img"
                                        image={poster[x]}
                                        alt={data} />
                                    <CardContent>
                                        <Typography variant="body2" color="text.secondary">
                                            {subTitle[x]}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </ImageListItem>
                    );
                })
            }
        </ImageList>
    )
}
