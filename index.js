const gridContainer = document.getElementById("grid-container");
let gridSize = 16;

function changeGridSize(size) {
  gridSize = size;

  gridContainer.textContent = "";
  createGrid();
}

function createGrid() {
  // Creates a grid of gridSize x gridSize
  gridContainer.style.gridTemplateColumns = `repeat(${gridSize}, 15px)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const gridItem = document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);

    gridItem.addEventListener("mouseover", function () {
      gridItem.classList.add("grid-item-active");
    });
  }
}

createGrid();
