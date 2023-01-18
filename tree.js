game.tree = {
  game: game,
  size: 10,
  cells: [],
  mass: [],
  treeWidth: 2 - 25,
  treeHeight: 100 * 10,
  posX: 0,
  posY: 0,
  y: 0,
  min: 1,
  max: 4,
  ref: true,

  //heightBlock: this.game.canvas.height,
  //cubeSizeY: this.game.canvas.height/10,
  //cubeSizeX: this.game.canvas.width / 10,


  create(context, width, height) {
    //this.createCells(width, height);
    //this.createTree(context, width, height);
    this.createTreeTrue();

    //console.log(width)
    //console.log(this.game.canvas.width)
    this.renderCell(context);
    //this.createImage();
  },
  createMass() {
    for (var t = 0; t <= 600; t += 100) {
      this.mass.push(this.func(t))
    }

  },
  func(t) {
    return {
      width: 50,
      height: this.game.height / 100 * 10,
      x: this.game.width / 2 - 25,
      y: t,
      //randBranch: Math.floor(Math.random() * (this.max - this.min + 1)) + this.min,
      randBranch: this.getRand()
    }
  },
  getRand() {

    //console.log(this.mass[0])
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;


  },

  /*createMassWithBranch() {
    for (var t = 0; t <= 3; t += 100) {
      this.mass.push(this.funcBranch(t))
    }
  },*/
  /*funcBranch(t) {
    return {
      width: 50,
      height: this.game.height / 100 * 10,
      x: this.game.width / 2 - 25,
      y: t,
      randBranch: this.getRand(),

    }
  },

  getRand() {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  },*/

  createCells(width, height) {
//    for (var row = 0; row < this.game.canvas.height -50; row += this.game.canvas.height/10) {
//    for (var col = 0; col < this.game.canvas.width-50; col += this.game.canvas.width/10) {

    //console.log(Math.floor(width / 11))
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
    console.log(' visota ' + this.game.height / this.game.tree.treeHeight)
    context.beginPath();
    context.fillStyle = 'brown'
    context.strokeStyle = 'brown';
    context.fillRect(width / 2 - 25, this.y, 50, height / 100 * 10);
    context.closePath();
    this.posX = width / 2 - 25;
    this.posY = height / 100 * 10;
    console.log(this.posY + ' YYYY')
    console.log(this.posX + ' XXXX')
  },

  createTreeTrue() {


    this.mass.forEach((mass, currentValue) => {
      this.game.ctx.beginPath();
      this.game.ctx.fillStyle = '#854C1F';
      this.game.ctx.strokeStyle = 'brown';
      this.game.ctx.fillRect(mass.x, mass.y, mass.width, mass.height);
      this.game.ctx.closePath();
      if (mass.randBranch === 1 && currentValue < 6) {
        //this.game.ctx.translate(0,100)

        this.game.ctx.drawImage(this.game.sprites.branch, mass.x, mass.y, 200, 100);

      } else if (mass.randBranch === 4 && currentValue < 6) {
        this.game.ctx.drawImage(this.game.sprites.branch, mass.x - 150, mass.y, 200, 100);


      }


    })

  },

  updateMass() {
    this.mass.forEach((mass) => {
      mass.y += 100;
    })
  },


  createImage() {
    this.game.ctx.drawImage(this.game.sprites.woodcutter, 100, 100);
  },

  renderCell(context) {
    this.cells.forEach((cells) => {
      /*if (cells.row === 4 && cells.col > 7) {
        context.beginPath();
        context.fillStyle = 'yellow'
        context.strokeStyle = 'black';
        context.fillRect(cells.x, cells.y, this.game.canvas.width / this.size, this.game.canvas.height / this.size + 1);
        context.closePath();
      }*/
      console.log(cells)
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

  render() {
    //this.game.ctx.clearRect(0,0, this.game.canvas.width, this.game.canvas.height )
    this.y += 50;
    this.posX = this.game.canvas.width / 2 - 25;
    this.posY = this.game.canvas.width / 100 * 10;
    console.log(' visota ' + this.game.height / this.game.tree.treeHeight)
    this.game.ctx.beginPath();
    this.game.ctx.fillStyle = 'brown'
    this.game.ctx.strokeStyle = 'brown';
    this.game.ctx.fillRect(this.posX, this.y, 50, this.posY);
    this.game.ctx.closePath();

    console.log(this.mass);
  },
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ControlLeft') {
    game.tree.mass.pop();
    game.tree.updateMass();
    game.tree.mass.unshift(game.tree.func(0));
    console.log(game.tree.mass[6])
    //game.sprites.branch.width = 300;

  }

})