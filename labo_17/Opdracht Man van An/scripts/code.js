const setup = () => {
    let buttonIndexOf =document.getElementById("buttonIndexOf");
    let buttonLastIndexOf =document.getElementById("buttonLastIndexOf");
    buttonIndexOf.addEventListener("click",zoekWoordAnMetIndexOf);
    buttonLastIndexOf.addEventListener("click",zoekWoordAnMetLastIndexOf);
}
const zoekWoordAnMetIndexOf =() =>{
    let tekst = document.getElementById("tekst").value.toLowerCase();
    let stoppen = false;
    let startIndex=0;
    let aantal =0;
    while(stoppen===false){
        if (tekst.indexOf("an",startIndex)!==-1){
            startIndex = tekst.indexOf("an",startIndex) +1;
            aantal = aantal +1;
        }else{
            stoppen =true;
        }
    }
    console.log("Aantal keer an met functie met indexOf: " +aantal);
}
const zoekWoordAnMetLastIndexOf =() =>{
    let tekst = document.getElementById("tekst").value.toLowerCase();
    let stoppen = false;
    let startIndex=tekst.length;
    let aantal =0;
    while(stoppen===false){
        if (tekst.lastIndexOf("an",startIndex)!==-1){
            startIndex = tekst.lastIndexOf("an",startIndex) -1;
            aantal = aantal +1;
        }else{
            stoppen =true;
        }
    }
    console.log("Aantal keer an met functie met lastIndexOf: " +aantal);
}
window.addEventListener("load", setup);