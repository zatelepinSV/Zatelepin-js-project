game.woodcutter = {
  game: game,
  posX: null,
  posY: null,
  some: null,

  init () {
    game.woodcutter.posX = game.canvas.width / 2 - 150;
    game.woodcutter.posY = 570;
  },
  create() {
    this.createWoodcutter();
  },
  render() {
    this.game.ctx.clearRect(0,0, this.game.canvas.width, this.game.canvas.height );
    this.game.create();
    //this.game.ctx.drawImage(this.game.sprites.woodcutter, this.posX, 570);
    //console.log(this.posX)
  },

  createWoodcutter() {
    this.game.ctx.drawImage(this.game.sprites.woodcutter, this.posX, this.posY);
  },
}

window.document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ArrowLeft') {
    game.woodcutter.posX = game.canvas.width / 2 - 150;
    game.woodcutter.some = true;
    game.score.score += 10;
    game.woodcutter.render();

  }
  if (event.code === 'ControlLeft' || event.code === 'ArrowRight') {
    game.woodcutter.posX = game.canvas.width / 2 + 50;
    game.woodcutter.some = false;
    game.score.score += 10;
    game.woodcutter.render();
  }
})