let global={
    blokRgbWaarden :[]

}

const setup = () => {
    veranderLaatsteGeselecteerdKleurOp()
    //localStorage.clear();
    let sliders = document.getElementsByClassName("slider");
    let saveButton = document.querySelector('#saveButton');
    saveButton.addEventListener('click', save);

for(let i=0; i<sliders.length;i++){
        sliders[i].addEventListener("change", updateColor);
        sliders[i].addEventListener("input", updateColor);
    }
    updateColor();
    let arrayRGBWaarden = JSON.parse(localStorage.getItem("favorieten.divs"));

    if (arrayRGBWaarden!==null){
        haalLocaleFavorieteKleurenOp();
    }





}

const haalLocaleFavorieteKleurenOp =() =>{
    let arrayRGBWaarden = JSON.parse(localStorage.getItem("favorieten.divs"));

    for(let i =0;i<arrayRGBWaarden.length;i++){
        maakElement(arrayRGBWaarden[i].rood, arrayRGBWaarden[i].groen, arrayRGBWaarden[i].blauw)
    }
}
//QB

const veranderLaatsteGeselecteerdKleurOp = () =>{
    let RGBWaardenLaatsteGeselecteerd = JSON.parse(localStorage.getItem("laatsteWaarden.geselecteerd"));

    let valueRed = RGBWaardenLaatsteGeselecteerd[0];
    let valueGreen = RGBWaardenLaatsteGeselecteerd[1];
    let valueBlue = RGBWaardenLaatsteGeselecteerd[2];

    let span = document.getElementsByTagName("span");
    span[0].textContent = "Rood"+valueRed;
    span[1].textContent = "Groen"+valueGreen;
    span[2].textContent = "Blauw"+valueBlue;
    let sliderElementen = document.querySelectorAll(".slider");

    sliderElementen[0].value = valueRed;
    sliderElementen[1].value = valueGreen;
    sliderElementen[2].value = valueBlue;

    let color = document.getElementsByClassName("color");
    let rgb ="rgb("+valueRed+","+valueGreen+","+valueBlue+")";
    color[0].style.backgroundColor = rgb;
}
const haalKleurOpDatMomenteelGeselecteerdIs =() =>{
    let sliders = document.getElementsByClassName("slider");
    let valueRed=sliders[0].value;
    let valueGreen=sliders[1].value;
    let valueBlue=sliders[2].value;

    let arrayKleuren = [];
    arrayKleuren.push(valueRed);
    arrayKleuren.push(valueGreen);
    arrayKleuren.push(valueBlue);
    let stringVanRGBWaardenLaatsteGeselecteerd = JSON.stringify(arrayKleuren);


    //localStorage.removeItem("laatsteWaarden.geselecteerd");
    localStorage.setItem("laatsteWaarden.geselecteerd",stringVanRGBWaardenLaatsteGeselecteerd );

}


const klik = (event) => {

    let sliders = document.getElementsByClassName("slider");
    let color = document.getElementsByClassName("color");

    let valueRed=event.target.getAttribute("data-red")
    let valueGreen=event.target.getAttribute("data-green");
    let valueBlue=event.target.getAttribute("data-blue");

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
    haalKleurOpDatMomenteelGeselecteerdIs();

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
    haalKleurOpDatMomenteelGeselecteerdIs();
}
//QB

const maakElement = (rood, groen, blauw) =>{
    let newDivBuitenste = document.createElement('div');
    newDivBuitenste.className = 'vanBlock';
    let newDivBinnenste = document.createElement('div');
    newDivBinnenste.className = 'color';

    let verwijderButton = document.createElement('input');
    verwijderButton.setAttribute('type', 'button');
    verwijderButton.setAttribute('value', 'X');
    verwijderButton.className= 'verwijderKnop';
    newDivBinnenste.addEventListener("click", klik);
    newDivBinnenste.appendChild(verwijderButton);
    newDivBuitenste.appendChild(newDivBinnenste)
    document.body.appendChild(newDivBuitenste);




    newDivBinnenste.setAttribute("data-red", rood);

    newDivBinnenste.setAttribute("data-green", groen);

    newDivBinnenste.setAttribute("data-blue", blauw);

    newDivBinnenste.style.background = "rgb(" + rood + "," + groen + "," + blauw + ")";

    global.blokRgbWaarden.push(
        {
            rood: rood,
            groen: groen,
            blauw: blauw

        });
    let stringVanAlleRGBWaarden = JSON.stringify(global.blokRgbWaarden);
    localStorage.setItem("favorieten.divs",stringVanAlleRGBWaarden );

    let knoppen=document.querySelectorAll(".verwijderKnop");
    for (let i=0;i<knoppen.length;i++) {
        knoppen[i].addEventListener("click", verwijderBlok);
    }
    let color = document.getElementsByClassName("color");
    let rgb ="rgb("+rood+","+groen+","+blauw+")";
    color[color.length-1].style.backgroundColor = rgb;

}
const save =() =>{
    let sliders = document.getElementsByClassName("slider");
    let valueRed=sliders[0].value;
    let valueGreen=sliders[1].value;
    let valueBlue=sliders[2].value;
   maakElement(valueRed,valueGreen,valueBlue)


//QB
}
const verwijderBlok = (event) =>{
event.target.parentElement.parentElement.remove();
event.stopPropagation()
saveArrayWanneerBlokVerwijderd(event)



}//QB

const saveArrayWanneerBlokVerwijderd = (event) =>{
    let color = document.getElementsByClassName("color");
    localStorage.removeItem("favorieten.divs");
    let stoppen = false;
    while(stoppen ===false){
        global.blokRgbWaarden.pop();
        if (global.blokRgbWaarden.length===0){
            stoppen=true;
        }
    }

    for(let i =1;i<color.length;i++){
        let valueRed=color[i].getAttribute("data-red")
        let valueGreen=color[i].getAttribute("data-green");
        let valueBlue=color[i].getAttribute("data-blue");
        let rgb ="rgb("+valueRed+","+valueGreen+","+valueBlue+")";

        global.blokRgbWaarden.push(
            {
                rood: valueRed,
                groen: valueGreen,
                blauw: valueBlue

            });
    }
    let stringVanAlleRGBWaarden = JSON.stringify(global.blokRgbWaarden);
    localStorage.setItem("favorieten.divs",stringVanAlleRGBWaarden );
}
window.addEventListener("load", setup);