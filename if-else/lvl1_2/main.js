function calculate() {
    let theInput = parseInt(document.querySelector("#input").value);


    if (theInput >= 8) {
        console.log("Super");
    } else if (theInput >= 6) {
        console.log("gut");

    } else if (theInput >= 3) {
        console.log("okay");
    } else {
        console.log("scheiße");
    }

    console.log(theInput);
}


