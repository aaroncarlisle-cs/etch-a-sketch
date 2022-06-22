// Default behavior of the Etch-a-Sketch on start
const cells = [];
const sketchpad = document.querySelector('.sketchpad');
let mousedown = false;
let drawColor = 'black';
let gridColor = 'white';
document.body.addEventListener('mousedown', () => mousedown = true);
document.body.addEventListener('mouseup', () => mousedown = false);

newGrid(16);

function newGrid(size) {
    cells.length = 0;
    sketchpad.innerHTML = "";
    buildGrid(size);
    gridEvents();
}
// Can time complexity be reduced with CSS grid?
function buildGrid(size) {
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div');
        row.classList.add('row');
        row.setAttribute('draggable', 'false');
        sketchpad.appendChild(row);
        for (let i = 0; i < size; i++) {
            let col = document.createElement('div');
            col.classList.add('column');
            col.setAttribute('draggable', 'false');
            col.style.border = '1px solid grey';
            cells.push(col);
            row.appendChild(col);
        }
    }
}

function gridEvents() {
    for (let cell of cells) {
        cell.addEventListener('mouseover', (evt) => drawLogic(evt, cell));
        cell.addEventListener('mousedown', (evt) => drawLogic(evt, cell));
    }
}

function drawLogic(evt, cell) {
    if (pencil || eraser) {
        if (mousedown) getColor(cell);  
        if (evt.type == 'mousedown') getColor(cell);
    }
    else if (pen) getColor(cell);
}

function getColor(cell) {
    if (feather) {
        let first = 'rgb(217, 217, 217)';
        let second = 'rgb(179, 179, 179)';
        let third = 'rgb(140, 140, 140)';
        let fourth = 'rgb(89, 89, 89)';
        let fifth = 'rgb(51, 51, 51)';
        let sixth = 'rgb(26, 26, 26)';
        let seventh = 'rgb(0, 0, 0)';
        console.log(cell.style.backgroundColor);
        let color = cell.style.backgroundColor;
        switch (color) {
            case fifth: 
                break;
            case fourth: 
                cell.style.backgroundColor = fifth;
                break;
            case third:
                cell.style.backgroundColor = fourth;
                break;
            case second:
                cell.style.backgroundColor = third;
                break;
            case first:
                cell.style.backgroundColor = second;
                break;
            default:
                cell.style.backgroundColor = first;
        }
        // if (color == fifth) {
        //     return;
        // }
        // else if (color == fourth) {
        //     cell.style.backgroundColor = fifth;
        // }
        // else cell.style.backgroundColor = fourth;
    }
    else cell.style.backgroundColor = drawColor;
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
    newGrid(prompt('Input grid size'));
}
function setFeather() {
    if (feather) feather = false;
    else feather = true;
}
function setColor() {

}
function clearGrid() {
    for (let cell of cells) {
        if (eraser) cell.style.backgroundColor = drawColor;
        else cell.style.backgroundColor = gridColor;
    }
}