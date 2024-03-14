const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
	valideerVoornaam();
	valideerFamilienaam();
	valideerGeboortedatum();
	valideerEmail();
	valideerAantalKinderen();
};

const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		txtVoornaam.className="invalid"; // invalid class instellen
		errVoornaam.innerHTML = "max. 30 karakters";
	} else {
		txtVoornaam.className=""; // alle classes verwijderen
		errVoornaam.innerHTML = "";
	}
};
const valideerFamilienaam = () => {
	let txtFamilienaam = document.getElementById("txtFamilienaam");
	let errFamilienaam = document.getElementById("errFamilienaam");
	let voornaam = txtFamilienaam.value.trim();
	if (voornaam.length ===0) {
		txtFamilienaam.className="invalid"; // invalid class instellen
		errFamilienaam.innerHTML = "verplicht veld";
	} else {
		txtFamilienaam.className=""; // alle classes verwijderen
		errFamilienaam.innerHTML = "";
	}
};
const valideerGeboortedatum = () => {
	let txtGeboortedatum = document.getElementById("txtGeboortedatum");
	let errGeboortedatum = document.getElementById("errGeboortedatum");
	let geboortedatum = txtGeboortedatum.value.trim();
	if (geboortedatum.length ===0) {
		txtGeboortedatum.className="invalid"; // invalid class instellen
		errGeboortedatum.innerHTML = "verplicht veld";
	} else {
		txtGeboortedatum.className=""; // alle classes verwijderen
		errGeboortedatum.innerHTML = "";
	}
if(geboortedatum.includes("-",4)&&geboortedatum.includes("-",7)){
	let lijstElementenTxtGeboortedatum= geboortedatum.split("-");
	if(lijstElementenTxtGeboortedatum[0].length===4 &&isGetal(lijstElementenTxtGeboortedatum[0])
		&&lijstElementenTxtGeboortedatum[1].length===2 &&isGetal(lijstElementenTxtGeboortedatum[1])
	&&lijstElementenTxtGeboortedatum[2].length===2 &&isGetal(lijstElementenTxtGeboortedatum[2])){

		txtGeboortedatum.className=""; // alle classes verwijderen
		errGeboortedatum.innerHTML = "";

	}else{
		txtGeboortedatum.className="invalid"; // invalid class instellen
		errGeboortedatum.innerHTML = "formaat is niet jjjj-mm-dd";
	}
}else{
	txtGeboortedatum.className="invalid"; // invalid class instellen
	errGeboortedatum.innerHTML = "formaat is niet jjjj-mm-dd";
}

};
const valideerEmail = () => {
	let txtEmail = document.getElementById("txtEmail");
	let errEmail = document.getElementById("errEmail");
	let email = txtEmail.value.trim();

	console.log("test uit if");
	if(!txtEmail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
		console.log("tekst in if");
		txtEmail.className="invalid"; // invalid class instellen
		errEmail.innerHTML = "geen geldig email adres";
	}else{
		txtEmail.className=""; // alle classes verwijderen
		errEmail.innerHTML = "";
	}

	if (email.length ===0) {
		txtEmail.className="invalid"; // invalid class instellen
		errEmail.innerHTML = "verplicht veld";
	} else {
		txtEmail.className=""; // alle classes verwijderen
		errEmail.innerHTML = "";
	}
};
const valideerAantalKinderen = () => {
	let txtAantalKinderen = document.getElementById("txtAantalKinderen");
	let errAantalKinderen = document.getElementById("errAantalKinderen");
	let aantalKinderen = txtAantalKinderen.value.trim();
	if (isGetal(aantalKinderen)){
		if (aantalKinderen >98) {
			txtAantalKinderen.className="invalid"; // invalid class instellen
			errAantalKinderen.innerHTML = "is te vruchtbaar";
		} else if(aantalKinderen<0){
			txtAantalKinderen.className="invalid"; // invalid class instellen
			errAantalKinderen.innerHTML = "is geen positief getal";

		} else {
			txtAantalKinderen.className=""; // alle classes verwijderen
			errAantalKinderen.innerHTML = "";
		}
	}

};

const isGetal = (tekst) => {
	return !isNaN(tekst);
}


window.addEventListener("load", setup);