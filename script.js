const pTag1 = document.getElementById("p1");
const pTag2 = document.getElementById("p2");
const pTag3 = document.getElementById("p3");
const pTag4 = document.getElementById("p4");
const pTag5 = document.getElementById("p5");
const pTag6 = document.getElementById("p6");

form.addEventListener('submit', onButtonClicked);

function onButtonClicked(event) {
    event.preventDefault();
    pTag1.innerHTML = (Math.round(input1.value));
    pTag2.innerHTML = (Math.ceil(input2.value));
    pTag3.innerHTML = (Math.floor(input3.value));
    pTag4.innerHTML = (Math.min(input4.value , input4V2.value));
    pTag5.innerHTML = (Math.max(input5.value , input5V2.value));
    pTag6.innerHTML = (Math.abs(input6.value));
}
