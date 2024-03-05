const setup = () => {
    let button =document.getElementById("button");

    button.addEventListener("click",andereFunctie);
}
const maakMetSpaties = (inputTekst) =>{

    let result ="";
    for (let i=0;i<inputTekst.length;i++){
        if (inputTekst.charAt(i)!==" "){
            result = result+ inputTekst.charAt(i)+" ";
        }
    }
    return result
}

const andereFunctie =() =>{
    let tekst = document.getElementById("tekst").value;
   console.log(maakMetSpaties(tekst));
}

window.addEventListener("load", setup);