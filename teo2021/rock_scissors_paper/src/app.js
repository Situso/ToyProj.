// const choiceObj = {
//     rock :
// }
var content = document.querySelector(".content");
var yourscoreboard = document.querySelector(".you");
var comcoreboard = document.querySelector(".com");
var rock = document.querySelector("#rock");
var scissors = document.querySelector("#scissors");
var paper = document.querySelector("#paper");
var your = document.querySelector(".yourchoice");
var com = document.querySelector(".comchoice");
var resetBtn = document.querySelector(".resetBtn");
// rock 1 scissors 2 paper 3
var yourchoice = 0;
var comchoice = 1;
var yourScore = 0;
var comScore = 0;
var start = true;
var result = "";
yourscoreboard.innerHTML = "".concat(yourScore);
comcoreboard.innerHTML = "".concat(comScore);
var interval = setInterval(changeChoice, 300);
rock.addEventListener("click", choiceFunc);
scissors.addEventListener("click", choiceFunc);
paper.addEventListener("click", choiceFunc);
content.addEventListener("click", function () {
    if (!start) {
        interval = setInterval(changeChoice, 300);
        start = true;
    }
});
resetBtn.addEventListener("mouseover", function (e) {
    resetBtn.innerHTML = "Reset";
});
resetBtn.addEventListener("mouseout", function () {
    resetBtn.innerHTML = result;
});
resetBtn.addEventListener("click", function () {
    yourchoice = 0;
    yourScore = 0;
    comScore = 0;
    yourscoreboard.innerHTML = "".concat(yourScore);
    comcoreboard.innerHTML = "".concat(comScore);
    your.src = "";
});
function choiceFunc(e) {
    var targetId = e.target.id;
    if (targetId === "rock")
        yourchoice = 1;
    if (targetId === "scissors")
        yourchoice = 2;
    if (targetId === "paper")
        yourchoice = 3;
    your.src = "../assets/".concat(yourchoice, ".svg");
    if (start) {
        clearInterval(interval);
        start = false;
    }
    if (yourchoice === comchoice) {
        result = "Draw";
    }
    else if ((yourchoice === 1 && comchoice === 2) ||
        (yourchoice === 2 && comchoice === 3) ||
        (yourchoice === 3 && comchoice === 1)) {
        yourScore++;
        yourscoreboard.innerHTML = "".concat(yourScore);
        result = "Win!";
    }
    else {
        comScore++;
        comcoreboard.innerHTML = "".concat(comScore);
        result = "Lose.";
    }
    resetBtn.innerHTML = result;
}
function changeChoice() {
    comchoice = Math.floor(Math.random() * (4 - 1)) + 1;
    console.log(comchoice);
    switch (comchoice) {
        case 1:
            com.src = "../assets/1.svg";
            break;
        case 2:
            com.src = "../assets/2.svg";
            break;
        case 3:
            com.src = "../assets/3.svg";
            break;
    }
}
