game.tree = {
  game: game,
  size: 20,
  cells: [],
  heightBlock: this.game.canvas.height,
  //cubeSizeY: this.game.canvas.height/10,
  //cubeSizeX: this.game.canvas.width / 10,

  create(context, width, height) {
   this.createCells();

    this.createTree(context, width, height);
    console.log(this.cells)
    console.log(this.heightBlock)
    this.renderCell(context)
  },


  createCells() {
//    for (var row = 0; row < this.game.canvas.height -50; row += this.game.canvas.height/10) {
//    for (var col = 0; col < this.game.canvas.width-50; col += this.game.canvas.width/10) {

    console.log(Math.floor(this.game.canvas.width / 11))
    for (var row = 0; row < this.size; row++) {
      for (var col = 0; col < this.size; col++) {
        this.cells.push(this.createCell(row, col));
      }
    }
  },
  createCell(row, col) {
    return {
      row: row,
      col: col,
      x: row * this.game.canvas.width / this.size,
      y: col * this.game.canvas.height / this.size,
    }
  },

  createTree(context, width, height) {
    context.beginPath();
    context.fillStyle = 'brown'
    context.strokeStyle = 'brown';
    context.fillRect(width / 2 - 25, 0, 50, height / 100 * 10);
    context.closePath();
  },
  renderCell(context) {
    this.cells.forEach((cells) => {
      if (cells.row === 4 && cells.col < 7) {
        context.beginPath();
        context.fillStyle = 'yellow'
        context.strokeStyle = 'black';
        context.fillRect(cells.x, cells.y, this.game.canvas.width/this.size, this.game.canvas.height/this.size+1);
        context.closePath();
      }
      /*context.beginPath();
      context.fillStyle = 'red'
      context.strokeStyle = 'black';
      context.textAlign = 'start'
      context.font = "22px Verdana";
      context.fillText(cells.row, cells.x + 20, cells.y + 20);
      context.rect(cells.x, cells.y, this.game.canvas.width/this.size, this.game.canvas.height/this.size);
      context.stroke();
      context.textAlign = 'start'
      context.fillText(cells.col, cells.x + 20, cells.y + 50);
      context.rect(cells.x, cells.y, this.game.canvas.width/this.size, this.game.canvas.height/this.size);
      context.stroke();
      context.closePath();*/
    });
  },

}