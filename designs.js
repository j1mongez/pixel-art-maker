
const color = document.getElementById('colorPicker');
const table = document.getElementById('pixelCanvas');
const sizePicker = document.getElementById('sizePicker');

const height = document.getElementById('inputHeight').value;
const width = document.getElementById('inputWidth').value;
makeGrid(height, width);

sizePicker.addEventListener('click', function (event) {
    event.preventDefault();
    const height = document.getElementById('inputHeight').value;
    const width = document.getElementById('inputWidth').value;
    table.firstElementChild.remove();
    makeGrid(height, width);
});

function makeGrid(height, width) {
    for (let i = 0; i < height; i++) {
        let row = table.insertRow(i);
        for (let n = 0; n < width; n++) {
            let cell = row.insertCell(n);
            cell.addEventListener('click', function () {
                cell.style.backgroundColor = color.value;
            });
        }
    }
}
