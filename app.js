let boxes = document.querySelectorAll(".box");
let resbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true; //x or y

const winCombo = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [0, 4, 8],
    [2, 4, 6],
    [2, 5, 8],
];

const resetGame = () => {
    turn0 = true;
    enabledBtn();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box was clicked");
        if (turn0) {
            box.innerText = "X";
            turn0 = false;
        } else {
            box.innerText = "O";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disabledBtn = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};
const enabledBtn = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulation , Winner is ${winner} `;
    msgContainer.classList.remove("hide");
    disabledBtn();
};

const checkWinner = () => {
    for (combo of winCombo) {
        let pos1Val = boxes[combo[0]].innerText;
        let pos2Val = boxes[combo[1]].innerText;
        let pos3Val = boxes[combo[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("winner", pos1Val);
                showWinner(pos3Val);
            }
        }
    }
};

newGamebtn.addEventListener("click", resetGame);
resbtn.addEventListener("click", resetGame);
