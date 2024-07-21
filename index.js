const gridContainer = document.getElementById("grid-container")
let gridSize = 16;

// Creates a grid of gridSize x gridSize
for (let i = 0; i < gridSize * gridSize; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item")
  gridContainer.appendChild(gridItem)

  gridItem.addEventListener("mouseover", function() {
    gridItem.classList.add("grid-item-active")
  })
}

