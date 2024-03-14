const setup = () => {
    let button =document.getElementById("button");
    button.addEventListener("click",toonOutputForm);
}
const toonOutputForm =() =>{
    let waardeRoker = document.getElementById("roker");
    if(waardeRoker.checked){
        console.log("is roker");
    }else{
        console.log("is geen roker");
    }


    let waardeMoedertaal = document.getElementsByName("moedertaalRadioButton");
    let nietStoppen =true;
    let index=0;

        while(nietStoppen&& index<3){
                if(waardeMoedertaal[index].checked){
                    console.log("moedertaal is "+ waardeMoedertaal[index].value);
                    nietStoppen=false;
                }
                index++;
        }


    let lijstElementenBuurland = document.getElementById("buurland");
    for(let i =0;i<lijstElementenBuurland.length;i++){
        if(lijstElementenBuurland[i].selected){
            console.log("favoriete buurland is "+ lijstElementenBuurland[i].value);
        }
    }


    let lijstElementenBestelling = document.getElementById("bestelling");


    let eindString = "bestelling bestaat uit ";
    for (let i =0;i<lijstElementenBestelling.length;i++){
        if(lijstElementenBestelling[i].selected){
            eindString+=lijstElementenBestelling[i].value +" ";
            nietStoppen=false;
        }
    }
    console.log(eindString.trim())
}
window.addEventListener("load", setup);