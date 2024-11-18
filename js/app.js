/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll(".sqr")
const messageEl = document.querySelector("#message")
const button = document.querySelector("#reset")
const section = document.querySelector("section")
const xTurn = document.querySelector("#xTurn")
const oTurn = document.querySelector("#oTurn")
const oWins = document.querySelector('#countOWins')
const xWins = document.querySelector('#countXWins')
const any = document.querySelector("#nn")
const mode = document.querySelector("#mode")
const imgReset = document.querySelector("img")
const body = document.querySelector("body")
const xh2 = document.querySelector(".playerx")
const oh2 = document.querySelector(".playero")
const pXName = document.querySelector("#playerXName")
const pOName = document.querySelector("#playerOName")
/*---------------------------- Variables (state) ----------------------------*/

let board = [];
let turn
let winner
let tie
let letterO = "O"
let letterX = "X"
let counX = 0
let countO = 0

/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
const init = () => {
    board = ["", "", "", "", "", "", "", "", ""]
    winner = false
    tie = false
    turn = "X"
    messageEl.textContent = ""
    oTurn.style.opacity = "0.25"
    enableBoard()
}
init()

//-----------------------------mode------------------------------
function darkmode() {
    body.classList.add("bdark");
    xh2.classList.add("h2dark");
    xh2.style.border = "3px solid white"
    xh2.style.color = "white"
    oh2.style.border = "3px solid white"
    oh2.style.color = "white"
    oh2.classList.add("h2dark");
    pXName.style.color = "white"
    pOName.style.color = "white"
    squareEls.forEach((element) => {
        if (element.textContent === "X") {
            element.style.color = "#a5c1df";
        } else if (element.textContent === "O") {
            element.style.color = "white";
        }
    });
}
function lightmode() {
    body.classList.remove("bdark");
    xh2.classList.remove("h2dark");
    xh2.style.border = "3px solid #071330"
    xh2.style.color = "#071330"
    oh2.style.border = "3px solid #071330"
    oh2.style.color = "#071330"
    pXName.style.color = "#071330"
    pOName.style.color = "#071330"
    oh2.classList.remove("h2dark");
    squareEls.forEach((element) => {
        if (element.textContent === "X") {
            element.style.color = "#071330";
        } else if (element.textContent === "O") {
            element.style.color = "#C3CEDA";
        }
    });
}

mode.addEventListener("click", () => {
    console.log("Button clicked, current mode: " + mode.textContent);
    if (mode.textContent === "Dark Mode") {
        darkmode();
        mode.textContent = "Light Mode";
    } else {
        lightmode();
        mode.textContent = "Dark Mode";
    }
});

//------------------------input------------------------------------
function handleEnter(event, inputId, nameId, defaultName) {
    if (event.key === 'Enter') {
        const inputField = document.getElementById(inputId);
        const nameContainer = document.getElementById(nameId);
        
       
        if (inputField.value.trim() === "") {
            nameContainer.textContent = `${defaultName}`;
        } else {
           
            nameContainer.textContent = `${inputField.value}`;
        }
        inputField.style.display = 'none';
    }
}

squareEls.forEach((element) => {
    element.addEventListener("click", (event) => {
       
       
        if (element.textContent === "") {
            element.textContent = turn;
            board[event.target.id] = turn;

            checkGame()
            if (turn === "X") {
                if (mode.textContent === "Light Mode") {
                    element.style.color = "#a5c1df";
                }
                else {
                    element.style.color = "#071330"
                }
                turn = "O"
                xTurn.style.opacity = "0.25"
                oTurn.style.opacity = "1"

            }
            else {
                if (mode.textContent === "Light Mode") {
                    element.style.color = "white";
                }
                else {
                    element.style.color = "#C3CEDA"
                }
                turn = "X"
                oTurn.style.opacity = "0.25"
                xTurn.style.opacity = "1"
            }
        }

    })
})
function render() {
    init();
    squareEls.forEach((squareEl) => {
        squareEl.textContent = ""
        messageEl.textContent = ""
        squareEl.style.color = "";
        squareEl.classList.remove("win");
    })
}
function win(x, y, z) {
    const squareElsArr = [...squareEls];
    squareElsArr[x].classList.add("win");
    squareElsArr[y].classList.add("win");
    squareElsArr[z].classList.add("win");
}

function restart() {
    render()
    counX = 0
    countO = 0
    xWins.textContent = "0"
    oWins.textContent = "0"
}

function disableBoard() {
    squareEls.forEach((element) => {
        element.style.pointerEvents = "none";
    });
}

function enableBoard() {
    squareEls.forEach((element) => {
        element.style.pointerEvents = "auto";
    });
}


button.addEventListener("click", restart)
imgReset.addEventListener("click", render)

function checkGame() {
    console.log(board)
    if (board[0] === board[1] && board[1] === board[2] && board[0] !== "") {
        messageEl.textContent = `${turn} wins`;
        if (turn === "X") {
            counX += 1
            xWins.textContent = counX.toString()

        }
        else {
            countO += 1
            oWins.textContent = countO.toString()

        }
        win(0, 1, 2)
        messageEl.classList.add("message");
    } else if (board[3] === board[4] && board[4] === board[5] && board[3] !== "") {
        messageEl.textContent = `${turn} wins`;
        if (turn === "X") {
            counX += 1
            xWins.textContent = counX.toString()

        }
        else {
            countO += 1
            oWins.textContent = countO.toString()

        }
        win(3, 4, 5);
        messageEl.classList.add("message");
    } else if (board[6] === board[7] && board[7] === board[8] && board[6] !== "") {
        messageEl.textContent = `${turn} wins`;
        if (turn === "X") {
            counX += 1
            xWins.textContent = counX.toString()

        }
        else {
            countO += 1
            oWins.textContent = countO.toString()

        }
        win(6, 7, 8);
        messageEl.classList.add("message");
    } else if (board[0] === board[3] && board[3] === board[6] && board[0] !== "") {
        messageEl.textContent = `${turn} wins`;
        if (turn === "X") {
            counX += 1
            xWins.textContent = counX.toString()

        }
        else {
            countO += 1
            oWins.textContent = countO.toString()

        }
        win(0, 3, 6);
        messageEl.classList.add("message");
    } else if (board[1] === board[4] && board[4] === board[7] && board[1] !== "") {
        messageEl.textContent = `${turn} wins`;
        if (turn === "X") {
            counX += 1
            xWins.textContent = counX.toString()

        }
        else {
            countO += 1
            oWins.textContent = countO.toString()

        }
        win(1, 4, 7);
        messageEl.classList.add("message");
    } else if (board[2] === board[5] && board[5] === board[8] && board[2] !== "") {
        messageEl.textContent = `${turn} wins`;
        if (turn === "X") {
            counX += 1
            xWins.textContent = counX.toString()

        }
        else {
            countO += 1
            oWins.textContent = countO.toString()

        }
        win(2, 5, 8);
        messageEl.classList.add("message");
    } else if (board[0] === board[4] && board[4] === board[8] && board[0] !== "") {
        messageEl.textContent = `${turn} wins`;
        if (turn === "X") {
            counX += 1
            xWins.textContent = counX.toString()

        }
        else {
            countO += 1
            oWins.textContent = countO.toString()

        }
        win(0, 4, 8);
        messageEl.classList.add("message");
    } else if (board[2] === board[4] && board[4] === board[6] && board[2] !== "") {
        messageEl.textContent = `${turn} wins`;
        if (turn === "X") {
            counX += 1
            xWins.textContent = counX.toString()

        }
        else {
            countO += 1
            oWins.textContent = countO.toString()

        }
        win(2, 4, 6);
        messageEl.classList.add("message");
    } else if (board.every(cell => cell !== "")) {
        messageEl.textContent = "It's a tie!";
        messageEl.classList.add("message");
    }
    if (messageEl.textContent !== "") {
        disableBoard()
    }
}


