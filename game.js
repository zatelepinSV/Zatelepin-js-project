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
  sprites: {
    woodcutter: null,
    background: null,
    branch: null,
  },
  start() {
    this.init();
    this.preload(() => {
      this.run();
    });
  },

  init() {
    this.canvas = document.getElementById('canva');
    this.ctx = this.canvas.getContext('2d');
    //this.initDimensions();
    this.initDim();
    this.tree.createMass();
    //this.tree.createMassWithBranch();
    //console.log(this.width )

  },

  preload(callback) {
    let loaded = 0;
    const required = Object.keys(this.sprites).length;
    const onAssetLoad = () => {
      ++loaded;
      //console.log(loaded);
      if (loaded >= required) {
        callback();
      }
    }
    this.preloadSprites(onAssetLoad);
  },

  preloadSprites(onAssetLoadCallback) {
    for (let key in this.sprites) {
      this.sprites[key] = new Image;
      this.sprites[key].src = 'image/' + key + '.png';
      this.sprites[key].addEventListener('load', onAssetLoadCallback);
    }
  },

  run() {
    //console.log('запуск');
    this.create();
    this.gameInterval = setInterval(() => {
      this.update();
    }, 1000);
  },

  create() {
    //создаем эл-ты
    this.board.create(this.ctx, this.canvas.width, this.canvas.height);
    this.tree.create(this.ctx, this.canvas.width, this.canvas.height);
    //this.woodcutter.create();

  },

  update() {
//перемещение э-тов
    this.render();
    //this.woodcutter.create();
  },

  render() {
    //обновление канвас
    //console.log('board')
    //console.log(this.tree.mass)
   /* document.addEventListener('keydown', (event) => {
      if (event.code === 'ShiftLeft') {
        console.log('push');
        this.woodcutter.posX = 400;
        this.posY = 400;
        console.log(this.woodcutter.posX)
        this.woodcutter.render()
      } else if (event.code === 'ControlLeft') {
        this.woodcutter.posX = 200;
        this.woodcutter.posY = 200;
        console.log('dsdfsd')
        console.log(this.woodcutter.posX)
        this.woodcutter.render()
      }

    });*/
    /*document.addEventListener('keyup', (event) => {
      if (event.code === 'ShiftLeft') {
        this.stop()
      }

    });*/

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
  initDim() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.canvas.width = this.width;
    this.canvas.height = this.height;
  },

  fitWidth(data) {
    this.height = Math.round(data.maxWidth * data.realHeight / data.realWidth);
    this.height = Math.min(this.height, data.maxHeight);
    this.height = Math.max(this.height, data.minHeight);
    this.width = Math.round(data.realWidth * this.height / data.realHeight);
    this.canvas.style.width = '100%';
  },

  fitHeight(data) {
    this.width = Math.round(data.realWidth * data.maxHeight / data.realHeight);
    this.width = Math.min(this.width, data.maxWidth);
    this.width = Math.max(this.width, data.minWidth);
    this.height = Math.round(this.width * data.realHeight / data.realWidth);
    this.canvas.style.height = '100%';
  },

};

window.addEventListener("load", () => {
  game.start();
})