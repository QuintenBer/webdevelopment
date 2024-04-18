const setup = () => {
    let student1={
        voornaam : "Quinten",
        familienaam : "Bernard",
        geboorteDatum : new Date("2005-8-1"),
        adres : { // een object
            straat : "Akkerstraat 23",
            postcode : "8400",
            gemeente : "Geluwe"//QB
        },
        isIngeschreven : true,
        namenVanExen : ["geen", "geen", "geen", "geen"], // een array
        aantalAutos : 0
    }
    let JSONStudent1 = JSON.stringify(student1);
    console.log(JSONStudent1);

    let objectJSONStudent1 = JSON.parse('{"voornaam":"Quinten","familienaam":"Bernard","geboorteDatum":"2005-07-31T22:00:00.000Z","adres":{"straat":"Akkerstraat 23","postcode":"8400","gemeente":"Geluwe"},"isIngeschreven":true,"namenVanExen":["geen","geen","geen","geen"],"aantalAutos":0}');
    console.log(objectJSONStudent1.familienaam)


}


window.addEventListener("load", setup);