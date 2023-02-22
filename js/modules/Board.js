

export class Board {
  constructor(obj) {
    this.self = obj;
    this.createBoard()
  }

  createBoard() {
    this.createBackground();
    this.createScore();
  }

  createBackground() {
    this.self.ctx.drawImage(this.self.sprites.background, 0, 0,this.self.width, this.self.height);
  }

  createScore() {
    this.self.ctx.fillStyle = 'red';
    this.self.ctx.font = 'italic bold 28px Courier';
    this.self.ctx.fillText('Score: ' + this.self.score, 10, 30);
  }

}