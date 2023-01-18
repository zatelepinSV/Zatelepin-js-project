game.board = {
  game: game,
  rr: 500,

  create(context, width, height) {
    // this.createForest(context, width, height);
    // this.createField(context,  width, height);
    this.createBackground()
  },
  render() {

  },

  number: () => {

    return Math.floor(Math.random() * (80 - 40) + 40);
  },

  createForest(context, width, height) {
    context.lineWidth = 1;
    for (var k = 0; k < width; k += this.number()) {
      context.beginPath();
      var e = this.number();
      context.fillStyle = '#9BA4A9'
      context.strokeStyle = 'brown';
      context.fillRect(k, 0, e, height);
      context.closePath();
      k += e;
    }

  },

  createField(context, width, height) {
    context.beginPath();
    context.fillStyle = '#41A54B';
    context.fillRect(0, height - (height / 100 * 30), width, height);
    context.fillStyle = '#48B758';
    context.fillRect(0, height - (height / 100 * 20), width, height);
    context.fillStyle = '#54C867';
    context.fillRect(0, height - (height / 100 * 10), width, height);
    context.closePath();
  },

  createBackground() {
    this.game.ctx.drawImage(this.game.sprites.background,0,0, this.game.width, this.game.height);
  }
}