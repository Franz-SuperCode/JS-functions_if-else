let theBody = document.querySelector("body");
let inputRed = document.querySelector("#red");
let inputBlue = document.querySelector("#blue");
let inputGreen = document.querySelector("#green");






function changeBackgroundColor() {
    let red = inputRed.value;
    let blue = inputBlue.value;
    let green = inputGreen.value;

    let color = `rgb(${red}, ${green}, ${blue})`;

    theBody.style.backgroundColor = color;
}