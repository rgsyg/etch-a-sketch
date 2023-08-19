const gridContainer = document.querySelector('.grid-squares');
const selectGridButton = document.querySelector('#gridNumber');
const colorPicker = document.querySelector('#color');
const randomizeButton = document.querySelector('#randomizeColor');
const randomizeExit = document.querySelector('#exit');
const darkenCheckbox = document.querySelector('#darkEffect');

let color;
let darkness;
let isRandomized = false;
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

    setColor();
}

function randomizeColor(random = true) {
    isRandomized = random;
    setColor();
    
    if (random) {
        randomizeExit.classList.add('active');
    } else {
        randomizeExit.classList.remove('active');
    }
}

function setColor() {
    darkness = 1;
    color = colorPicker.value;
    squares = document.querySelectorAll('.square');

    if (isRandomized) {
        color = `hsl(${~~(Math.random() * 255)}, 100%, 50%)`;   
    }
    
    squares.forEach((square) => square.addEventListener('mouseenter', () => 
        square.style.backgroundColor = color
    ));
}

function setColorOnPick() {
    darkness = 1;
    color = this.value || colorPicker.value;

    squares.forEach((square) => square.addEventListener('mouseenter', () => 
        square.style.backgroundColor = color
    ));
}

function setGridNumber() {
    let numberOfGrids = '';

    do {
        numberOfGrids = +prompt('Enter number of grids (1-100): ');
        if (numberOfGrids === 0) return;
    } while (numberOfGrids > 100 || isNaN(numberOfGrids));

    const squares = document.querySelectorAll('.square');
    const breaks = document.querySelectorAll('.break');

    squares.forEach((square) => square.remove());
    breaks.forEach((divBreak) => divBreak.remove());

    createGrid(numberOfGrids);
}

function darkenPixel(e) {
    darkness = 1;
    if (e.target.checked) {
        squares.forEach((square) => square.addEventListener('mouseenter', () => {
            if (darkness < 0.1) {
                darkness = 0;
            } else {
                darkness -= 0.1;
            }
            console.log(darkness);
            square.style.filter = `brightness(${darkness})`;
        }))
    }
    else {
        darkness = 1;
        squares.forEach((square) => square.addEventListener('mouseenter', () => square.style.filter = `brightness(1)`));
    }
}

selectGridButton.addEventListener('click', setGridNumber);
colorPicker.addEventListener('change', setColorOnPick);
randomizeButton.addEventListener('click', randomizeColor);
randomizeExit.addEventListener('click', randomizeColor.bind('', false));
darkenCheckbox.addEventListener('change', darkenPixel);