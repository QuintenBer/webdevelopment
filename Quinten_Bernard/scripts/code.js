const setup = () => {
    let lijstElementen= document.getElementsByClassName("opties")
    let lijstElementenTest= document.getElementById("kip");
    let btnValideer=document.getElementById("btnValideer");
    btnValideer.addEventListener("click", afbeeldingKip);
    let btnLetter=document.getElementById("btnLetter");
    btnLetter.addEventListener("click", letter);

}

const afbeeldingKip = ()=>{
    let lijstElementen= document.getElementsByTagName("option");
    let afbeelding = document.getElementById("img");
    console.log("test0")
    if(lijstElementen[0].selected){
        afbeelding.className="hidden";
        console.log("test1")

    }else if(lijstElementen[1].selected){
        afbeelding.className="with-egg";
        console.log("test2")
    }else{
        afbeelding.className="";
        console.log("test3")
    }
}

const letter = () =>{
    let letter = document.getElementById("letter");
    let span = document.getElementsByTagName("span");
    let p = document.getElementsByTagName("p");
    let aantal = 0;
    for (let i=0;i<p.length;i++){
        if(p[i] ===letter){
            aantal++;
        }
    }

    span.innerHTML = "Letter "+ '"'+letter+'"'+ "komt "+ aantal+"keer voor in bovenstaande zin.";
}
window.addEventListener("load", setup);