const gridContainer = document.querySelector('.grid-squares');
const selectGridButton = document.querySelector('#gridNumber');

let squares = '';

const gridContainerSize = {
    width: gridContainer.offsetWidth,
    height: gridContainer.offsetHeight
}

createGrid(16);


function createGrid(gridSize) {
    for (let row = 0; row < gridSize; row++) {
        for (let column = 0; column < gridSize; column++) {
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

    createGrid(numberOfGrids);
}

selectGridButton.addEventListener('click', setGridNumber);