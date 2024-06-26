let color = "black";
let toggle = false;

function setupBoard(size) {
    let board = document.querySelector(".board");
    board.innerHTML = ''; //clears existing squares
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    let amount = size * size;

    for (let i = 0; i < amount; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare)
        square.style.backgroundColor = "lightgrey";
        board.insertAdjacentElement("beforeend", square)
    }
}

setupBoard(16);

function changeSize(input) {
    if (input >= 2 && input <= 100){
        setupBoard(input);
    } else {
        console.log("error");
    }
}

function colorSquare(){

    if (toggle) {
        if (color === "random") {
            this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

        } else {
            this.style.backgroundColor = color;
        }
    }
}

function changeColor(choice){
color = choice;
}

function resetBoard(){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach(square => {
        square.removeEventListener("mouseover", colorSquare);
    });
    board.innerHTML = ''; //clears existing squares
    setupBoard(16);
}

document.querySelector(".board").addEventListener(`click`, () =>{
    toggle = !toggle;
})