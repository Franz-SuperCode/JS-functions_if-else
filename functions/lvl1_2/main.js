function changeColor() {

    let getInputValue = document.querySelector("#eingabe").value;
    console.log(getInputValue);

    let getTheBody = document.querySelector("body");
    console.log(getTheBody);
    getTheBody.style.backgroundColor = getInputValue;
}

