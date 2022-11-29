import { Box, Link, Typography } from "@mui/material";
import React from 'react'
import HeadingToku from "../component/heading";
import ImageToku from "../component/image";
import SyntaxHighlighter from "../component/syntax_highlighter";
import { PrismLoadLanguages } from "../component/syntax_highlighter";
import { urlBuilder } from "../constant";
import Prism from 'prismjs';

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
        if (data[x] == paragraphType.h2.name || data[x] == paragraphType.h3.name || data[x] == paragraphType.h4.name) {
            var obj = {
                index: x,
                level: 1
            };
            if (data[x] == paragraphType.h2.name) obj.level = 2;
            else if (data[x] == paragraphType.h3.name) obj.level = 3;
            else if (data[x] == paragraphType.h4.name) obj.level = 4;

            return obj;
        }
    }
    var obj2 = {
        index: data.length,
        level: 100
    };
    return obj2;
}

function buildIndividualSection(data, start = 0) {
    var ret = null;
    var nextStart = start;
    PrismLoadLanguages();
    switch (data[start]) {
        case paragraphType.h1.name:
            const judul1 = data[start + 1];
            ret = <HeadingToku variant={1} title={judul1} key={start} />;
            nextStart += paragraphType.h1.dataCount + 1;
            break;
        case paragraphType.h2.name:
            const judul2 = data[start + 1];
            ret = <HeadingToku variant={2} title={judul1} key={start} />;
            nextStart += paragraphType.h2.dataCount + 1;
            break;
        case paragraphType.h3.name:
            const judul3 = data[start + 1];
            ret = <HeadingToku variant={3} title={judul1} key={start} />;
            nextStart += paragraphType.h3.dataCount + 1;
            break;
        case paragraphType.h4.name:
            const judul4 = data[start + 1];
            ret = <HeadingToku variant={4} title={judul1} key={start} />;
            nextStart += paragraphType.h4.dataCount + 1;
            break;


        case paragraphType.p.name:
            const isi = data[start + 1];
            ret = buildP(isi, start);
            nextStart += paragraphType.p.dataCount + 1;
            break;
        case paragraphType.img.name:
            const caption = data[start + 1];
            const alt = data[start + 2];
            const src = data[start + 3];
            ret = buildIMG(caption, alt, src, start);
            nextStart += paragraphType.img.dataCount + 1;
            break;
        case paragraphType.code.name:
            const size = data[start + 1];
            var cnt = 1;
            const lang = [];
            const code = [];
            for (var xSize = 0; xSize < size; xSize++) {
                const bahasa = data[start + cnt + 1];
                lang.push(bahasa);
                const html = Prism.highlight(data[start + (cnt + 1) + 1], Prism.languages[bahasa], bahasa);
                code.push(html)
                cnt += 2;
            }
            ret = buildCODE(lang, code, start)
            nextStart += size * 2 + 2;
            break;
        default:
            throw `Tag "${data[start]}" tidak dikenali`;
    }
    return {
        hasil: ret,
        addCounter: nextStart
    }
}

function buildSection(data, stop, start = 0) {
    PrismLoadLanguages();
    var ret = [];
    var counter = start;
    while (counter < data.length && counter < stop) {
        const temp = buildIndividualSection(data, counter);
        ret.push(temp.hasil);
        counter = temp.addCounter;
    }
    return ret;
}

function buildScrollSpy(data) {
    var ret = [];

    data.forEach((item, index) => {
        if (item == "h2" || item == "h3" || item == "h4") {
            ret.push(
                <Link href={`#${urlBuilder(data[index + 1])}`} ref={React.createRef()} key={`scrollSpyContent1${index}`}>
                    {data[index + 1]}
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
        ret.push(<section key={counter} id={urlBuilder(data[prefHeading + 1])}>{aSection}</section>);

        counter = nextHeading.index;
    }

    return ret;
}

function getTagRef(data) {
    var ret = [];
    const tagCollection = Object.keys(paragraphType);
    var maxTagLen = 0;
    tagCollection.map((data) => {
        if (maxTagLen < data.length) maxTagLen = data.length;
    });
    for (var x = 0; x < data.length; x++) {
        if (data[x].length <= maxTagLen) {
            for (var y = 0; y < tagCollection.length; y++) {
                if (paragraphType[tagCollection[y]].name == data[x]) {
                    var lenRet = 0;
                    if (paragraphType[tagCollection[y]].dataCount == -1) {
                        if (paragraphType[tagCollection[y]].name == paragraphType.code.name) {
                            lenRet = (data[x + 1] * 2) + 1;
                        }
                        else {
                            throw "error gak tahu kenapa....";
                        }
                    }
                    else {
                        lenRet = paragraphType[tagCollection[y]].dataCount;
                    }
                    ret.push({
                        tag: paragraphType[tagCollection[y]].name,
                        index: x,
                        length: lenRet,
                        element: buildIndividualSection(data, x).hasil
                    });
                }
            }
        }
    }

    return ret;
}

export default function PageBuilderFunction2(data) {
    const obj = {
        Hasil: buildWhole(data),
        ScrollSpyContent: buildScrollSpy(data),
    };
    return obj;
}

export {getTagRef};