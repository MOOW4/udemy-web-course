let randomNumber1 = Math.floor(Math.random() * 6) + 1;

let dice_1 = "images/dice" + randomNumber1 + ".png";

document.querySelector(".img1").setAttribute("src", dice_1);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let dice_2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", dice_2);

if(randomNumber1 === randomNumber2){
    document.querySelector("h1").textContent = "Tie !";
}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").textContent = "Player 1 Wins !";
}
else{
    document.querySelector("h1").textContent = "Player 2 Wins !";
}