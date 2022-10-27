//Elemente holen
let theH1Element = document.querySelector("h1");
let theInputRange = document.querySelector("#range");
let theInputText = document.querySelector("#text");
let theFonts = document.querySelector("#fonts");


function changeFontsSize() {
    //Wert vom Input-Text in HTML-Inhalt vom h1-Element packen
    theH1Element.innerHTML = theInputText.value;
    //Wert vom <select> in die Font-Family von h1
    theH1Element.style.fontFamily = fonts.value;
    //Wert vom Range-Feld + px als Font-Size
    theH1Element.style.fontSize = theInputRange.value + "px";
}

