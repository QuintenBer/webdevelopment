let global={
    validCommands :["g", "y", "x", "i"],
    gezochteDingen :[]

}




const setup = () => {

    let goButton = document.querySelector('#goButton');
    goButton.addEventListener('click', voerAllesUit);




    let arrayZoekgeschiedenis = JSON.parse(localStorage.getItem("zoekgeschiedenis"));

    if (arrayZoekgeschiedenis!==null){

        for (let i=0; i<arrayZoekgeschiedenis.length;i++){
            maakBlokAan(arrayZoekgeschiedenis[i].soort,arrayZoekgeschiedenis[i].url,arrayZoekgeschiedenis[i].zoekterm)
        }
    }
}
const voerAllesUit = () =>{
zoekBalk()
}

const zoekBalk = () =>{

    let inputTekst = document.getElementById("inputfield").value;
    if(inputTekst!==null) {
        if (inputTekst.localeCompare("refresh page") === 0) {
            location.reload()
        } else {
        if (inputTekst.slice(0, 1).localeCompare("/") === 0) {
            let command = inputTekst.slice(1, 2);
            let arrayWoorden = inputTekst.slice(3).split(" ");
            console.log(arrayWoorden)

            let url = "";
            let knownCommandPrefix = true;
            let soortCommand = "";
            switch (command) {
                case global.validCommands[0]:
                    url = "https://www.google.com/search?q="
                    for (let i = 0; i < arrayWoorden.length; i++) {
                        if (i === 0) {
                            url = url + arrayWoorden[i];
                        } else {
                            url = url + "+" + arrayWoorden[i];
                        }
                    }
                    soortCommand="Google";
                    window.open(url).focus();


                    break;
                case global.validCommands[1]:
                    url = "https://www.youtube.com/results?search_query="
                    for (let i = 0; i < arrayWoorden.length; i++) {
                        if (i === 0) {
                            console.log(arrayWoorden[i])
                            url = url + arrayWoorden[i];
                        } else {
                            url = url + "+" + arrayWoorden[i];
                        }
                    }
                    console.log(url)
                    soortCommand="Youtube";
                    window.open(url).focus();


                    break;
                case global.validCommands[2]:
                    url = "https://twitter.com/hashtag/"
                    for (let i = 0; i < arrayWoorden.length; i++) {
                        if (i === 0) {
                            url = url + arrayWoorden[i];
                        } else {
                            url = url + "+" + arrayWoorden[i];
                        }
                    }
                    soortCommand="X";
                    window.open(url).focus();


                    break;
                case global.validCommands[3]:
                    url = "https://www.instagram.com/explore/tags/"
                    for (let i = 0; i < arrayWoorden.length; i++) {
                        if (i === 0) {
                            url = url + arrayWoorden[i];
                        } else {
                            url = url + "+" + arrayWoorden[i];
                        }
                    }
                    url = url + "/";
                    soortCommand="Instagram";
                    window.open(url).focus();


                    break;
                default:
                    knownCommandPrefix = false;
                    window.alert("Unknown command prefix");
                    break;
            }
            if (knownCommandPrefix===true) {
                global.gezochteDingen.push(
                    {
                        soort: soortCommand,
                        url: url,
                        zoekterm: inputTekst.slice(3)
                    }
                )
                let stringVanAlleGezochteDingen = JSON.stringify(global.gezochteDingen);
                localStorage.setItem("zoekgeschiedenis", stringVanAlleGezochteDingen);
                maakBlokAan(soortCommand,url, inputTekst.slice(3));

            }


        } else {
            window.alert("Invalid command")
        }
    }
    }
}


const maakBlokAan = (soortZoekopdracht, url, zoekterm) =>{
    let buitensteDiv = document.createElement("div")
    buitensteDiv.classList.add('card');
    buitensteDiv.classList.add(soortZoekopdracht);
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body")
    cardBody.classList.add("container")



    let tekstSoortZoekopdracht = document.createElement("h3");
    tekstSoortZoekopdracht.textContent = soortZoekopdracht;
    let tekstZoekTerm = document.createElement("p");
    tekstZoekTerm.textContent = zoekterm;
    let h2Element = document.getElementById("history");
    let button = document.createElement("input");
    button.type="button"
    button.classList.add("buttonHistories");
    button.value = "GO!";
    let divRow1 = document.createElement("div");
    divRow1.classList.add("row");
    let divCol1 = document.createElement("div");
    divCol1.classList.add("col");

    let container =document.getElementById('containerHistory')


    container.classList.add('container')
    buitensteDiv.classList.add('col-3')
    divCol1.appendChild(tekstSoortZoekopdracht)
    divCol1.appendChild(tekstZoekTerm)
    divCol1.appendChild(button)
    divRow1.appendChild(divCol1);
    cardBody.appendChild(divRow1)
    buitensteDiv.appendChild(cardBody);

    let aantalBlokken = document.getElementsByClassName('card')
if (aantalBlokken.length===0||aantalBlokken.length%3===0){
    let rowDiv = document.createElement('div')
    rowDiv.classList.add('row')
    rowDiv.classList.add('rowHistory')
    rowDiv.appendChild(buitensteDiv);
    container.appendChild(rowDiv);
}else{
    let aantalRows = document.getElementsByClassName('rowHistory')

    aantalRows[aantalRows.length-1].appendChild(buitensteDiv);

}









    button.addEventListener('click', historyKlik)
    button.setAttribute("url", url)

}
const historyKlik = (event) =>{
    let urlHistorieBlok = event.target.getAttribute("url");


    window.open(urlHistorieBlok).focus();
}
window.addEventListener("load", setup);