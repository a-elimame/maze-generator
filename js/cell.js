
class Cell {
  constructor(row, col) {
    this.col = col
    this.row = row
    this.visited = false;
    this.nextCells = []
    this.walls = []
    this.x = CELL_DIM * this.col;
    this.y = CELL_DIM * this.row;
    this.drawPath = true
    const allLines = [[0, 0], [0, 1], [1, 0], [1, 1]];
    allLines.forEach(line => {
      this.walls.push(new Wall(row, col, this.x, this.y, line))
    })


  }


  draw() {

    // cell border
    this.walls.forEach(wall => wall.draw())



    let nodeCirclex = this.x + CELL_DIM / 2
    let nodeCircley = this.y + CELL_DIM / 2

    if (this.drawPath) {


      // node circle
      ctx.beginPath();


      ctx.arc(nodeCirclex, nodeCircley, 3, 0, 2 * Math.PI)

      ctx.strokeStyle = this.visited ? "Red" : 'Blue';
      ctx.lineWidth = 2.5;
      ctx.fillStyle = "lightblue";
      ctx.fill();
      ctx.stroke();



      //paths
      this.nextCells.forEach(nextCell => {
        let nextNodeCirclex = nextCell.x + CELL_DIM / 2
        let nextNodeCircley = nextCell.y + CELL_DIM / 2
        ctx.beginPath()
        ctx.moveTo(nodeCirclex, nodeCircley);
        ctx.lineTo(nextNodeCirclex, nextNodeCircley)
        ctx.lineWidth = 4
        ctx.strokeStyle = 'Blue';
        ctx.lineCap = "round"
        ctx.stroke()
      })
    }

  }
  highlight(color) {
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, CELL_DIM, CELL_DIM)
  }
}
