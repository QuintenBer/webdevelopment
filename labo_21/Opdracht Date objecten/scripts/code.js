const setup = () => {
    let btnStart=document.getElementById("btnBereken");
    btnStart.addEventListener("click", bereken);
    //QB
}

const bereken = () =>{
    let huidigeTijd = new Date()
    let mijnVerjaardag =new Date(2005,8,1);
    let totaal = huidigeTijd-mijnVerjaardag
    totaal = totaal/(1000*60*60*24);
    totaal = Math.floor(totaal)
    console.log(totaal);


}
window.addEventListener("load", setup);