// generate random number buat player 1 antara 1-6
let randomNum1 = Math.floor (Math.random() * 6) +1;
console.log(randomNum1);

// mengambil image based on hasil generate random
var randomDiceImg = "dice" + randomNum1 +".png";

const randomImgSource = `images/${randomDiceImg}`;

// set random image source based on random number
// document.querySelector("img")[0];

let img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src",randomImgSource);


// generate random number buat player 1 antara 1-6
let randomNum2 = Math.floor(Math.random() * 6) + 1;

// mengambil image based on hasil generate random
let randomDiceImg2 = "dice" + randomNum2 + ".png";

let randomImgSource2 = `images/${randomDiceImg2}`;

let img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImgSource2);

if (randomNum1 > randomNum2){
    document.querySelector("h1").innerHTML ="Player 1 Win";
}else if (randomNum2 > randomNum1){
    document.querySelector("h1").innerHTML ="Player 2 Win";
} else {
    document.querySelector("h1").innerHTML ="Draw";
}