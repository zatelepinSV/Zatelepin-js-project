


export class Woodcutter {
  constructor(obj) {
    this.wood = {
      obj,
      posX: null,
      posY: null,
      some: null,
    }

    this.init();
  }

  init() {
    console.log(this.wood.obj.canvas.width)
    this.wood.posX = this.wood.obj.canvas.width / 2 - 150;
    this.wood.posY = 570;
    this.createWoodcutter();
  }

  createWoodcutter() {
    //console.log(this.wood.posX)
    //console.log(this.wood.posY)
    this.wood.obj.ctx.drawImage(this.wood.obj.sprites.woodcutter, this.wood.posX, this.wood.posY);
  }


  positionWoodLeft() {
    this.wood.posX = this.wood.obj.canvas.width / 2 - 150;
    this.wood.some = true;
    //game.score += 10;
    //game.woodcutter.render();
  }

  positionWoodRight() {
    this.wood.posX = this.wood.obj.canvas.width / 2 + 50;
    this.wood.some = false;
  }


}