const gridContainer = document.querySelector('.grid-squares');

const gridContainerSize = {
    width: gridContainer.offsetWidth,
    height: gridContainer.offsetHeight
}

for (let i = 0; i < 16; i++) {
    for (let j = 0; j < 16; j++) {
        const gridSquare = document.createElement('div');
        gridSquare.style.width = gridContainerSize.width / 16 + 'px';
        gridSquare.style.height = gridContainerSize.height / 16 + 'px';
        gridSquare.style.border = '1px solid black';
        gridSquare.style.flex = 1;
        gridSquare.classList.add('square');
        gridContainer.appendChild(gridSquare);
    }
    const breakDiv = document.createElement('div');
    breakDiv.classList.add('break');
    gridContainer.appendChild(breakDiv)
}

const squares = document.querySelectorAll('.square');

function setColor() {
    this.style.backgroundColor = 'blue';
}

squares.forEach((square) => square.addEventListener('mouseenter', setColor));