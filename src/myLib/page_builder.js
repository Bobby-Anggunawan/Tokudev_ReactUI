import React from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, doc } from "firebase/firestore";
import Typography from '@mui/material/Typography';
import HeadingToku from '../component/heading';
import ImageToku from '../component/image';
import PostHeaderToku from '../component/post_header';
import Box from '@mui/material/Box';
import { tableOfContentsWidth, muiToolbarHeight, contentHorizontalPadding, contentVerticalPadding, borderRadius, db, ConvertDateToString } from '../constant';
import Link from '@mui/material/Link';
import ScrollSpy from 'react-scrollspy-navigation';
import PageBuilderFunction from './pageBuilderFunction';
import LoadingPage from '../pages/Loading';
import NotFound from '../pages/NotFound';
import { Alert } from '@mui/material';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';

function PageBuilder(props) {

    var collectionToFetch = "TutorialPost";
    if (props.isArticle) {
        collectionToFetch = "ArticlePost";
    }

    const [isLoading, setLoading] = React.useState(true);

    const [data, setData] = React.useState(null);
    const [title, setTitle] = React.useState(null);
    const [updateDate, setUpdateDate] = React.useState(null);
    const [poster, setPostere] = React.useState(null);
    const [subtitle, setSubtitle] = React.useState(null);
    React.useEffect(() => {
        var docRef = null;
        if (props.isTutorial) {
            docRef = doc(db, collectionToFetch, props.pageUrl);
        }
        else {
            docRef = doc(db, collectionToFetch, props.pageUrl);
        }

        const docSnap = getDoc(docRef).then((doc) => {
            if (doc.exists()) {
                setData(doc.data().content);
                setTitle(doc.data().title);
                setSubtitle(doc.data().subTitle);
                setPostere(doc.data().poster);

                setUpdateDate(ConvertDateToString(doc.data().date));
            }

            setLoading(false);
        });
    }, []);

    //=======================

    var pageResult = null;
    var hasil = null;
    var scrollSpyContent = null;
    if (data != null) {
        pageResult = PageBuilderFunction(data);
        hasil = pageResult.Hasil;
        scrollSpyContent = pageResult.ScrollSpyContent;
    }

    if (isLoading) {
        return (
            <LoadingPage />
        );
    }
    else {
        if (title == null) {
            props.getNotFound(true);

            //aslinya gak penting, tapi kalau dihapus jadi error
            return (
                <LoadingPage />
            );
        }
        else {
            props.getNotFound(false);
        }
    }

    return (
        <React.Fragment>
            <PostHeaderToku title={title} date={updateDate} imgAlt={title} imgUrl={poster} />
            <Box sx={{ display: "flex", marginTop: contentVerticalPadding }}>
                {/*Blog Post*/}
                <Box sx={{ flexGrow: 1 }}>
                    <Alert icon={<TheaterComedyIcon/>} severity="info" sx={{marginBottom: contentVerticalPadding}}>
                        {subtitle}
                    </Alert>
                    {hasil}
                </Box>


                {/*Table of contents*/}
                <Box sx={{
                    width: tableOfContentsWidth,
                    flexShrink: 0,
                    '& .active': {
                        color: "error.main"
                    },
                    '& a': {
                        display: "block",
                        borderRadius: borderRadius,
                        px: 1.5,
                        textDecoration: "none"
                    },
                    '& a:hover': {
                        backgroundColor: 'primary.main',
                        color: "primary.contrastText"
                    }
                }}>
                    <section style={{ position: "sticky", top: `${parseInt(muiToolbarHeight) + parseInt(contentVerticalPadding)}px`, textAlign: "center", paddingLeft: contentHorizontalPadding }}>
                        <Typography component="h2" variant="h5">Table of contents</Typography>
                        <ScrollSpy>
                            {scrollSpyContent}
                        </ScrollSpy>
                    </section>
                </Box>
            </Box>
        </React.Fragment>
    );
}

export default PageBuilder;