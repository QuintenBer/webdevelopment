const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click",bereken )
}

let bereken = () =>{
    let prijs = document.getElementsByClassName("prijs");
    let aantal = document.getElementsByClassName("aantal");
    let btw = document.getElementsByClassName("btw");
    let subtotaal = document.getElementsByClassName("subtotaal");
    let totaal = document.getElementById("totaal");
    console.log(parseFloat(prijs[1].textContent));
    console.log(aantal[1].value);
    console.log(parseInt(btw[1].textContent,10));
    let subtotaalBerekend1 = ((parseFloat(prijs[0].textContent))*aantal[0].value)+((parseFloat(prijs[0].textContent)*aantal[0].value)*(parseInt(btw[0].textContent,10))/100);
    let subtotaalBerekend2 = ((parseFloat(prijs[1].textContent))*aantal[1].value)+((parseFloat(prijs[1].textContent)*aantal[1].value)*(parseInt(btw[1].textContent,10))/100);
    let subtotaalBerekend3 = ((parseFloat(prijs[2].textContent))*aantal[2].value)+((parseFloat(prijs[2].textContent)*aantal[2].value)*(parseInt(btw[2].textContent,10))/100);
    subtotaal[0].textContent=subtotaalBerekend1.toFixed(2)+' Eur';
    subtotaal[1].textContent=subtotaalBerekend2.toFixed(2)+' Eur';
    subtotaal[2].textContent=subtotaalBerekend3.toFixed(2)+' Eur';
    totaal.textContent = (subtotaalBerekend1+subtotaalBerekend2+subtotaalBerekend3).toFixed(2) +" Eur"



}


window.addEventListener("load", setup);