const sketchpad = document.querySelector('.sketchpad');
const toolbar = document.querySelector('.toolbar');

// Default behavior of the Etch-a-Sketch
let drawColor = 'black';
let sketchBackgroundColor = 'white';
let cells = [];
for (let i = 0; i < 100; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    sketchpad.appendChild(row);
    for (let i = 0; i < 100; i++) {
        let col = document.createElement('div');
        col.classList.add('column');
        col.style.border = '1px solid black';
        cells.push(col);
        row.appendChild(col);
    }
}

// Toolbar functions
let pointer = false;
let pencil = false;
let pen = false;
let feather = false;
let eraser = false;

function removeDrawType() {
    if (pencil) {
        for (let cell of cells) {
            cell.removeEventListener('click', drawlogic);
        }
        pencil = false;
    }
    else if (pen) {
        for (let cell of cells) {
            cell.removeEventListener('mouseover', drawLogic);
        }
        pen = false;
    }
}
const drawLogic = function (e) {
    e.target.style.backgroundColor = drawColor;
}
function selectPencil() {
    if (!pencil) {
        removeDrawType();
        for (let cell of cells) {
            cell.addEventListener('click', drawLogic);
        }
        pencil = true;
    } 
}

function selectPen() {
    if (!pen) {
        removeDrawType();
        for (let cell of cells) {
            cell.addEventListener('mouseover', drawLogic);
        }
        pen = true;
    }
}


// toolbar button event listeners
let penButton = document.querySelector('.pen');
penButton.addEventListener('click', function () {
    if (!pen) {
        removeDrawType();
        selectPen();
    }
});

let pencilButton = document.querySelector('.pencil');
pencilButton.addEventListener('click', function () {
    if (!pencil) {
        removeDrawType();
        selectPencil()
    }
})