game.tree = {
  game: game,
  size: 5,
  cells: [],
  //cubeSizeY: this.game.canvas.height/10,
  //cubeSizeX: this.game.canvas.width / 10,

  create(context, width, height) {
   this.createCells();

    this.createTree(context, width, height);
    console.log(this.cells)
    this.renderCell(context)
  },


  createCells() {
//    for (var row = 0; row < this.game.canvas.height -50; row += this.game.canvas.height/10) {
//    for (var col = 0; col < this.game.canvas.width-50; col += this.game.canvas.width/10) {

    console.log(this.game.canvas.width / 10)
    for (var row = 0; row < this.game.canvas.width; row += this.game.canvas.width/11) {
      for (var col = 0; col < this.game.canvas.height; col += this.game.canvas.height/11) {


        this.cells.push(this.createCell(row, col));
      }
    }
  },
  createCell(row, col) {
    var cellSize = 50;
    return {
      row: row -row,
      col: col- col,
      x: row,
      y: col,
    }
  },

  createTree(context, width, height) {
    context.beginPath();
    context.fillStyle = 'brown'
    context.strokeStyle = 'brown';
    context.fillRect(width / 2 - 25, 0, 50, height / 100 * 85);
    context.closePath();
  },
  renderCell(context) {
    this.cells.forEach((cells) => {

     /* if (cells.row === 5) {
        context.beginPath();
        context.fillStyle = 'yellow'
        context.strokeStyle = 'black';
        context.fillRect(cells.x, cells.y, this.game.canvas.width/10 - 1, this.game.canvas.height/10 -1);
        context.closePath();
      }*/
      context.beginPath();
      context.fillStyle = 'red'
      context.strokeStyle = 'black';

      context.rect(cells.x, cells.y, this.game.canvas.width/11, this.game.canvas.height/11);
      context.stroke();
      context.closePath();
    });
  },

}