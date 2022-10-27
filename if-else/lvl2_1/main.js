//Output holen



function calculate() {
    //Hole die Elemente in die das Ergebnis soll
    let anzeige1 = document.querySelector("h1");
    let anzeige2 = document.querySelector("h2");
    //Hole den Inhalt vom Input
    let age1 = parseInt(document.querySelector("#age1").value);
    let age2 = parseInt(document.querySelector("#age2").value);
    let size1 = parseInt(document.querySelector("#size1").value);
    let size2 = parseInt(document.querySelector("#size2").value);

    //Berechne alles
    let multiplizieren1 = age1 * 5;
    let multiplizieren2 = age2 * 5;

    let addieren1 = multiplizieren1 + size1;
    let addieren2 = multiplizieren2 + size2;

    console.log(addieren1);
    console.log(addieren2);
    //Das Ergebnis in die zuvor geholten <h1> und <h2> schreiben
    anzeige1.innerHTML = addieren1;
    anzeige2.innerHTML = addieren2;
}





// let ageJohn = 22;
// let sizeJohn = 170;
// let ageMeike = 34;
// let sizeMeike = 168;

// function calculate(age, size) {
//     let multiplizieren = age * 5;
//     let ergebnis = multiplizieren + size;
//     console.log(ergebnis);
// }

// calculate(ageJohn, sizeJohn);
// calculate(ageMeike, sizeMeike);


