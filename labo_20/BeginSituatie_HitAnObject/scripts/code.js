let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};


const setup = () => {
    let btnStart=document.getElementById("btnStart");
    btnStart.addEventListener("click", startSpel);
    let imgElement = document.getElementById("afbeelding")

    imgElement.addEventListener("click", klik);

};

const klik =(event) =>{
    let soortAfbeelding = event.target.getAttribute("src").slice(7,8)
    if(parseInt(soortAfbeelding,10)!==0){
        global.score++;
        let hits=document.getElementById("hits");
        hits.textContent="Aantal hits "+global.score;
        veranderElement();
    }else{
        clearInterval(global.timeoutId);
        window.alert("Game over");
    }
}

    const startSpel =()=>{
    veranderElement()
    let afbeelding = document.getElementById("afbeelding");

        global.timeoutId=setInterval(veranderElement,global.MOVE_DELAY);

}
const veranderElement = ()=>{
    let imgElement = document.getElementById("afbeelding");
    let playfield = document.getElementById("playField")

    let randomAfbeelding = Math.floor((Math.random()*global.IMAGE_COUNT));
    imgElement.setAttribute("src", global.IMAGE_PATH_PREFIX+randomAfbeelding+global.IMAGE_PATH_SUFFIX);


    let left=Math.floor((Math.random()*playfield.offsetWidth)-global.IMAGE_SIZE);
    let top=Math.floor(Math.random()*playfield.offsetHeight-global.IMAGE_SIZE);
    imgElement.style.left=left+"px";//position absolute voor die img voor te werken
    imgElement.style.top=top+"px";
}




window.addEventListener("load", setup);


