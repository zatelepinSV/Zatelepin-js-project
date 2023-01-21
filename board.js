game.board = {
  game: game,
  rr: 500,

  create() {
    this.createBackground();
  },

  render() {

  },

  createBackground() {
    this.game.ctx.drawImage(this.game.sprites.background,0,0, this.game.width, this.game.height);
  }
}