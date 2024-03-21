const setup = () => {
    let btnValideer=document.querySelector("#btnValideer");
    btnValideer.addEventListener("click", appendToDiv);

}
const appendToDiv =() =>{
    let tekstPElementen = document.querySelector('#pText').value;
    let eenPElement = document.createElement('p');
    let pElementTekst = document.createTextNode(tekstPElementen);//QB
    document.querySelector('#myDIV').appendChild(document.createElement('br'));
    document.querySelector('#myDIV').appendChild(eenPElement.appendChild(pElementTekst));
}
window.addEventListener("load", setup);