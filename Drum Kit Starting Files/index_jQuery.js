
let buttons = $(".drum");

/* for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", handleClick);
} */
$(".drum").click(handleClick);

//! CLICK
function handleClick() {
    /* var audio = new Audio("sounds/kick-bass.mp3");
    audio.play();*/


    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);


/*     this.style.color = "red";
    let housekeeper1 = new DishWasher ("Bitch", 5, ["cock", "ass"]);
    
    alert(housekeeper.name); */

}

// !KEYBOARD PRESS
/* document.addEventListener("keydown", function(event) {

    makeSound(event.key);

    buttonAnimation(event.key);

});  */

$(document).keydown(function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});


function DishWasher (name, age, experience){ // Contructor function
    this.name = name;
    this.age = age;
    this.experience = experience;
    this.clean = function() {
        alert("cleaning in progress...");
    }
}

function makeSound (key) {

    switch (key) {
        case 'd':
            let tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'j':
            let tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 'k':
            let tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'l':
            let tom4 = new Audio ("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 's':
            let snare = new Audio ("sounds/snare.mp3");
            snare.play();
            break;
        case 'w':
            let crash = new Audio ("sounds/crash.mp3");
            crash.play();
            break;
        case 'a':
            let kick = new Audio ("sounds/kick-bass.mp3");
            kick.play();
            break;
        default:
            console.log("Bing Chilling");
            break;
    }

}

function buttonAnimation(currentKey){

    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}