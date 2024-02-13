let currentMode = "player1";
let box1Flag = true;
let box1 = document.querySelector("#box1");
let h2 = document.querySelector("h2");
let count = 0;

box1.addEventListener("click", () => {
    if(currentMode === "player1" && box1Flag === true)
    {
        box1.classList.add("X");
        currentMode = "player2";
        h2.innerText = "Player 2";
        box1Flag = false;
        count++;
        calc(1,1);
    }
    if(currentMode === "player2" && box1Flag === true)
    {
        box1.classList.add("O");
        currentMode = "player1";
        h2.innerText = "Player 1";
        box1Flag = false;
        count++;
        calc(1,0);
    }
});

let box2 = document.querySelector("#box2");
let box2Flag = true;
box2.addEventListener("click", () => {
    if(currentMode === "player1" && box2Flag === true)
    {
        box2.classList.add("X");
        currentMode = "player2";
        h2.innerText = "Player 2";
        box2Flag = false;
        count++;
        calc(2,1);
    }
    if(currentMode === "player2" && box2Flag === true)
    {
        box2.classList.add("O");
        currentMode = "player1";
        h2.innerText = "Player 1";
        box2Flag = false;
        count++;
        calc(2,0);
    }
});

let box3 = document.querySelector("#box3");
let box3Flag = true;
box3.addEventListener("click", () => {
    if(currentMode === "player1" && box3Flag === true)
    {
        box3.classList.add("X");
        currentMode = "player2";
        h2.innerText = "Player 2";
        box3Flag = false;
        count++;
        calc(3,1);
    }
    if(currentMode === "player2" && box3Flag === true)
    {
        box3.classList.add("O");
        currentMode = "player1";
        h2.innerText = "Player 1";
        box3Flag = false;
        count++;
        calc(3,0);
    }
});

let box4 = document.querySelector("#box4");
let box4Flag = true;
box4.addEventListener("click", () => {
    if(currentMode === "player1" && box4Flag === true)
    {
        box4.classList.add("X");
        currentMode = "player2";
        h2.innerText = "Player 2";
        box4Flag = false;
        count++;
        calc(4,1);
    }
    if(currentMode === "player2" && box4Flag === true)
    {
        box4.classList.add("O");
        currentMode = "player1";
        h2.innerText = "Player 1";
        box4Flag = false;
        count++;
        calc(4,0);
    }
});

let box5 = document.querySelector("#box5");
let box5Flag = true;
box5.addEventListener("click", () => {
    if(currentMode === "player1" && box5Flag === true)
    {
        box5.classList.add("X");
        currentMode = "player2";
        h2.innerText = "Player 2";
        box5Flag = false;
        count++;
        calc(5,1);
    }
    if(currentMode === "player2" && box5Flag === true)
    {
        box5.classList.add("O");
        currentMode = "player1";
        h2.innerText = "Player 1";
        box5Flag = false;
        count++;
        calc(5,0);
    }
});

let box6 = document.querySelector("#box6");
let box6Flag = true;
box6.addEventListener("click", () => {
    if(currentMode === "player1" && box6Flag === true)
    {
        box6.classList.add("X");
        currentMode = "player2";
        h2.innerText = "Player 2";
        box6Flag = false;
        count++;
        calc(6,1);
    }
    if(currentMode === "player2" && box6Flag === true)
    {
        box6.classList.add("O");
        currentMode = "player1";
        h2.innerText = "Player 1";
        box6Flag = false;
        count++;
        calc(6,0);
    }
});

let box7 = document.querySelector("#box7");
let box7Flag = true;
box7.addEventListener("click", () => {
    if(currentMode === "player1" && box7Flag === true)
    {
        box7.classList.add("X");
        currentMode = "player2";
        h2.innerText = "Player 2";
        box7Flag = false;
        count++;
        calc(7,1);
    }
    if(currentMode === "player2" && box7Flag === true)
    {
        box7.classList.add("O");
        currentMode = "player1";
        h2.innerText = "Player 1";
        box7Flag = false;
        count++;
        calc(7,0);
    }
});

let box8 = document.querySelector("#box8");
let box8Flag = true;
box8.addEventListener("click", () => {
    if(currentMode === "player1" && box8Flag === true)
    {
        box8.classList.add("X");
        currentMode = "player2";
        h2.innerText = "Player 2";
        box8Flag = false;
        count++;
        calc(8,1);
    }
    if(currentMode === "player2" && box8Flag === true)
    {
        box8.classList.add("O");
        currentMode = "player1";
        h2.innerText = "Player 1";
        box8Flag = false;
        count++;
        calc(8,0);
    }
});

let box9 = document.querySelector("#box9");
let box9Flag = true;
box9.addEventListener("click", () => {
    if(currentMode === "player1" && box9Flag === true)
    {
        box9.classList.add("X");
        currentMode = "player2";
        h2.innerText = "Player 2";
        box9Flag = false;
        count++;
        calc(9,1);
    }
    if(currentMode === "player2" && box9Flag === true)
    {
        box9.classList.add("O");
        currentMode = "player1";
        h2.innerText = "Player 1";
        box9Flag = false;
        count++;
        calc(9,0);
    }
});

let arr = [];
function calc(box,type){
    arr[box] = type;
    check();
}

function check(){
    if(count==9)
    {
        currentMode = "tie";
        h2.innerText = "!!!--TIE--!!!";
        h2.style.color = "blue";
        document.querySelector("#but").style.visibility = "visible";
    }

    if(currentMode==="player2") //checking for player 1
    {
        if( arr[1] === arr[2] && arr[2] === arr[3] && arr[1] === 1 ||
            arr[1] === arr[4] && arr[4] === arr[7] && arr[1] === 1 ||
            arr[1] === arr[5] && arr[5] === arr[9] && arr[1] === 1 ||
            arr[5] === arr[2] && arr[5] === arr[8] && arr[5] === 1 ||
            arr[5] === arr[4] && arr[5] === arr[6] && arr[5] === 1 ||
            arr[9] === arr[8] && arr[9] === arr[7] && arr[9] === 1 ||
            arr[9] === arr[6] && arr[9] === arr[3] && arr[9] === 1 ||
            arr[7] === arr[5] && arr[7] === arr[3] && arr[7] === 1)  
        {
            currentMode = "player1wins";
            h2.innerText = "!!!--PLAYER 1 WINS--!!!";
            h2.style.color = "blue";
            document.querySelector("#but").style.visibility = "visible";
        }
    }

    if(currentMode==="player1") //checking for player 2
    {
        if( arr[1] === arr[2] && arr[2] === arr[3] && arr[1] === 0 ||
            arr[1] === arr[4] && arr[4] === arr[7] && arr[1] === 0 ||
            arr[1] === arr[5] && arr[5] === arr[9] && arr[1] === 0 ||
            arr[5] === arr[2] && arr[5] === arr[8] && arr[5] === 0 ||
            arr[5] === arr[4] && arr[5] === arr[6] && arr[5] === 0 ||
            arr[9] === arr[8] && arr[9] === arr[7] && arr[9] === 0 ||
            arr[9] === arr[6] && arr[9] === arr[3] && arr[9] === 0 ||
            arr[7] === arr[5] && arr[7] === arr[3] && arr[7] === 0)
        {
            currentMode = "player2wins";
            h2.innerText = "!!!--PLAYER 2 WINS--!!!";
            h2.style.color = "blue";
            document.querySelector("#but").style.visibility = "visible";
        }
    }
}

let res = document.querySelector("#res");
res.addEventListener("click", () =>{
    document.querySelector("#tic").reset();
});



