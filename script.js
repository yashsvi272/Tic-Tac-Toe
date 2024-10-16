let btn3=document.querySelector("#btn3");

let currmode="Light";
btn3.addEventListener("click", ()=>{
    if(currmode==="Light"){
        currmode="Dark"
        document.querySelector("body").style.backgroundColor="black";
    } 
    else{
        currmode="Light"
        document.querySelector("body").style.backgroundColor="lightcoral";
    }
})





const boxs = document.querySelectorAll('.box');
const btn1 = document.getElementById('btn1');
let currentPlayer = 'X';
let box1 = Array(9).fill(null);
let gameActive = true;

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleboxClick(event) {
    const box = event.target;
    const index = box.getAttribute('data-index');

    if (box1[index] || !gameActive) {
        return;
    }

    box1[index] = currentPlayer;
    box.textContent = currentPlayer;

    checkResult();
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkResult() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (box1[a] && box1[a] === box1[b] && box1[a] === box1[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        alert(`Player ${currentPlayer} wins!`);
        gameActive = false;
        return;
    }

    if (!box1.includes(null)) {
        alert("It's a draw!");
        gameActive = false;
    }
}

function btn() {
    box1 = Array(9).fill(null);
    gameActive = true;
    currentPlayer = 'X';
    boxs.forEach(box => {
        box.textContent = '';
    });
}

boxs.forEach(box => box.addEventListener('click', handleboxClick));
btn1.addEventListener('click', btn);

