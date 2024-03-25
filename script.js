const createGrid = (container, gridSize = 16) => {
  for (let i = 0; i < gridSize; i++) {
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    for (let j = 0; j < gridSize; j++) {
      const newSquare = document.createElement("div");
      newSquare.classList.add("square");
      newRow.appendChild(newSquare);
    }
    container.appendChild(newRow);
  }

  const CLASS_HOVERED = "hovered";
  container.addEventListener("mouseover", (e) => {
    // Only run if we hovered on a square
    if (e.target.className === "square") {
      // e.target.classList.add(CLASS_HOVERED);
      generateRandomColor(e.target);
      increaseOpacity(e.target);
    }
  });
};

const generateRandomColor = (element) => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  element.style.backgroundColor = "#" + randomColor;
};

const increaseOpacity = (element) => {
  // Get original opacity
  let opacity = window.getComputedStyle(element).opacity;
  // Decrease the value by .1
  opacity -= 0.1;
  // Set it back
  element.style.opacity = opacity;
};

const removeGrid = () => {
  container.textContent = "";
};

// Create our initial grid of 16x16
const container = document.querySelector(".container");
createGrid(container);

const button = document.querySelector(".create-grid");
button.addEventListener("click", () => {
  let enteredGridSize;
  enteredGridSize = prompt("Please enter a number between 1 and 100: ");

  // No alert if user clicks cancel or esc
  if (enteredGridSize === null) return;

  enteredGridSize = +enteredGridSize;

  if (isNaN(enteredGridSize) || enteredGridSize < 1 || enteredGridSize > 100) {
    alert("Invalid input, please enter a number between 1 and 100!");
    return;
  }

  removeGrid();
  createGrid(container, enteredGridSize);
});
