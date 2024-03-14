const setup = () => {
    geefGemeentes();

}
const geefGemeentes =() =>{
    let stoppen =true;
    let eenLijst =[];

    while(stoppen){
        let invoer = window.prompt('Gemeente: ','stop');
        if (invoer.toLowerCase().localeCompare("stop")===0){
            stoppen=false;
        }else{
            eenLijst.push(invoer);
        }
    }
    eenLijst.sort();
    let lijst =document.getElementById("gemeente");
    for (let i=0;i<eenLijst.length;i++){
        lijst.innerHTML += "<option value="+ eenLijst[i]+ ">"+eenLijst[i]+"</option>";
    }


}
window.addEventListener("load", setup);
