let global = {
    AANTAL_HORIZONTAAL:4,
    AANTAL_VERTICAAL:3,
    AANTAL_KAARTEN:6,
    AANTAL_PAREN:0,
    IS_BUSY:false,
    KAART1:'',
    kaart2:'',
    KAART1_SOORT:'',
    kaart2_SOORT:'',
    AANTAL_FOUTEN:0,
//QB
};

const setup = () => {

    let btnStart=document.getElementById("btnStart");
    btnStart.addEventListener("click", speelSpel);
    let btnReset=document.getElementById("btnReset");
    btnReset.addEventListener("click", resetSpel);
    maakKaarten();
}
const speelSpel = () =>{
//QB
    let kaartElementen = document.getElementsByClassName("kaarten");
    for (let i=0;i<kaartElementen.length;i++) {

            kaartElementen[i].addEventListener("click", draaiKaarten);
    }

}
const draaiKaarten =(event) =>{

    if(!(event.target.className.includes('gevondenPaar'))) {


        let body = document.getElementsByTagName('body');


        if (global.IS_BUSY === false) {

            event.target.classList.add('omgedraaideKaarten');
            let momenteleKaart = '';
            if (event.target.className.length === 60) {
                momenteleKaart = event.target.className.slice(31, 41);
            } else {
                momenteleKaart = event.target.className.slice(32, 42);
            }
//QB

            let aantalKaartenOmgedraaid = document.getElementsByClassName('omgedraaideKaarten').length;


            event.target.style.backgroundImage = 'url("images/' + momenteleKaart + '")'
            if (aantalKaartenOmgedraaid === 1) {
                global.KAART1_SOORT = momenteleKaart;
                global.KAART1 = event.target;//QB
            } else if (aantalKaartenOmgedraaid === 2) {
                global.KAART2_SOORT = momenteleKaart;
                global.KAART2 = event.target;
            }


            if (aantalKaartenOmgedraaid === 2) {
                body[0].style.cursor = 'wait';
                if (global.KAART1_SOORT.localeCompare(global.KAART2_SOORT) === 0) {
                    global.IS_BUSY = true;
                    global.KAART1.classList.add('meldingGevonden');
                    global.KAART2.classList.add('meldingGevonden');


                    setTimeout(kaartGevonden, 2000);//QB
                    setTimeout(verwijderMeldingGevonden, 2100);

                } else {
                    global.IS_BUSY = true;
                    global.KAART1.classList.add('meldingFout');
                    global.KAART2.classList.add('meldingFout');

                    setTimeout(plaatsKaartenTerugAchterkant, 2000);
                    setTimeout(verwijderMeldingFout, 2100);
                }

            }
        }

    }
    setTimeout(eindeSpel, 2200);
}
const eindeSpel = () =>{
    if (global.AANTAL_PAREN*2 === (global.AANTAL_HORIZONTAAL * global.AANTAL_VERTICAAL)) {
        window.alert("Je hebt het spel uitgespeeld. Als je opnieuw wilt spelen duw op de reset knop en dan op de start knop.")
    }//QB
}
const verwijderMeldingGevonden = () =>{
    let body=document.getElementsByTagName('body');

    global.KAART1.classList.remove('meldingGevonden');
    global.KAART2.classList.remove('meldingGevonden');
    body[0].removeAttribute('style');
}
const verwijderMeldingFout = () =>{
    let body=document.getElementsByTagName('body');

    global.KAART1.classList.remove('meldingFout');
    global.KAART2.classList.remove('meldingFout');
    body[0].removeAttribute('style');
}

const kaartGevonden = () =>{

    let pElementen = document.getElementsByTagName('p');
    global.AANTAL_PAREN++;
    pElementen[1].textContent = 'Aantal paren gevonden: ' + global.AANTAL_PAREN;

    global.KAART1.classList.add('gevondenPaar');
    global.KAART1.classList.remove('kaarten', 'omgedraaideKaarten');
    global.KAART1.removeAttribute('style');
    global.KAART2.classList.add('gevondenPaar');
    global.KAART2.classList.remove('kaarten', 'omgedraaideKaarten');
    global.KAART2.removeAttribute('style');
    global.IS_BUSY=false;
}

const plaatsKaartenTerugAchterkant = () =>{
    let pElementen = document.getElementsByTagName('p');
    global.AANTAL_FOUTEN++;
    pElementen[0].textContent = 'Aantal fouten: ' + global.AANTAL_FOUTEN;
    let elemtenOmgedraaid = document.getElementsByClassName('omgedraaideKaarten');


    elemtenOmgedraaid[0].removeAttribute('style');
    elemtenOmgedraaid[0].classList.remove('omgedraaideKaarten');
    elemtenOmgedraaid[0].removeAttribute('style');//QB
    elemtenOmgedraaid[0].classList.remove('omgedraaideKaarten');
    global.IS_BUSY=false;
}
const maakKaarten = () =>{
    let speelveld = document.getElementById('speelveld')

    for(let i =0;i<global.AANTAL_HORIZONTAAL;i++){

        let divHorizontaal = document.createElement("div");
        divHorizontaal.classList.add('kaartenOverlappend');
        let index=i;
        for (let i =0; i<global.AANTAL_VERTICAAL;i++){
            let divVerticaal = document.createElement('div');
            divVerticaal.classList.add('kaarten');
            if(index===0){//QB
                divVerticaal.classList.add('kaartNummer'+(i));
            }else if(index===1){
                divVerticaal.classList.add('kaartNummer'+(i+2));
            }else if(index===2){
                divVerticaal.classList.add('kaartNummer'+(i+5));
            }else if(index===3){
                divVerticaal.classList.add('kaartNummer'+(i+8));
            }

            divHorizontaal.append(divVerticaal);
            speelveld.append(divHorizontaal);

        }
    }

    let arrayKaarten = randomKaarten();
    let kaarten = document.getElementsByClassName('kaarten')
    for (let i=0;i<kaarten.length;i++){
        kaarten[i].classList.add('soortKaart'+arrayKaarten[i]);

    }
}

const randomKaarten = () =>{
    let array = ['kaart1.png','kaart2.png','kaart3.png','kaart4.png','kaart5.png','kaart6.png'];
    let dubbeleArray = array.concat(array);//QB
    dubbeleArray.sort(() => Math.random() - 0.5);
    return dubbeleArray;
}
const resetSpel = () =>{

    let blokken = document.getElementsByClassName('kaartenOverlappend');
    let index=0;

    while(index<4){
        blokken[0].remove();
        index++;
    }
    let pElementen = document.getElementsByTagName('p');
    global.AANTAL_PAREN=0;//QB
    global.AANTAL_FOUTEN=0;
    pElementen[0].textContent = 'Aantal fouten: ' + global.AANTAL_FOUTEN;
    pElementen[1].textContent = 'Aantal paren gevonden: ' + global.AANTAL_PAREN;

    maakKaarten();



}
window.addEventListener("load", setup);
//QB