const setup = () => {
    let knop=document.getElementById("knop");
    knop.addEventListener("click", verander);

}
window.addEventListener("load", setup);

verander  = () =>{
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}