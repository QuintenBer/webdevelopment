const setup = () => {
    const klasseBelangrijk = document.getElementsByClassName("belangrijk");
    for(let i=0;i<klasseBelangrijk.length;i++){
        klasseBelangrijk[i].classList.add("opvallend")
    }
}



window.addEventListener("load", setup);