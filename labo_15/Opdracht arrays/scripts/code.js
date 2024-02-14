const setup = () => {
    let naamFamilieleden = ['Laura', 'Quinten','Jelle','Luca,','Matteo','Xian','Rune,','Cailean'];
    console.log(naamFamilieleden.length);
    console.log(naamFamilieleden[0]);
    console.log(naamFamilieleden[2]);
    console.log(naamFamilieleden[4]);
    const voegExtraNaamToe =() =>{
        const invoer = prompt('Geef de naam op die je wilt toevoegen in de array.')
        naamFamilieleden.push(invoer)
        console.log(naamFamilieleden)
    }
    voegExtraNaamToe();
    console.log(naamFamilieleden.join());
}
window.addEventListener("load", setup);



