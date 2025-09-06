
class Grid {
  constructor(rows, cols) {
    this.cols = cols;
    this.rows = rows;
    this.cells = []
    for (var i = 0; i < rows; i++) {
      let row = []
      for (var j = 0; j < cols; j++) {
        row.push(new Cell(i, j))
      }
      this.cells.push(row)
    }
  }
  draw() {
    this.cells.forEach(row => {
      row.forEach(cell => {
        cell.draw()
      })
    })
  }
  unvisitCells() {
    this.cells.forEach(row => {
      row.forEach(cell => cell.visited = false)
    })
  }
}
