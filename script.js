const CONTAINER = document.querySelector(".container");
const ROWS = 16;
const COLS = 16;

const createGrid = () => {
  for (let i = 0; i < ROWS; i++) {
    const NEW_ROW = document.createElement("div");
    NEW_ROW.classList.add("row");
    for (let j = 0; j < COLS; j++) {
      const NEW_SQUARE = document.createElement("div");
      NEW_SQUARE.classList.add("square");
      NEW_ROW.appendChild(NEW_SQUARE);
    }
    CONTAINER.appendChild(NEW_ROW);
  }
};

createGrid();
