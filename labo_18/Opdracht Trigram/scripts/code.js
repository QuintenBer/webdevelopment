const setup = () => {
    let button =document.getElementById("button");
    button.addEventListener("click",uitVoerendeFunctie);
}

const zoekTrigrams =(woord) =>{

    let eindIndex =3;
    let trigram = ""
for (let i=0;i<woord.length;i++){
    if(eindIndex!==woord.length+1){
        trigram = trigram + woord.substring(i,eindIndex)+"<br>";
        eindIndex++;
    }

}
    return trigram;
}
const uitVoerendeFunctie = () =>{
    let woord = document.getElementById("tekst").value;

    let txtOutput =  document.getElementById('txtOutput');
    let tekst = zoekTrigrams(woord);
    txtOutput.innerHTML = tekst;
}


window.addEventListener("load", setup);