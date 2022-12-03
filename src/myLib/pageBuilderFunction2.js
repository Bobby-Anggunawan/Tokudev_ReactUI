import { Alert, Box, Link, Paper, Tab, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { tableCellClasses } from '@mui/material/TableCell';
import React from 'react'
import HeadingToku from "../component/heading";
import ImageToku from "../component/image";
import SyntaxHighlighter from "../component/syntax_highlighter";
import { PrismLoadLanguages } from "../component/syntax_highlighter";
import { urlBuilder, contentHorizontalPadding } from "../constant";
import Prism from 'prismjs';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import WarningIcon from '@mui/icons-material/Warning';
import { styled } from '@mui/material/styles';
import refBuilder from "./refBuilder";

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
    alertNote: new ParagraphType("alertNote", 1, ["isi"]),
    alertError: new ParagraphType("alertError", 1, ["isiTXT"]),
    listOrdered: new ParagraphType("listOrdered", -1, ["item1", "item2", "item3", "dst"]),
    listUnordered: new ParagraphType("listUnordered", -1, ["item1", "item2", "item3", "dst"]),
    table: new ParagraphType("table", -1, ["jumlahKolom", "jumlah baris", "caption", "element1", "element2", "element3", "dst"]),
    wikiHowStep: new ParagraphType("wikiHowStep", 4, ["step number", "step title", "step illustration", "step content"]),

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
            dangerouslySetInnerHTML={{ __html: isi }}
            sx={{
                ".inlineCode": {
                    backgroundColor: "primary.light",
                    borderRadius: "0.3em",
                    color: "primary.contrastText",
                    paddingX: "0.2em"
                }
            }}/>
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

function buildAlertNote(isi) {
    return (
        <Alert
            icon={<LightbulbIcon />}
            color="secondary">
            {isi}
        </Alert>
    );
}

function buildAlertError(isi) {
    return (
        <Alert
            icon={<WarningIcon />}
            color="error">
            {isi}
        </Alert>
    );
}

function buildListComponent(items, isOrdered) {
    if (isOrdered) {
        return (
            <ol>
                {items.map((itemsData, x) => {
                    return (
                        <Typography component="li" key={`${x}${items[x]}`}>{itemsData}</Typography>
                    );
                })}
            </ol>
        );
    }
    return (
        <ul>
            {items.map((itemsData, x) => {
                return (
                    <Typography component="li" key={`${x}${items[x]}`}>{itemsData}</Typography>
                );
            })}
        </ul>
    );
}

function buildTable(baris, kolom, caption, data) {

    //=====================================================
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));
    //=====================================================

    const tableHeads = [];
    const tableBodys = [];
    var contain = [];
    var counter = 0;
    for (var x = 0; x < kolom; x++) {
        for (var y = 0; y < baris; y++) {
            if (x == 0) {
                tableHeads.push(data[counter]);
            }
            else {
                contain.push(data[counter]);
                if (contain.length == baris) {
                    tableBodys.push(contain);
                    contain = [];
                }
            }
            counter++;
        }
    }
    console.log(tableHeads);
    console.log(tableBodys);


    return (
        <TableContainer component={Paper}>
            <Table>
                <caption>{caption}</caption>
                <TableHead>
                    <StyledTableRow>
                        {
                            tableHeads.map((data, x) => {
                                return (
                                    <StyledTableCell key={`th${x}${data}`}>{data}</StyledTableCell>
                                );
                            })
                        }
                    </StyledTableRow>
                </TableHead>
                <TableBody>
                    {
                        tableBodys.map((data, x) => {
                            return (
                                <StyledTableRow key={`tr${x}${data[0]}`}>
                                    {data.map((dataa, y) => {
                                        return (
                                            <StyledTableCell key={`tc${y}${dataa}`}>{dataa}</StyledTableCell>
                                        );
                                    })}
                                </StyledTableRow>
                            );
                        })
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

function buildWikiHowStep(number, title, illustration, content) {
    return (
        <Paper
            elevation={3}>
            <Box
                src={illustration}
                alt={title}
                component="img"
                width="100%" />
            <Typography paragraph paddingX={contentHorizontalPadding} paddingY={"1em"}>
                <Typography component="span" sx={{ fontSize: "2em", float: "left", marginRight: "0.5em", fontWeight: 900 }}>{number}</Typography>
                <strong>{title} </strong>
                {content}
            </Typography>
        </Paper>
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
        level: 1000
    };
    console.log(obj2);
    return obj2;
}

function buildIndividualSection(data, start = 0) {
    var ret = null;
    var nextStart = start;
    PrismLoadLanguages();
    var isi;
    var size;
    var containItem = [];
    switch (data[start]) {
        case paragraphType.h1.name:
            isi = data[start + 1];
            ret = <HeadingToku variant={1} title={isi} key={start} />;
            nextStart += paragraphType.h1.dataCount + 1;
            break;
        case paragraphType.h2.name:
            isi = data[start + 1];
            ret = <HeadingToku variant={2} title={isi} key={start} />;
            nextStart += paragraphType.h2.dataCount + 1;
            break;
        case paragraphType.h3.name:
            isi = data[start + 1];
            ret = <HeadingToku variant={3} title={isi} key={start} />;
            nextStart += paragraphType.h3.dataCount + 1;
            break;
        case paragraphType.h4.name:
            isi = data[start + 1];
            ret = <HeadingToku variant={4} title={isi} key={start} />;
            nextStart += paragraphType.h4.dataCount + 1;
            break;


        case paragraphType.p.name:
            isi = data[start + 1];
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
            size = data[start + 1];
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
        case paragraphType.alertNote.name:
            isi = data[start + 1];
            ret = buildAlertNote(isi);
            nextStart += paragraphType.alertNote.dataCount + 1;
            break;
        case paragraphType.alertError.name:
            isi = data[start + 1];
            ret = buildAlertError(isi);
            nextStart += paragraphType.alertError.dataCount + 1;
            break;
        case paragraphType.listOrdered.name:
            size = data[start + 1];
            for (var i = start + 2; i < start + 2 + size; i++) {
                containItem.push(data[i]);
            }
            ret = buildListComponent(containItem, true);
            nextStart += size + 2;
            break;
        case paragraphType.listUnordered.name:
            size = data[start + 1];
            for (var i = start + 2; i < start + 2 + size; i++) {
                containItem.push(data[i]);
            }
            ret = buildListComponent(containItem, false);
            nextStart += size + 2;
            break;
        case paragraphType.table.name:
            size = data[start + 1] * data[start + 2];
            for (var x = start + 4; x < start + size + 4; x++) {
                containItem.push(data[x]);
            }
            ret = buildTable(data[start + 1], data[start + 2], data[start + 3], containItem);
            nextStart += size + 1 + 3;
            break;
        case paragraphType.wikiHowStep.name:
            ret = buildWikiHowStep(data[start + 1], data[start + 2], data[start + 3], data[start + 4]);
            nextStart += paragraphType.wikiHowStep.dataCount + 1;
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
        console.log(counter);
        var aSection = [];
        aSection.push(<HeadingToku variant={nextHeading.level} title={data[counter + 1]} key={counter} />);
        const prefHeading = nextHeading.index;
        nextHeading = nextHeader(data, counter + 1);
        aSection = aSection.concat(buildSection(data, nextHeading.index, counter + 2));

        try{
            ret.push(<section key={counter} id={urlBuilder(data[prefHeading + 1])}>{aSection}</section>);
        }
        catch(e){
            console.log(`${nextHeading.index} - ${data.length} ERROR ${e}`);
            console.log(aSection);
            break;
        }

        counter = nextHeading.index;
    }

    return ret;
}

//untuk buat tombol hapus atau pindahkan paragraf di page builder
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
                        else if (paragraphType[tagCollection[y]].name == paragraphType.listOrdered.name ||
                            paragraphType[tagCollection[y]].name == paragraphType.listUnordered.name) {
                            lenRet = data[x + 1] + 1;
                        }
                        else if (paragraphType[tagCollection[y]].name == paragraphType.table.name) {
                            lenRet = data[x + 1] * data[x + 2] + 3;
                        }
                        else {
                            throw "lenRet belum dihitung. Kodenya belum diimplementasikan(mencari panjang data tag yangparagraphType.dataCount bernilai -1)";
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

    console.log(ret);

    return ret;
}

export default function PageBuilderFunction2(data) {

    //ubah semua tag referensi di data
    var refTitle = [];
    var refLink = [];
    const arrPT = Object.keys(paragraphType);
    const formatedData = data.map((aData, anX, anArr) => {
        if((anArr[anX-1] === "p") && ((arrPT.indexOf(anArr[anX+1]) != -1) || (anX+1 === data.length))){
            const hasilProsesTag = refBuilder(anArr[anX], refTitle, refLink);
            refTitle = hasilProsesTag.judul;
            refLink = hasilProsesTag.link;
            return hasilProsesTag.processedData;
        }
        return aData;
    });

    console.log(refTitle);

    const obj = {
        Hasil: buildWhole(formatedData),
        ScrollSpyContent: buildScrollSpy(formatedData),
        citasi: {
            title: refTitle,
            link: refLink
        }
    };
    return obj;
}

function Test() {
    const content = "Ikan adalah anggota vertebrata poikilotermik (berdarah dingin)[1] yang hidup di air dan bernapas dengan insang. Ikan merupakan kelompok vertebrata yang paling beraneka ragam dengan jumlah spesies lebih dari 27,000 di seluruh dunia. Secara taksonomi, ikan tergolong kelompok paraphyletic yang hubungan kekerabatannya masih diperdebatkan; biasanya ikan dibagi menjadi ikan tanpa rahang (kelas Agnatha, 75 spesies termasuk lamprey dan ikan hag), ikan bertulang rawan (kelas Chondrichthyes, 800 spesies termasuk hiu dan pari), dan sisanya tergolong ikan bertulang keras (kelas Osteichthyes). Ikan dalam berbagai bahasa daerah disebut iwak (jv, bjn), jukut (vkt).";
    return buildWikiHowStep(2, "Judul step", "https://upload.wikimedia.org/wikipedia/commons/7/73/Guppy-male.jpg", content);
}

export { getTagRef, Test };