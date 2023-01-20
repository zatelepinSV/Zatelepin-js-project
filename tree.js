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
  max: 3,
  ref: true,

  create() {
    this.createTreeTrue();
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
      randBranch: this.getRand()
    }
  },

  getRand() {
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  },

  createTreeTrue() {
    this.mass.forEach((mass, currentValue) => {
      this.game.ctx.beginPath();
      this.game.ctx.fillStyle = '#854C1F';
      this.game.ctx.strokeStyle = 'brown';
      this.game.ctx.fillRect(mass.x, mass.y, mass.width, mass.height);
      this.game.ctx.closePath();
      if (mass.randBranch === 1 && currentValue < 6) {
        this.game.ctx.drawImage(this.game.sprites.branch, mass.x, mass.y, 200, 100);
      } else if (mass.randBranch === 3 && currentValue < 6) {
        this.game.ctx.drawImage(this.game.sprites.branch, mass.x - 150, mass.y, 200, 100);
      }
    })
  },

  updateMass() {
    this.mass.forEach((mass) => {
      mass.y += 100;
    })
  },

  render() {
    this.y += 50;
    this.posX = this.game.canvas.width / 2 - 25;
    this.posY = this.game.canvas.width / 100 * 10;
    this.game.ctx.beginPath();
    this.game.ctx.fillStyle = 'brown'
    this.game.ctx.strokeStyle = 'brown';
    this.game.ctx.fillRect(this.posX, this.y, 50, this.posY);
    this.game.ctx.closePath();
  },
}

document.addEventListener('keydown', (event) => {
  if (event.code === 'ShiftLeft' || event.code === 'ControlLeft') {
    game.tree.mass.pop();
    game.tree.updateMass();
    game.tree.mass.unshift(game.tree.func(0));
    console.log(game.tree.mass[6])
  }
})