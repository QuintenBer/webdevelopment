let personen = [{
    voornaam: 'Jan',
    familienaam: 'Janssens',
    geboorteDatum: new Date('2010-10-10'),
    email: 'jan@example.com',
    aantalKinderen: 0
},
    {
        voornaam: 'Mieke',
        familienaam: 'Mickelsen',
        geboorteDatum: new Date('1980-01-01'),
        email: 'mieke@example.com',
        aantalKinderen: 1
    },
    {
        voornaam: 'Piet',
        familienaam: 'Pieters',
        geboorteDatum: new Date('1970-12-31'),
        email: 'piet@example.com',
        aantalKinderen: 2
    }];


const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");


    valideer();
    let lstPersonen = document.getElementById("lstPersonen");
    console.log(lstPersonen.selectedIndex)
    let voornaam = document.getElementById("txtVoornaam").value;
    let familienaam = document.getElementById('txtFamilienaam').value;
    let geboortedatum = document.getElementById("txtGeboorteDatum").value;
    let email = document.getElementById('txtEmail').value;
    let aantalKinderen = document.getElementById('txtAantalKinderen').value;


    if(lstPersonen.selectedIndex===-1){

    if (zijnErErrors()===false) {
        let maakOption = document.createElement("option");

        console.log(voornaam)
        console.log(familienaam)
        let lijst = document.getElementById("lstPersonen");
        maakOption.textContent = voornaam + " " + familienaam;
        maakOption.setAttribute("value", voornaam + familienaam)
        lijst.appendChild(maakOption);
        personen.push(
            {
                voornaam: voornaam,
                familienaam: familienaam,
                geboorteDatum: new Date(geboortedatum),
                email: email,
                aantalKinderen: aantalKinderen
            })
        }
    }else{
        if (zijnErErrors()===false) {
            console.log('in else')
            personen[lstPersonen.selectedIndex].voornaam = voornaam;
            personen[lstPersonen.selectedIndex].familienaam = familienaam;
            personen[lstPersonen.selectedIndex].geboorteDatum = new Date(geboortedatum);
            personen[lstPersonen.selectedIndex].email = email;//QB
            personen[lstPersonen.selectedIndex].aantalKinderen = aantalKinderen;
            lstPersonen[lstPersonen.selectedIndex].value = voornaam+familienaam;
            lstPersonen[lstPersonen.selectedIndex].textContent = voornaam+" "+familienaam;

        }
    }



};//QB


const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");



    let voornaam = document.getElementById("txtVoornaam");
    let familienaam = document.getElementById('txtFamilienaam');
    let geboortedatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById('txtEmail');
    let aantalKinderen = document.getElementById('txtAantalKinderen');
    voornaam.value ="";//QB
    familienaam.value ="" ;
    geboortedatum.value ="";
    email.value ="" ;
    aantalKinderen.value = "";
    let elements = document.getElementById("lstPersonen").options;

    for(let i = 0; i < elements.length; i++){
        elements[i].selected = false;
    }

};
const zijnErErrors = () =>{
    let spans = document.getElementsByClassName("errorMessage");
    let heeftErrors = false;

    for (let i =0;i<spans.length;i++){
        if(spans[i].textContent.length!==0){
            heeftErrors = true;
        }
    }//QB
    return heeftErrors;
}




const setup = () => {

    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");


    lstPersonen.addEventListener("change",change)

    plaatsStaandaardSituatie();
};
const plaatsStaandaardSituatie = () =>{
let lijst = document.getElementById("lstPersonen");
for (let i =0;i<3;i++){//QB
    let maakOption = document.createElement("option");
    maakOption.textContent = personen[i].voornaam+" "+personen[i].familienaam
    maakOption.setAttribute("value",personen[i].voornaam+personen[i].familienaam)
    lijst.appendChild(maakOption);
}
}
const change = (event) =>{
    let gekliktePersoonPlaats = event.target.selectedIndex;

    let voornaam = document.getElementById("txtVoornaam");
    let familienaam = document.getElementById('txtFamilienaam');
    let geboortedatum = document.getElementById("txtGeboorteDatum");
    let email = document.getElementById('txtEmail');
    let aantalKinderen = document.getElementById('txtAantalKinderen');
    voornaam.value = personen[gekliktePersoonPlaats].voornaam;
    familienaam.value = personen[gekliktePersoonPlaats].familienaam;
    geboortedatum.value = personen[gekliktePersoonPlaats].geboorteDatum.toLocaleDateString('en-CA');
    email.value = personen[gekliktePersoonPlaats].email;//QB
    aantalKinderen.value = personen[gekliktePersoonPlaats].aantalKinderen;
}

window.addEventListener("load", setup);