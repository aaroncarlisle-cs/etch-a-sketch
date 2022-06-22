// Default behavior of the Etch-a-Sketch on start
const sketchpad = document.querySelector('.sketchpad');
document.body.addEventListener('mousedown', () => click = true);
document.body.addEventListener('mouseup', () => click = false);
const cells = [];
let drawColor = 'black';
let gridColor = 'white';
let click = false;

newGrid(16);

function newGrid(size) {
    cells.length = 0;
    sketchpad.innerHTML = "";
    buildGrid(size);
    attachEvents(cells);
}
// Can time complexity be reduced with CSS grid?
function buildGrid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        sketchpad.appendChild(row);
        for (let i = 0; i < size; i++) {
            let col = document.createElement('div');
            col.classList.add('column');
            col.style.border = '1px solid black';
            cells.push(col);
            row.appendChild(col);
        }
    }
}

function attachEvents(cells) {
    for (let cell of cells) {
        cell.addEventListener('mouseover', function () {
            drawLogic(cell);
        });
    }
}

function drawLogic(cell) {
    if (pencil || eraser) {
        if (click) cell.style.backgroundColor = drawColor;
    }
    else if (pen) cell.style.backgroundColor = drawColor;
}
// Toolbar booleans
let pencil = false;
let pen = false;
let resize = false;
let feather = false;
let palette = false;
let eraser = false;
let clear = false;

// Toolbar buttons
const pencilBtn = document.getElementById('pencil');
const penBtn = document.getElementById('pen');
const resizeBtn = document.getElementById('resize');
const featherBtn = document.getElementById('feather');
const paletteBtn = document.getElementById('palette');
const eraserBtn = document.getElementById('eraser');
const clearBtn = document.getElementById('clear');

// Toolbar event listeners
pencilBtn.addEventListener('click', setPencil);
penBtn.addEventListener('click', setPen);
resizeBtn.addEventListener('click', resizeGrid);
featherBtn.addEventListener('click', setFeather);
paletteBtn.addEventListener('click', setColor);
eraserBtn.addEventListener('click', setEraser);
clearBtn.addEventListener('click', clearGrid);

function setPencil() {
    if (!pencil) {
        if (eraser) colorSwap();
        resetInputs();
        pencilBtn.classList.toggle('selected');
        pencil = true;
    }
}
function setPen() {
    if (!pen) {
        if (eraser) colorSwap();
        resetInputs();
        penBtn.classList.toggle('selected');
        pen = true;
    }
}
function setEraser() {
    if (!eraser) {
        colorSwap();
        resetInputs();
        eraserBtn.classList.toggle('selected');
        eraser = true;
    }
}
function colorSwap() {
    let swap = drawColor;
    drawColor = gridColor;
    gridColor = swap;
}
function resetInputs() {
    pencil = false;
    pen = false;
    eraser = false;
    pencilBtn.classList.remove('selected');
    penBtn.classList.remove('selected');
    eraserBtn.classList.remove('selected');
}

function resizeGrid() {

}
function setFeather() {

}
function setColor() {

}
function clearGrid() {

}