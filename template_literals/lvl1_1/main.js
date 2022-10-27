let name = "Franz";
let nachname = "Mezlaw";
let geburtsort = "Hameln";
let lieblingsessen = "burger";
let lieblingsJahreszeit = "Sommer";

let allesZusammen = `Mein Name ist ${name} ${nachname}. Ich bin in ${geburtsort} geboren. Mein Lieblinsgsessen sind ${lieblingsessen} und ich liebe die Jahreszeit ${lieblingsJahreszeit}.`
let output = document.querySelector("#output").innerHTML = allesZusammen;
