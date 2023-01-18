game.woodcutter = {
  game: game,
  posX: null,
  posY: null,
  //width: game.sprites.woodcutter.width,


  create() {

    this.createImage();
  },
  render() {

    //console.log(this.posX)
    this.game.ctx.clearRect(0,0, this.game.canvas.width, this.game.canvas.height )
    this.game.create();
    this.game.ctx.drawImage(this.game.sprites.woodcutter, this.posX, 570);
    //this.game.ctx.drawImage(this.game.sprites.branch, 200, 300,200,100);
  },

  createImage() {
    this.game.ctx.drawImage(this.game.sprites.woodcutter, this.game.width / 2 - 150, 570);

  },




}

window.document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft') {
    game.woodcutter.posX = game.canvas.width / 2 - 150;
    game.woodcutter.render();

  }
  if (event.code === 'ControlLeft') {

    game.woodcutter.posX = game.canvas.width / 2 + 50;
    //game.tree.y -= 50;
    console.log(game.tree.y)
    game.woodcutter.render()
  }
})