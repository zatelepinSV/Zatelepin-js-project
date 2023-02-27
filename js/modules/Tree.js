import { SettingsMenuHelper } from "./Component.js";

export class Tree {
  constructor(options) {
    this.obj = options;
    this.tree = {
      size: 10,
      mass: [],
      treeWidth: 2 - 25,
      treeHeight: this.obj.canvas.height / 100 * 10,
      posX: 0,
      posY: 0,
      y: 0,
      min: 1,
      max: 3,
      ref: true,
    }
    this.createTre();
  }

  updateMass() {
    this.tree.mass.forEach((mass) => {
      mass.y += 100;
    })
  }

  createTre() {
    this.createMass();
    this.createTree();
  }

  createMass() {
    for (let t = 0; t <= 600; t += 100) {
      this.tree.mass.push(this.func(t));
    }
    this.correctPositionLastBranch();
  }

  correctPositionLastBranch() {
    if (this.tree.mass[this.tree.mass.length - 1].randBranch === 1 ||
      this.tree.mass[this.tree.mass.length - 1].randBranch === 4) {
      return this.tree.mass[this.tree.mass.length - 1].randBranch = 0;
    }
  }

  func(t) {
    return {
      width: 50,
      height: this.obj.canvas.height / 100 * 11,
      x: this.obj.canvas.width / 2 - 25,
      y: t,
      randBranch: this.getRand()
    }
  }

  getRand() {
    return Math.floor(Math.random() * (this.tree.max - this.tree.min + 1)) + this.tree.min;
  }

  createTree() {
    this.tree.mass.forEach((mass, currentValue) => {
      if (mass.randBranch === 1 && currentValue < 6) {
        this.obj.ctx.drawImage(this.obj.sprites.branchRight, mass.x, mass.y, 200, 100);
      } else if (mass.randBranch === 3 && currentValue < 6) {
        this.obj.ctx.drawImage(this.obj.sprites.branchLeft, mass.x - 150, mass.y, 200, 100);
      }
      this.obj.ctx.beginPath();
      this.obj.ctx.fillStyle = '#854C1F';
      this.obj.ctx.strokeStyle = 'brown';
      this.obj.ctx.fillRect(mass.x, mass.y, mass.width, mass.height);
      this.obj.ctx.closePath();
    })
  }

  renderMass(music) {
    if (SettingsMenuHelper.object.audio.axe) {
      music.play();
    }
    this.tree.mass.pop();
    this.updateMass();
    this.tree.mass.unshift(this.func(0));
    this.createTree();
  }
}