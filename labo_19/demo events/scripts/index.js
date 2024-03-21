const setup = () => {
    let texts=document.querySelectorAll(".text");
	for (let i=0;i<texts.length;i++) {
		texts[i].addEventListener("click", klik);
	}	
}


const klik = (event) => {
	event.target.style.color="red"; //target zorgt ervoor dat je weet welk elementje opklikt
	//je hebt ook currentTarget
};
//QB
window.addEventListener("load", setup);