
export class Board {
  constructor(obj, diffLvl) {
    this.self = obj;
    this.difficultyLevel = diffLvl;
    this.createBoard()
  }

  createBoard() {
    this.createBackground();
    this.createScore();
    this.createDifficulty();
  }

  createBackground() {
    this.self.ctx.drawImage(this.self.sprites.background, 0, 0,this.self.width, this.self.height);
  }

  createScore() {
    this.self.ctx.fillStyle = 'red';
    this.self.ctx.font = 'italic bold 28px Courier';
    this.self.ctx.fillText('Score: ' + this.self.score, 10, 30);
  }

  createDifficulty() {
    if (!this.difficultyLevel) {
      this.difficultyLevel = 'Easy';
    }
    this.self.ctx.fillStyle = '#8b00ff';
    this.self.ctx.font = 'italic bold 28px Courier';
    this.self.ctx.fillText(this.difficultyLevel, 10, 60);
  }
}