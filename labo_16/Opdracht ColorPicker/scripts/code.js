const setup = () => {

    let sliders = document.getElementsByClassName("slider");

for(let i=0; i<sliders.length;i++){
        sliders[i].addEventListener("change", updateColor);
        sliders[i].addEventListener("input", updateColor);
    }
    updateColor();

}
const updateRed = () => {
    let sliders = document.getElementsByClassName("slider");
    let valueRed=sliders[0].value;
    updateColor();

}
const updateGreen = () => {
    let sliders = document.getElementsByClassName("slider");
    let valueGreen=sliders[1].value;
    updateColor();

}
const updateBlue = () => {
    let sliders = document.getElementsByClassName("slider");
    let valueBlue=sliders[2].value;
    updateColor();

}
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
window.addEventListener("load", setup);