const game = {
  canvas: null,
  ctx: null,
  width: 0,
  height: 0,
  score: 0,
  dimensions: {
    max: {
      width: 1024,
      height: 768,
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

  },
  init() {
    this.canvas = document.getElementById('canva');
    this.ctx = this.canvas.getContext('2d');
    //this.canvas.width = this.dimensions.max.width;
    //this.canvas.height = this.dimensions.max.height;

    this.initDimensions()
    this.run();
    //game.board.createForest(this.ctx, this.canvas.width, this.canvas.height);
  },

  run() {
    console.log('запуск');
    this.create();
    this.gameInterval = setInterval(() => {
      this.update();
    }, 1000);
  },

  create() {
    //создаем эл-ты
    this.board.create(this.ctx, this.canvas.width, this.canvas.height);
    this.tree.create(this.ctx, this.canvas.width, this.canvas.height)
  },

  update() {
//перемещение э-тов
    this.render();
  },

  render() {
    //обновление канвас
    this.board.render();
  },

  stop() {
    clearInterval(this.gameInterval);
  },
  initDimensions() {
    const data = {
      maxWidth: this.dimensions.max.width,
      maxHeight: this.dimensions.max.height,
      minWidth: this.dimensions.min.width,
      minHeight: this.dimensions.min.height,
      realWidth: window.innerWidth,
      realHeight: window.innerHeight,
    }

    console.log('data.realWidth / data.realHeight' + data.realWidth / data.realHeight);
    console.log('data.maxWidth / data.maxHeight' + data.maxWidth / data.maxHeight)


    if (data.realWidth / data.realHeight > data.maxWidth / data.maxHeight) {
      this.fitWidth(data);
    } else {
      this.fitHeight(data);
    }

    this.canvas.width = this.width;
    this.canvas.height = this.height;
  },

  fitWidth(data) {
    this.height = Math.round(data.maxWidth * data.realHeight / data.realWidth);
    this.height = Math.min(this.height, data.maxHeight);
    this.height = Math.max(this.height, data.minHeight);
    this.width = Math.round(data.realWidth * this.height / data.realHeight);
  },
  fitHeight(data) {
    this.width = Math.round(data.realWidth * data.maxHeight / data.realHeight);
    this.width = Math.min(this.width, data.maxWidth);
    this.width = Math.max(this.width, data.minWidth);
    this.height = Math.round(this.width * data.realHeight / data.realWidth);
  },

};

window.addEventListener("load", () => {
  game.start();
})