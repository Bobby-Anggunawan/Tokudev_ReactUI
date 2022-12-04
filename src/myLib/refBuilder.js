import { getTagList, getTagProps, urlBuilder } from "../constant";

//param
//data: html string yang ingin diperiksa
//format tag citasi adalah seperti ini:
//<sup data-ref-title="xTITLE" data-link="xLINK" class="citation">[xCitNum]</sup>
export default function refBuilder(data, judul = [], link = []) {
    const listSup = getTagList(data, "sup");

    const listJudul = judul;
    const listLink = link;

    listSup.forEach((sup) => {    //listTagCitasi sekarang gak guna keknya
        if (getTagProps(sup, "class") == "citation") {
            const tempJudul = getTagProps(sup, "data-ref-title");
            var indexJudul = listJudul.indexOf(tempJudul);
            if (indexJudul == -1) {
                listJudul.push(tempJudul);
                listLink.push(getTagProps(sup, "data-link"));
            }

        }
    });

    var _processedData = data;
    listSup.forEach((a) => {
        const tempJudul = getTagProps(a, "data-ref-title");
        const refIndex = listJudul.indexOf(tempJudul) + 1;
        const newTag = a.replace("[xCitNum]", `<a href="#${`reference_${refIndex}_${urlBuilder(tempJudul)}`}">[${refIndex}]</a>`);
        _processedData = _processedData.replace(a, newTag);
    });

    return {
        judul: listJudul,
        link: listLink,
        tag: listSup,
        processedData: _processedData
    };

}