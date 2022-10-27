function calculate() {
    let theNumber = parseInt(document.querySelector("input").value);

    let differenz = theNumber - 27;
    console.log(differenz);

    if (theNumber > 27) {
        let ausgabe = differenz * 2;
        console.log(ausgabe);
    }


}