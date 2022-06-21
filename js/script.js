const sketchpad = document.querySelector('.sketchpad');
const toolbar = document.querySelector('.toolbar');
let color = 'black';
let cells = [];
for (let i = 0; i < 100; i++) {
    let row = document.createElement('div');
    row.classList.add('row');
    cells.push(row);
    sketchpad.appendChild(row);
    for (let i = 0; i < 100; i++) {
        let col = document.createElement('div');
        col.classList.add('column');
        col.style.border = '1px solid black';
        col.addEventListener('mouseover', () => col.style.backgroundColor = color);
        cells.push(col);
        row.appendChild(col);
    }
}
function remove() {
    for (cell of cells) {
        cell.style.backgroundColor = 'white';
    }
}
function changeColor(cell) {
    cell.addEventListener('mouseover', cell.style.backgroundColor = color);
}