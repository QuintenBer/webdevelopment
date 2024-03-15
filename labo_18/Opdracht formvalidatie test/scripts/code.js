const setup = () => {
    let button =document.getElementById("button");
    button.addEventListener("click",controleerAlles);
}

const controleerAlles =() =>{//QB
    let voornaam = document.getElementById('first_name').value;
    let familienaamnaam = document.getElementById('last_name');
    let geboortedatum = document.getElementById('geboortedatum');
    let email = document.getElementById('email');
    let aantalKinderen = document.getElementById('aantalKinderen');

    let spans = document.getElementsByTagName("span");
    let aantalFouten =0;

    if (voornaam.length>30){
        spans[0].innerHTML = 'error: "max. 30 karakters"';
        plaatsRandRood(0);

        aantalFouten++;
    }

    if(familienaamnaam.value===""){
        spans[1].innerHTML = 'error: "verplicht veld"';
        plaatsRandRood()
    }
    if(geboortedatum.value===""){
        spans[1].innerHTML = 'error: "verplicht veld"';
        plaatsRandRood()
    }




    if(aantalFouten===0){
        window.alert('proficiat');
    }

}
const plaatsRandRood =(getal)=>{
    let inputVelden = document.getElementsByTagName("input");
    inputVelden[getal].style.border ="1px solid red"
}
window.addEventListener("load", setup);