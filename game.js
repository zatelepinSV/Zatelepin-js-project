const game = {
  canvas: null,
  ctx: null,
  width: 0,
  height: 0,
  score: 0,
  dimensions: {
    max: {
      width: window.innerWidth,
      height: window.innerHeight,
    },
    min: {
      width: 300,
      height: 300,
    },
  },
  elements: {
    background: null,
    woodcutter: null,
    tree: null,
  },
  start() {
    this.init();
    game.board.createForest(this.ctx, this.canvas.width, this.canvas.height);
  },
  init() {
    this.canvas = document.getElementById('canva');
    this.ctx = this.canvas.getContext('2d');
    this.canvas.width = this.dimensions.max.width;
    this.canvas.height = this.dimensions.max.height;
  },

}

window.addEventListener("load", () => {
  game.start();
})