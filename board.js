game.board = {
  game: game,
  rr: 500,

  create() {
    this.createBackground();
    this.createScore();
  },

  render() {

  },

  createBackground() {
    this.game.ctx.drawImage(this.game.sprites.background,0,0, this.game.width, this.game.height);
  },

  createScore() {
    this.game.ctx.fillStyle='red';
    this.game.ctx.font='italic bold 28px Courier';
    this.game.ctx.fillText('Score: ' + this.game.score,10,30);
  },

}