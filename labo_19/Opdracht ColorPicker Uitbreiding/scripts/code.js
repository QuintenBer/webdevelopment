const setup = () => {

    let sliders = document.getElementsByClassName("slider");
    let saveButton = document.querySelector('#saveButton');
    saveButton.addEventListener('click', save);

for(let i=0; i<sliders.length;i++){
        sliders[i].addEventListener("change", updateColor);
        sliders[i].addEventListener("input", updateColor);
    }
    updateColor();
}
//QB
const voerDeelKleurUit = () =>{
    let blokkenTeVerwijderen = document.querySelectorAll(".color")

    for (let i=1;i<blokkenTeVerwijderen.length;i++) {
        blokkenTeVerwijderen[i].addEventListener("click", klik);
    }
}



const klik = (event) => {

    let sliders = document.getElementsByClassName("slider");
    let color = document.getElementsByClassName("color");


    let rgbWaarde = event.target.getAttribute("style").slice(21).trim().replace("(","").replace(")","").replace(";","").split(",");



    let valueRed=rgbWaarde[0].trim();
    let valueGreen=rgbWaarde[1].trim();
    let valueBlue=rgbWaarde[2].trim();

    let rgb ="rgb("+valueRed+","+valueGreen+","+valueBlue+")";
    color[0].style.backgroundColor = rgb;
    let span = document.getElementsByTagName("span");
    span[0].textContent = "Rood"+valueRed;
    span[1].textContent = "Groen"+valueGreen;
    span[2].textContent = "Blauw"+valueBlue;
    let sliderElementen = document.querySelectorAll(".slider");

    sliderElementen[0].value = valueRed;
    sliderElementen[1].value = valueGreen;
    sliderElementen[2].value = valueBlue;

};


const updateColor = () =>{

    let sliders = document.getElementsByClassName("slider");
    let color = document.getElementsByClassName("color");
    let valueRed=sliders[0].value;
    let valueGreen=sliders[1].value;
    let valueBlue=sliders[2].value;
    let rgb ="rgb("+valueRed+","+valueGreen+","+valueBlue+")";

    color[0].style.backgroundColor = rgb;
    let span = document.getElementsByTagName("span");
    span[0].textContent = "Rood"+valueRed;
    span[1].textContent = "Groen"+valueGreen;
    span[2].textContent = "Blauw"+valueBlue;

}
//QB
const save =() =>{
    let newDivBuitenste = document.createElement('div');
    newDivBuitenste.className = 'vanBlock';
    let newDivBinnenste = document.createElement('div');
    newDivBinnenste.className = 'color';

    let verwijderButton = document.createElement('input');
    verwijderButton.setAttribute('type', 'button');
    verwijderButton.setAttribute('value', 'X');
    verwijderButton.className= 'verwijderKnop';
    newDivBinnenste.appendChild(verwijderButton);
    newDivBuitenste.appendChild(newDivBinnenste)
    document.body.appendChild(newDivBuitenste);


    let color = document.getElementsByClassName("color");
    let sliders = document.getElementsByClassName("slider");
    let valueRed=sliders[0].value;
    let valueGreen=sliders[1].value;
    let valueBlue=sliders[2].value;
    let rgb ="rgb("+valueRed+","+valueGreen+","+valueBlue+")";
    color[color.length-1].style.backgroundColor = rgb;
//QB
    let knoppen=document.querySelectorAll(".verwijderKnop");
    for (let i=0;i<knoppen.length;i++) {
        knoppen[i].addEventListener("click", verwijderBlok);
    }
    voerDeelKleurUit();

}
const verwijderBlok = (event) =>{
event.target.parentElement.parentElement.remove();

}//QB
window.addEventListener("load", setup);