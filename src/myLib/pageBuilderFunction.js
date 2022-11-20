import React from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDoc, doc } from "firebase/firestore";
import Typography from '@mui/material/Typography';
import HeadingToku from '../component/heading';
import ImageToku from '../component/image';
import PostHeaderToku from '../component/post_header';
import Box from '@mui/material/Box';
import { tableOfContentsWidth, muiToolbarHeight, contentHorizontalPadding, contentVerticalPadding, borderRadius} from '../constant';
import Link from '@mui/material/Link';
import ScrollSpy from 'react-scrollspy-navigation';


export default function PageBuilderFunction(data){
    var prev_arg = [];
    var hasil = [];
    var scrollSpyContent = [];
    var counter  = 0;
    while(counter<data.length){
        if(prev_arg.length == 0){
            prev_arg.push(data[counter]);
        }
        else{
            if(prev_arg[0] == "p"){
                prev_arg = [];
                hasil.push(
                    <Typography paragraph align="justify" key={counter} dangerouslySetInnerHTML={{__html: data[counter]}}>
                    </Typography>
                );
            }
            else if(prev_arg[0] == "img"){
                if(prev_arg.length>1){
                    hasil.push(
                        <ImageToku key={counter} image={data[counter]} caption={prev_arg[1]} altTxt={data[counter-1]}/>
                    );
                    prev_arg = [];
                }
                else{
                    prev_arg.push(data[counter]);
                    counter+=1;
                }
            }
            else if(prev_arg[0] == "h1" || prev_arg[0] == "h2" || prev_arg[0] == "h3" || prev_arg[0] == "h4"){
                var hasil2 = [];
                var headingName = "";

                if(prev_arg[0] == "h1"){
                    prev_arg = [];
                    hasil2.push(
                        <HeadingToku variant={1} title={data[counter]} key={counter}/>
                    );
                    headingName = data[counter];
                    scrollSpyContent.push(
                        <Link href={`#${data[counter]}`} ref={React.createRef()} key={`scrollSpyContent1${counter}`}>{data[counter]}</Link>
                    )
                }
                else if(prev_arg[0] == "h2"){
                    prev_arg = [];
                    hasil2.push(
                        <HeadingToku variant={2} title={data[counter]} key={counter}/>
                    );
                    headingName = data[counter];
                    scrollSpyContent.push(
                        <Link href={`#${data[counter]}`} ref={React.createRef()} key={`scrollSpyContent2${counter}`}>{data[counter]}</Link>
                    )
                }
                else if(prev_arg[0] == "h3"){
                    prev_arg = [];
                    hasil2.push(
                        <HeadingToku variant={3} title={data[counter]} key={counter}/>
                    );
                    headingName = data[counter];
                    scrollSpyContent.push(
                        <Link href={`#${data[counter]}`} ref={React.createRef()} key={`scrollSpyContent3${counter}`}>{data[counter]}</Link>
                    )
                }
                else if(prev_arg[0] == "h4"){
                    prev_arg = [];
                    hasil2.push(
                        <HeadingToku variant={4} title={data[counter]} key={counter}/>
                    );
                    headingName = data[counter];
                    scrollSpyContent.push(
                        <Link href={`#${data[counter]}`} ref={React.createRef()} key={`scrollSpyContent4${counter}`}>{data[counter]}</Link>
                    )
                }
                counter+=1;
                while(true){
                    if(counter>data.length) break;
                    if(prev_arg.length == 0){
                        prev_arg.push(data[counter]);
                        if(data[counter] == "h1" || data[counter] == "h2" || data[counter] == "h3" || data[counter] == "h4") break;
                    }
                    else{
                        if(prev_arg[0] == "p"){
                            prev_arg = [];
                            hasil2.push(
                                <Typography paragraph align="justify" key={counter}  dangerouslySetInnerHTML={{__html: data[counter]}}>
                                </Typography>
                            );
                        }
                        else if(prev_arg[0] == "img"){
                            if(prev_arg.length>1){
                                console.log(counter);
                                hasil2.push(
                                    <ImageToku key={counter} image={data[counter]} caption={prev_arg[1]} altTxt={data[counter-1]}/>
                                );
                                prev_arg = [];
                            }
                            else{
                                prev_arg.push(data[counter]);
                                counter+=1;
                            }
                        }
                    }
                    counter+=1;
                }
                hasil.push(
                    <section key={counter} id={headingName}>{hasil2}</section>
                );
            }
        }
        counter+=1
    }

    var obj = {
        Hasil:  hasil,
        ScrollSpyContent: scrollSpyContent
      };
    return obj;
}