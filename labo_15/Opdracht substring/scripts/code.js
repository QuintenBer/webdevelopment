const setup = () => {
    let buttonSubstring = document.getElementById('btnSubstring');
    buttonSubstring.addEventListener('click', substring)
}

let substring = () => {
    let txtInput = document.getElementById('txtInput');
    let btnEersteGetal = document.getElementById('btnEersteGetal');
    let valueBtnEersteGetal = btnEersteGetal.value;
    let btnLaatsteGetal = document.getElementById('btnLaatsteGetal');
    let valueBtnLaatsteGetal = btnLaatsteGetal.value;
    let txtOutput = document.getElementById('txtOutput');
    let tekst = txtInput.value;
    let substringTekst = tekst.substring(valueBtnEersteGetal,valueBtnLaatsteGetal);
    txtOutput.innerHTML = substringTekst;
}
window.addEventListener("load", setup);
