

function checkAirQuality() {
    let theBody = document.querySelector("body");
    let theRange = document.querySelector("input").value;
    let theH1 = document.querySelector("h1");
    let theH2 = document.querySelector("h2");

    if (theRange <= 50) {
        theBody.style.backgroundColor = "green";
        theH1.innerHTML = "Level of health concern: Good";
        theH2.innerHTML = "Level of health effect: Little or no risk";
    }
    else if (theRange > 50 && theRange <= 100) {
        theBody.style.backgroundColor = "yellow";
        theH1.innerHTML = "Level of health concern: Moderate";
        theH2.innerHTML = "Level of health effect: Acceptable quality";
    }
    else {
        theBody.style.backgroundColor = "red";
        theH1.innerHTML = "Level of health concern: Unhealthy for sensitive groups";
        theH2.innerHTML = "Level of health effect: Generable publics not likely affected";
    }
}