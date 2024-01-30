let black = [];
let red = [];
let orange = [];
let green = [];

async function getDatas() {
    try {
const response = await fetch("https://mel0ness.github.io/PP1-DLC/DLC-datas.json");
const Results = await response.json();
console.log(Results);
    }
    catch (error) {
const Results = error;
console.log(Results);
    }
    }

    getDatas();