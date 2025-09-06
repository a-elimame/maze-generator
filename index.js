let canvas = document.querySelector('canvas')
let ctx = canvas.getContext('2d')
//let select_btn = document.getElementById('select-btn')
let start_btn = document.getElementById('start-btn')




let i = Math.floor(Math.random()*(GRID_ROWS-1))
let j = Math.floor(Math.random()*(GRID_COLS-1))





start_btn.addEventListener('click', () => {
    start = true;

    // 🔄 Reset grid completely
    grid = new Grid(GRID_ROWS, GRID_COLS); // recreate grid with fresh cells
    i = Math.floor(Math.random() * (GRID_ROWS - 1));
    j = Math.floor(Math.random() * (GRID_COLS - 1));
    currentCell = grid.cells[i][j]; // new random starting point
});




let start = false;


canvas.width = CELL_DIM * GRID_COLS
canvas.height = CELL_DIM * GRID_ROWS



j
let grid = new Grid(GRID_ROWS, GRID_COLS);

let currentCell = grid.cells[i][j]
// select_btn.addEventListener('click', () => {
	// selected_cell = document.querySelector('input').value.split(',').map(Number);
	// i = selected_cell[0];
	// j = selected_cell[1];
	// currentCell = grid.cells[i][j]
	//start = false;
// 
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


async function animate() {

	ctx.clearRect(0,0, canvas.width, canvas.height)


	if(grid.cells.flat().filter(cell => cell.visited).length == GRID_COLS*GRID_ROWS){
		start = false;
		grid.cells.forEach(row => row.forEach(cell => cell.drawPath = false))
	}	
	currentCell.highlight('Red')




 





	grid.draw()
	let i = currentCell.row;
	let j = currentCell.col;
	if (start) {

		currentCell.visited = true;	
		let neighbours = [];

		// vertical neighbors (check against number of rows)
		if (i > 0) {
			neighbours.push(grid.cells[i - 1][j]);
		}
		if (i < grid.cells.length - 1) {
			neighbours.push(grid.cells[i + 1][j]);
		}

		// horizontal neighbors (check against number of columns)
		if (j > 0) {
			neighbours.push(grid.cells[i][j - 1]);
		}
		if (j < grid.cells[i].length - 1) {
			neighbours.push(grid.cells[i][j + 1]);
		}

		let notVisitedNeighbours = neighbours.filter(neighbour => !neighbour.visited);
		if(notVisitedNeighbours.length){
			
			let randomNeighbour = notVisitedNeighbours[Math.floor(Math.random() * (notVisitedNeighbours.length))]
			randomNeighbour.highlight()
			currentCell.nextCells.push(randomNeighbour);


			
let dx = randomNeighbour.col - currentCell.col;
let dy = randomNeighbour.row - currentCell.row;

			
if (dx === 1) { 
    // neighbour is to the right
    currentCell.walls.find(w => w.direction[0] === 1 && w.direction[1] === 1).visible = false;
    randomNeighbour.walls.find(w => w.direction[0] === 1 && w.direction[1] === 0).visible = false;
} else if (dx === -1) { 
    // neighbour is to the left
    currentCell.walls.find(w => w.direction[0] === 1 && w.direction[1] === 0).visible = false;
    randomNeighbour.walls.find(w => w.direction[0] === 1 && w.direction[1] === 1).visible = false;
} else if (dy === 1) { 
    // neighbour is below
    currentCell.walls.find(w => w.direction[0] === 0 && w.direction[1] === 1).visible = false;
    randomNeighbour.walls.find(w => w.direction[0] === 0 && w.direction[1] === 0).visible = false;
} else if (dy === -1) { 
    // neighbour is above
    currentCell.walls.find(w => w.direction[0] === 0 && w.direction[1] === 0).visible = false;
    randomNeighbour.walls.find(w => w.direction[0] === 0 && w.direction[1] === 1).visible = false;
}


			currentCell = randomNeighbour
		}else{
			previousCell = grid.cells.flat().filter(cell => cell.nextCells.includes(currentCell))[0]
			currentCell = previousCell
		}


	
	

	}



	//await sleep(100)

	window.requestAnimationFrame(animate)

}

animate()
