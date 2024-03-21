const setup = () => {
    maakRood();
    createImg();
}
const maakRood=() =>{
    let liElementen = document.querySelectorAll('li');
    for (let i=0; i<liElementen.length;i++){
        liElementen[i].className = 'listitem'
    }
}
const createImg = () =>{
    let newImg = document.createElement('img');
    newImg.setAttribute('src','images/Foto%20Quinten%20Bernard.jpg');
    document.body.appendChild(newImg);
}//QB
window.addEventListener("load", setup);