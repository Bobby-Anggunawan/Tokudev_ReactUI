import { Box, Link, Typography } from "@mui/material";
import React from 'react'
import HeadingToku from "../component/heading";
import ImageToku from "../component/image";
import SyntaxHighlighter from "../component/syntax_highlighter";
import {urlBuilder} from "../constant";

class ParagraphType {
    constructor(name, dataCount, propMap) {
        this.name = name; //jenis Paragraph
        this.dataCount = dataCount; //jumlah element(tidak termasuk tagnya) diperlukan untuk ditampung di array(kalau -1 artinya jumlah element ada di index selanjutnya di array)
        this.propMap = propMap; //array berisi nama nama properti apa yang ditampung di tiap index di array
    }
}

const paragraphType = {
    p: new ParagraphType("p", 1, ["isi"]),
    img: new ParagraphType("img", 3, ["caption", "alt", "src"]),
    code: new ParagraphType("code", -1, ["size", "selanjutnya=>", "bahasa", "code", "bahasa", "code", "dst"]),

    h1: new ParagraphType("h1", 1, ["judul"]),
    h2: new ParagraphType("h2", 1, ["judul"]),
    h3: new ParagraphType("h3", 1, ["judul"]),
    h4: new ParagraphType("h4", 1, ["judul"])
}

function buildP(isi, keyCounter) {
    return (
        <Typography
            paragraph
            align="justify"
            key={keyCounter}
            dangerouslySetInnerHTML={{ __html: isi }} />
    );
}

function buildIMG(caption, alt, src, keyCounter) {
    return (
        <ImageToku
            key={keyCounter}
            image={src}
            caption={caption}
            altTxt={alt} />
    );
}

function buildCODE(lang, code, keyCounter) {
    return (
        <SyntaxHighlighter
            key={keyCounter}
            langList={lang}
            code={code} />
    );
}

function nextHeader(data, start = 0) {
    for (var x = start; x < data.length; x++) {
        if (data[x] == "h2" || data[x] == "h3" || data[x] == "h4") {
            var obj = {
                index: x,
                level: 1
            };
            if (data[x] == "h2") obj.level = 2;
            else if (data[x] == "h3") obj.level = 3;
            else if (data[x] == "h4") obj.level = 4;

            return obj;
        }
    }
    var obj2 = {
        index: data.length,
        level: 100
    };
    return obj2;
}

function buildSection(data, stop, start = 0) {
    var ret = [];
    var counter = start;
    while (counter < data.length && counter < stop) {
        switch (data[counter]) {
            case "p":
                const isi = data[counter + 1];
                ret.push(buildP(isi, counter));
                counter += 2;
                break;
            case "img":
                const caption = data[counter + 1];
                const alt = data[counter + 2];
                const src = data[counter + 3];
                ret.push(buildIMG(caption, alt, src, counter));
                counter += 4;
                break;
            case "code":
                const size = data[counter + 1];
                var cnt = 1;
                const lang = [];
                const code = [];
                for (var xSize = 0; xSize < size; xSize++) {
                    lang.push(data[counter + cnt + 1]);
                    code.push(data[counter + (cnt + 1) + 1]);
                    cnt += 2;
                }
                ret.push(buildCODE(lang, code, counter))
                counter += size * 2 + 2;
                break;
            default:
                throw `Tag "${data[counter]}" tidak dikenali`;
        }
    }
    return ret;
}

function buildScrollSpy(data) {
    var ret = [];

    data.forEach((item, index) => {
        if (item == "h2" || item == "h3" || item == "h4") {
            ret.push(
                <Link href={`#${urlBuilder(data[index+1])}`} ref={React.createRef()} key={`scrollSpyContent1${index}`}>
                    {data[index+1]}
                </Link>
            )
        }
    })

    return ret;
}

function buildWhole(data) {
    var ret = [];
    var counter = 0;
    var nextHeading = nextHeader(data);
    if (nextHeading.index != 0) {
        ret = ret.concat(buildSection(data, nextHeading.index));
        counter = nextHeading.index;
    }

    while (counter < data.length) {
        var aSection = [];
        aSection.push(<HeadingToku variant={nextHeading.level} title={data[counter + 1]} key={counter} />);
        const prefHeading = nextHeading.index;
        nextHeading = nextHeader(data, counter + 1);
        aSection = aSection.concat(buildSection(data, nextHeading.index, counter + 2));
        ret.push(<section key={counter} id={urlBuilder(data[prefHeading+1])}>{aSection}</section>);

        counter = nextHeading.index;
    }

    return ret;
}


export default function PageBuilderFunction2(data) {
    const obj = {
        Hasil: buildWhole(data),
        ScrollSpyContent: buildScrollSpy(data)
    };
    return obj;
}