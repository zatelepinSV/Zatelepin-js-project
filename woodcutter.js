game.woodcutter = {
  game: game,
  posX: null,
  posY: null,
  some: null,
  create() {

    this.createImage();
  },
  render() {
    this.game.ctx.clearRect(0,0, this.game.canvas.width, this.game.canvas.height )
    this.game.create();
    this.game.ctx.drawImage(this.game.sprites.woodcutter, this.posX, 570);
  },

  createImage() {
    this.game.ctx.drawImage(this.game.sprites.woodcutter, this.game.width / 2 - 150, 570);
  },
}

window.document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft') {
    game.woodcutter.posX = game.canvas.width / 2 - 150;
    game.woodcutter.some = true;
    game.woodcutter.render();
  }
  if (event.code === 'ControlLeft') {
    game.woodcutter.posX = game.canvas.width / 2 + 50;
    game.woodcutter.some = false;
    game.woodcutter.render();
  }
})