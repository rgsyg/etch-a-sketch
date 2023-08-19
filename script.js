const gridContainer = document.querySelector('.grid-squares');
const selectGridButton = document.querySelector('#gridNumber');

let squares = '';

let [row, column, gridSize] = [16, 16, 16];

const gridContainerSize = {
    width: gridContainer.offsetWidth,
    height: gridContainer.offsetHeight
}

createGrid(16, 16, 16);


function createGrid(row, column, gridSize) {
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.style.width = gridContainerSize.width / gridSize + 'px';
            gridSquare.style.height = gridContainerSize.height / gridSize + 'px';
            gridSquare.style.border = '1px solid black';
            gridSquare.style.flex = 1;
            gridSquare.classList.add('square');
            gridContainer.appendChild(gridSquare);
        }
        const breakDiv = document.createElement('div');
        breakDiv.classList.add('break');
        gridContainer.appendChild(breakDiv)
    }
    squares = document.querySelectorAll('.square');
    squares.forEach((square) => square.addEventListener('mouseenter', setColor));
}

function setColor() {
    this.style.backgroundColor = 'blue';
}

function setGridNumber() {
    let numberOfGrids = '';

    do {
        numberOfGrids = +prompt('Enter number of grids (1-100): ');
    } while (numberOfGrids < 1 || numberOfGrids > 100);

    const squares = document.querySelectorAll('.square');
    const breaks = document.querySelectorAll('.break');

    squares.forEach((square) => square.remove());
    breaks.forEach((divBreak) => divBreak.remove());

    createGrid(numberOfGrids, numberOfGrids, numberOfGrids);
}

selectGridButton.addEventListener('click', setGridNumber);