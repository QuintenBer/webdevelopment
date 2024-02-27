const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click",bereken )
}

let bereken = () =>{
    let prijs = document.getElementsByClassName("prijs");
    let aantal = document.getElementsByClassName("aantal");
    let btw = document.getElementsByClassName("btw");
    let subtotaal = document.getElementsByClassName("subtotaal");

    let subtotaalBerekend1 = (parseFloat(prijs[0].textContent)*aantal[0])+((parseFloat(prijs[0].textContent)*aantal[0])*(parseInt(btw[0].textContent,10))/100);
    let subtotaalBerekend2 = (prijs[1]*aantal[1])+((prijs[1]*aantal[1])*btw[1]/100);
    let subtotaalBerekend3 = (prijs[2]*aantal[2])+((prijs[2]*aantal[2])*btw[2]/100);
    subtotaal[0].textContent=''+subtotaalBerekend1+' Eur';
    subtotaal[1].textConten=''+subtotaalBerekend2+' Eur';
    subtotaal[2].textContet=''+subtotaalBerekend3+' Eur';


}


window.addEventListener("load", setup);