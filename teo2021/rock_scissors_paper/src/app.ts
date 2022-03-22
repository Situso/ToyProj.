const content = document.querySelector(".content") as HTMLElement;
const yourscoreboard = document.querySelector(".you") as HTMLElement;
const comcoreboard = document.querySelector(".com") as HTMLElement;
const rock = document.querySelector("#rock") as HTMLImageElement;
const scissors = document.querySelector("#scissors") as HTMLImageElement;
const paper = document.querySelector("#paper") as HTMLImageElement;
const your = document.querySelector(".yourchoice") as HTMLImageElement;
const com = document.querySelector(".comchoice") as HTMLImageElement;
const resetBtn = document.querySelector(".resetBtn") as HTMLElement;

// rock 1 scissors 2 paper 3

let yourchoice: number = 0;
let comchoice: number = 1;
let yourScore: number = 0;
let comScore: number = 0;
let start: boolean = true;
let result: string = "";

yourscoreboard.innerHTML = `${yourScore}`;
comcoreboard.innerHTML = `${comScore}`;

let interval = setInterval(changeChoice, 300);

rock.addEventListener("click", choiceFunc);
scissors.addEventListener("click", choiceFunc);
paper.addEventListener("click", choiceFunc);


content.addEventListener("click", () => {
    if (!start) {
        interval = setInterval(changeChoice, 300);
        start = true;
    }
});
resetBtn.addEventListener("mouseover", (e) => {
    resetBtn.innerHTML = "Reset";
});
resetBtn.addEventListener("mouseout", () => {
    resetBtn.innerHTML = result;
});
resetBtn.addEventListener("click", () => {
    yourchoice = 0;
    yourScore = 0;
    comScore = 0;
    yourscoreboard.innerHTML = `${yourScore}`;
    comcoreboard.innerHTML = `${comScore}`;
    your.src = "";
});

function choiceFunc(e: Event) {
    const targetId = (e.target as Element).id;

    if (targetId === "rock") yourchoice = 1;
    if (targetId === "scissors") yourchoice = 2;
    if (targetId === "paper") yourchoice = 3;

    your.src = `../assets/${yourchoice}.svg`;
    if (start) {
        clearInterval(interval);
        start = false;
    }

    if (yourchoice === comchoice) {
        result = "Draw";
    } else if (
        (yourchoice === 1 && comchoice === 2) ||
        (yourchoice === 2 && comchoice === 3) ||
        (yourchoice === 3 && comchoice === 1)
    ) {
        yourScore++;
        yourscoreboard.innerHTML = `${yourScore}`;
        result = "Win!";
    } else {
        comScore++;
        comcoreboard.innerHTML = `${comScore}`;
        result = "Lose.";
    }
    resetBtn!.innerHTML = result;
}

function changeChoice() {
    comchoice = Math.floor(Math.random() * (4 - 1)) + 1;

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
