import {getTagList, getTagProps, urlBuilder} from "../constant";

//param
//data: html string yang ingin diperiksa
//format tag citasi adalah seperti ini:
//<sup data-ref-title="<xTITLE>" data-link="<xLINK>" class="citation">[xCitNum]</sup>
export default function refBuilder(data){
    const listSup = getTagList(data, "sup");

    const listJudul = [];
    const listLink = [];
    const listTagCitasiJudulIndex = []; //ini keknya gak kepake lagi
    const listTagCitasi = listSup.map((sup) => {
        if(getTagProps(sup, "class") == "citation"){
            const tempJudul = getTagProps(sup, "data-ref-title");
            var indexJudul = listJudul.indexOf(tempJudul);
            if(indexJudul == -1){
                listJudul.push(tempJudul);
                listLink.push(getTagProps(sup, "data-link"));
                listTagCitasiJudulIndex.push(listJudul.length-1);
                indexJudul = listJudul.length-1;
            }
            else{
                listTagCitasiJudulIndex.push(indexJudul);
            }
            console.log(sup);
            return sup.replace("[xCitNum]", `<a href="#${urlBuilder(tempJudul)}">[${indexJudul+1}]</a>`);
        }
    });

    return {
        judul: listJudul,
        link: listLink,
        tag: listTagCitasi
    };

}