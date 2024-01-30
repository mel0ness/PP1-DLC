let black = [];
let red = [];
let orange = [];
let green = [];

const blackTable = document.getElementById("blackTable")
const redTable = document.getElementById("redTable")
const orangeTable = document.getElementById("orangeTable")
const greenTable = document.getElementById("greenTable")

const blackBody = document.getElementById("black")
const redBody = document.getElementById("red")
const orangeBody = document.getElementById("orange")
const greenBody = document.getElementById("green")

const loader = document.getElementById("loader")

async function getDatas() {
    try {
const response = await fetch("https://mel0ness.github.io/PP1-DLC/DLC-datas.json");
const Results = await response.json();
console.log(Results);
dateSort(Results);

sortArray(red);
sortArray(green);
sortArray(black);
sortArray(orange);

createItems(red, redBody, redTable);
createItems(black, blackBody,blackTable);
createItems(orange, orangeBody, orangeTable);
createItems(red, greenBody, greenTable);
    }
    catch (error) {
const Results = error;
console.log(Results);
    }
    }

    getDatas();

const dateSort = (e) => {
for(let i=0; i < e.length; i++) {
    dateFormat(e[i])
}
}

const dateFormat = (e) => {
    const date = e.date;
    const dateSplit = date.split("/")
    const newDate = new Date(+dateSplit[2], dateSplit[1] - 1, +dateSplit[0]);
    const today = new Date();
    const date1 = Date.parse(today);
    const date2 = Date.parse(newDate);
    const total = Math.ceil((date2 - date1) / (1000 * 3600 * 24));
    
    switch(true) {
        case (total >= 20) :
green.push(e)
        break;
        case (total < 20 && total >= 0) :
orange.push(e)
        break;
        case (total <0 && total >= -15) :
red.push(e)
        break;
        case (total < -15) :
black.push(e)
        break;
    }
}

const sortArray = (e) => {

    for(let i=0; i<e.length; i++) {
        const date = e[i].date;
        const dateSplit = date.split("/")
        const newDate = new Date(+dateSplit[2], dateSplit[1] - 1, +dateSplit[0]);
        e[i].date=newDate;
    }

e.sort((a, b) => a.date - b.date)
}

const createItems = (e, f, g) => {
if(e.length > 0) {
    for(let i=0; i < e.length; i++) {
        const dateToShow = e[i].date.toLocaleDateString("fr");
        const row = document.createElement("tr");
        row.innerHTML = ` <td colspan="3">${e[i].name}</td>
        <td>${e[i].quantity}</td>
        <td>${dateToShow}</td>`;
      f.appendChild(row);
    }
    loader.classList.add("invisible")
    g.classList.remove("invisible")
}
else {
    return;
}
    
}