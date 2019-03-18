// Select color input
const colorPicker = document.getElementById('colorPicker');

// Select size input
const sizePicker = document.getElementById('sizePicker');

// When size is submitted by the user, call makeGrid()
function makeGrid() {
  const width = document.getElementById('inputWidth').value;
  const height = document.getElementById('inputHeight').value;
  const canvas = document.getElementById('pixelCanvas');
  canvas.innerHTML = '';


//creates a brand new table element and adds to the last child
  for (let column = 0; column < height; column++) {
    let row = document.querySelector("#pixelCanvas").insertRow();
    for (let r = 0; r< width; r++){
      row.insertCell();
    }
  }

// Add color to selected cell
  canvas.addEventListener('click', function(event) {
    let color = colorPicker.value;
    console.log("Color:", color);
    event.target.style.backgroundColor = color;
  });
};



sizePicker.addEventListener('submit', function(event) {
  event.preventDefault();
  makeGrid();
});
