class Wall {
  constructor(row, col, cellX, cellY, direction) {
    this.row = row;
    this.col = col;
    this.cellX = cellX;
    this.cellY = cellY;
    this.direction = direction;
    this.visible = true
  }

  draw() {
    if (this.visible) {
      let [dir, offset] = this.direction
      // horizontal line
      if (dir == 0) {
        let x = this.cellX
        let y = this.cellY + offset * CELL_DIM
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x + CELL_DIM, y)
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'White';
        ctx.stroke();
      }
      // vertical line
      else {
        let x = this.cellX + offset * CELL_DIM
        let y = this.cellY;
        ctx.beginPath()
        ctx.moveTo(x, y)
        ctx.lineTo(x, y + CELL_DIM)
        ctx.lineWidth = 4;
        ctx.strokeStyle = 'White'
        ctx.stroke()
      }
    } else {
      console.log('buddy')
    }
  }
}
