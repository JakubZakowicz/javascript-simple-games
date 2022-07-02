const colorButtons = document.querySelectorAll('[data-picking-color]');
const pickedColor = document.querySelector('[data-picked-color]');
var pickedColorIndex = -1;
var gameCells = document.querySelectorAll('.turn');
const finishButton = document.getElementById('finishButton');
var rowIndex = 10;
const cell = document.querySelector('.cell');
const solutionCells = document.querySelectorAll('[data-solution-cell]');
const colors = [
  'red',
  'green',
  'blue',
  'yellow',
  'orange',
  'violet',
  'cyan',
  'pink',
];
var win = false;
var solution = new Set();
var myColors = ['white', 'white', 'white', 'white'];
const restartButton = document.getElementById('restartButton');

function setSolution() {
  while (solution.size < 4) {
    solution.add(colors[Math.floor(Math.random() * 8)]);
  }
}

setSolution();

colorButtons.forEach(colorButton => {
  colorButton.addEventListener('click', () => {
    let style = getComputedStyle(colorButton);
    pickedColor.style.background = style['background-color'];
    pickedColorIndex = [...colorButtons].indexOf(colorButton);
  });
});

gameCells.forEach(gameCell => {
  gameCell.addEventListener('click', unlockCells);
});

function unlockCells(e) {
  let gameCell = e.target;
  if (gameCell.classList.contains('turn')) {
    gameCell.style.background = pickedColor.style.background;
    gameCell.classList.remove('empty');
    let index = [...gameCells].indexOf(gameCell);
    myColors[index] = colors[pickedColorIndex];
  }
}

finishButton.addEventListener('click', () => {
  if (
    [...gameCells].some(cell => {
      return cell.classList.contains('empty');
    })
  ) {
    alert('You have to fill in all cells to move on!!!');
  } else {
    check();
    if (rowIndex - 1 == 0 && !win) {
      showSolution();
      alert('You lose!!!');
      gameCells.forEach(gameCell => {
        gameCell.classList.remove('turn');
        gameCell.style.cursor = 'default';
      });
      finishButton.disabled = true;
      return;
    } else if (win) {
      showSolution();
      alert('You won!!!');
      gameCells.forEach(gameCell => {
        gameCell.classList.remove('turn');
        gameCell.style.cursor = 'default';
      });
      finishButton.disabled = true;

      return;
    }
    let currentRow = document.querySelector('[data-row-' + `${rowIndex}` + ']');
    currentRow.classList.remove('finish');
    currentRow.removeChild(finishButton);
    gameCells.forEach(cell => {
      cell.style.cursor = 'default';
      cell.classList.remove('turn');
      cell.classList.remove('empty');
    });
    rowIndex--;
    resetCells();
    let nextRow = document.querySelector('[data-row-' + `${rowIndex}` + ']');
    nextRow.classList.add('finish');
    nextRow.appendChild(finishButton);
    gameCells = nextRow.querySelectorAll('.cell');
    gameCells.forEach(cell => {
      cell.classList.add('turn');
      cell.classList.add('empty');
      cell.style.cursor = 'pointer';
      cell.addEventListener('click', unlockCells);
    });
  }
});

function check() {
  let matches = 0;
  let misplaced = 0;
  let pegs = document
    .querySelector('.row-' + `${rowIndex}`)
    .querySelector('.pegs')
    .querySelectorAll('.peg');
  for (let i = 0; i < 4; i++) {
    if (myColors[i] == [...solution][i]) matches++;
    if (myColors.indexOf([...solution][i]) > -1) misplaced++;
  }
  misplaced = misplaced - matches;
  if (matches == 4) win = true;
  for (let i = 0; i < matches; i++) {
    pegs[i].style.background = 'black';
  }

  for (let i = matches; i < misplaced + matches; i++) {
    pegs[i].style.background = 'white';
  }

  console.log(misplaced);
}

function resetCells() {
  for (let i = 0; i < 4; i++) {
    myColors[i] = 'white';
  }
}

restartButton.addEventListener('click', () => {
  let allCells = document
    .querySelector('.playable-cells')
    .querySelectorAll('.cell');
  allCells.forEach(cell => {
    cell.style.background = 'white';
    cell.classList.remove('turn');
    cell.classList.remove('empty');
  });
  rowIndex = 10;
  let nextRow = document.querySelector('[data-row-' + `${rowIndex}` + ']');
  nextRow.classList.add('finish');
  nextRow.appendChild(finishButton);
  gameCells = nextRow.querySelectorAll('.cell');
  gameCells.forEach(cell => {
    cell.classList.add('turn');
    cell.classList.add('empty');
    cell.style.cursor = 'pointer';
    cell.addEventListener('click', unlockCells);
  });
  let allPegs = document.querySelectorAll('.peg');
  allPegs.forEach(peg => {
    peg.style.background = 'gray';
  });
  pickedColor.style.background = 'white';
  solution = new Set();
  setSolution();
  win = false;
  finishButton.disabled = false;
  solutionCells.forEach(solutionCell => {
    solutionCell.style.background = 'lightgray';
    solutionCell.textContent = '?'
  });
});

function showSolution() {
  solutionCells.forEach((solutionCell, index) => {
    solutionCell.style.background = [...solution][index];
    solutionCell.textContent = ''
  });
}
