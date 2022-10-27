let brief = "<b>Brief und Postkarte</b> <br> L: 10 - 23, 5 cm <br /> B: 7 - 12, 5 cm <br /> H: bis 1 cm";

let zweiKg = "<b>DHL Paket 2 kg</b> <br> bis 60 x 30 x 15 cm";

let fuenfKg = "<b> DHL Paket 5 kg</b > <br> bis 120 x 60 x 60 cm";

let zehnKg = "<b> DHL Paket 10 kg</b> <br> bis 120 x 60 x 60 cm";

let extra = "<b>Extra große Größe</b>";



function showtxt() {

    let packet = document.querySelector("#mylist");
    console.log(packet);
    let valuePacket = Number(packet.value);
    console.log(valuePacket);

    let output = "";

    switch (valuePacket) {
        case 0:
            output = brief;
            break;
        case 1:
            output = zweiKg;
            break;
        case 2:
            output = fuenfKg;
            break;
        case 3:
            output = zehnKg;
            break;
        default:
            output = extra;
    }

    console.log(output);

    let a = document.querySelector("#masse").innerHTML = output;
    console.log(a);
}

// function showtxt() {
//     let theDivBox = document.querySelector(".boxMasse");
//     //Mach ein neues <div>
//     let newDiv = document.createElement("div");
//     //Füge als letztes Kind das neue Element hinzu
//     theDivBox.appendChild(newDiv);

//     newDiv.innerHTML = "<p>Brief und Postkarte</b> <br> L: 10 - 23,5 cm B: 7 - 12,5 cm H: bis 1 cm</p>";


//     console.log(theDivBox);
//     console.log(theDivBox.innerHTML);
// 

