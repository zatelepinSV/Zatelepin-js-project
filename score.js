game.score = {
  game: game,
  score: 0,

  createScore() {
    this.game.ctx.fillStyle='red';
    this.game.ctx.font='italic bold 28px Arial';
    this.game.ctx.fillText('Score: ' + this.score,10,30);
  },



}