let buttonColours = ["red","blue", "green", "yellow"];
let gamePattern = [];
let userClickedPattern = [];
let level = 0;
let calls = 0;


function nextSequence(){
    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    level++;
    $("h1").text("Level " + level);
}

// CLICK
$(".btn").click(function(event){
    let userChosencolour = event.target.id; // or var userChosenColour = $(this).attr("id");
    //console.log(event.target.id);
    userClickedPattern.push(userChosencolour);
    playSound(userChosencolour);
    animatePress(userChosencolour);
    checkAnswer(level);
});

$(document).keydown(function(event){
    if(level === 0){
        nextSequence();
    }
});


function checkAnswer(currentLevel) {
    console.log(calls, currentLevel);
    console.log(gamePattern);
    console.log(userClickedPattern);
    
    if(gamePattern[calls] != userClickedPattern[calls]){
        console.log("Wrong!");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart");
        startOver();
    }
    else{
        console.log("Succes");
    }

    if(calls == currentLevel-1){
        setTimeout(function() {
            nextSequence();
            userClickedPattern = [];
        }, 1000);
        calls = 0;
    }
    else{
        calls++;
    }

}

function startOver(){
    calls = -1;
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#" + currentColour).addClass("pressed");

    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
}