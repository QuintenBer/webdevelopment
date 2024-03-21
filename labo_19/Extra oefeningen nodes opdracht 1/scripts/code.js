const setup = () => {
veranderP();
}
const veranderP =()=>{
    let pElement = document.querySelectorAll("p");
    pElement[0].textContent = "Good Job!"
}//QB
window.addEventListener("load", setup);