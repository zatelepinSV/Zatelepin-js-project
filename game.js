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
    this.initDim();
    this.tree.createMass();
  },

  preload(callback) {
    let loaded = 0;
    const required = Object.keys(this.sprites).length;
    const onAssetLoad = () => {
      ++loaded;
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
    this.create();
    this.gameInterval = setInterval(() => {
      this.update();
    }, 1000);
  },

  create() {
    this.board.create(this.ctx, this.canvas.width, this.canvas.height);
    this.tree.create(this.ctx, this.canvas.width, this.canvas.height);
  },

  update() {
    this.render();
    this.loose();
  },

  render() {
    //обновление канвас
  },

  stop() {
    clearInterval(this.gameInterval);
  },

  initDim() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  },

  loose() {
    if (game.tree.mass[6].randBranch === 1 && !game.woodcutter.some) {
      console.log(game.tree.mass[6].randBranch);
      console.log(game.woodcutter.some);
      console.log('loose');
      alert('loooooose')
      this.stop();
    } else if (game.tree.mass[6].randBranch === 3 && game.woodcutter.some) {
      console.log('loose');
      alert('loooooose')
      this.stop();
    }
  },
};

window.addEventListener("load", () => {
  game.start();
})