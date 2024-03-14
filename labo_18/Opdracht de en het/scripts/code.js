const setup = () => {
    let button =document.getElementById("button");
    button.addEventListener("click",vervangDeNaarHet);
}

const vervangDeNaarHet = () =>{
    let zin = document.getElementById("tekst").value;
    let vervangedeZinElementen =zin.split(" ");
    for (let i =0; i<vervangedeZinElementen.length;i++){
        if(vervangedeZinElementen[i].localeCompare("de")===0){
            vervangedeZinElementen[i] = "het";
        }
    }
    let vervangendeZin= vervangedeZinElementen.join(" ");
    console.log(vervangendeZin);
}


window.addEventListener("load", setup);