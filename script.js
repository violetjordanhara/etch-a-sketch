const container = document.getElementById("container");
let rows = prompt('please enter the number of rows you wish to see', '16')
let cols = prompt('please enter the number of rows you wish to see', '16')

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    //cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(rows, cols);

let gridToChange = document.getElementsByClassName('.grid-item')

document.querySelectorAll('.grid-item').forEach(item => {
    item.addEventListener('click', event => {
        item.style.backgroundColor='grey'
    })
  })

