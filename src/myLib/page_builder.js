import React from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, doc } from "firebase/firestore";
import Typography from '@mui/material/Typography';
import HeadingToku from '../component/heading';
import ImageToku from '../component/image';
import PostHeaderToku from '../component/post_header';
import Box from '@mui/material/Box';
import { tableOfContentsWidth, muiToolbarHeight, contentHorizontalPadding, contentVerticalPadding, borderRadius, db } from '../constant';
import Link from '@mui/material/Link';
import ScrollSpy from 'react-scrollspy-navigation';
import PageBuilderFunction from './pageBuilderFunction';
import LoadingPage from '../pages/Loading';
import NotFound from '../pages/NotFound';

function PageBuilder(props) {

    const [isLoading, setLoading] = React.useState(true);

    const [data, setData] = React.useState(null);
    const [title, setTitle] = React.useState(null);
    const [updateDate, setUpdateDate] = React.useState(null);
    const [poster, setPostere] = React.useState(null);
    React.useEffect(() => {
        const docRef = doc(db, "TutorialPost", props.pageUrl);
        const docSnap = getDoc(docRef).then((doc) => {
            if (doc.exists()) {
                setData(doc.data().content);
                setTitle(doc.data().title);
                setPostere(doc.data().poster);

                var t = new Date(Date.UTC(1970, 0, 1)); // Epoch
                t.setUTCSeconds(doc.data().date.seconds);
                setUpdateDate(t.toDateString());
            }

            setLoading(false);
        });
    }, []);

    //=======================

    var pageResult = null;
    var hasil = null;
    var scrollSpyContent = null;
    if(data!=null){
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
        if(title==null){
            return(
                <NotFound/>
            );
        }
    }

    return (
        <React.Fragment>
            <PostHeaderToku title={title} date={updateDate} imgAlt={title} imgUrl={poster} />
            <Box sx={{ display: "flex", marginTop: contentVerticalPadding }}>
                {/*Blog Post*/}
                <Box sx={{ flexGrow: 1 }}>
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