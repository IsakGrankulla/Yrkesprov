const pTag1 = document.getElementById("p1");
const pTag2 = document.getElementById("p2");
const pTag3 = document.getElementById("p3");
const pTag4 = document.getElementById("p4");
const pTag5 = document.getElementById("p5");
const pTag6 = document.getElementById("p6");


function input1Clicked(event) {
    
    pTag1.innerHTML = (Math.round(input1.value));
}

function input2Clicked(event) {
    pTag2.innerHTML = (Math.ceil(input2.value));
}

function input3Clicked(event) {
    pTag3.innerHTML = (Math.floor(input3.value));
}


function input4Clicked(event) {
    pTag4.innerHTML = (Math.min(input4.value , input4V2.value));
}

function input5Clicked(event) {
    pTag5.innerHTML = (Math.max(input5.value , input5V2.value));
}

function input6Clicked(event) {
    pTag6.innerHTML = (Math.abs(input6.value));
}


