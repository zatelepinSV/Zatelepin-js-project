import {Board} from "./board.js";
import {Tree} from "./tree.js";
import {Woodcutter} from "./woodcutter.js";
import {Strip} from "./strip.js";
import {LooseMenu} from "./looseMenu.js";


export class Game {
  constructor(score) {
    this.ressult = score;
    this.mp3 = new Audio('audio/hit.mp3');
    this.game = {
      speed: 1000,
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
        branchLeft: null,
        branchRight: null,
      },
    }
    this.start();
  }

  start() {

    this.init();
    this.waitWindow();
    this.preload(() => {
      this.remooveWaitMess();
      this.run();
    });
  }
  waitWindow() {
    const appEl = document.getElementById('app');
    let wind = document.createElement('div');
    wind.id = 'wait';
    wind.innerHTML = `Loading... Please Wait`;
    appEl.appendChild(wind)
  }
remooveWaitMess() {
  document.getElementById('wait').remove();
}

  init() {
    const appEl = document.getElementById('app');
    const canvas = document.createElement('canvas');
    canvas.id = 'canva';
    appEl.replaceChildren(canvas)
    this.game.canvas = document.getElementById('canva');
    this.game.ctx = this.game.canvas.getContext('2d');
    this.initDim();
  }

  initDim() {
    this.game.width = window.innerWidth;
    this.game.height = window.innerHeight;
    this.game.canvas.width = this.game.width;
    this.game.canvas.height = this.game.height;
  }

  preload(callback) {
    let loaded = 0;
    const required = Object.keys(this.game.sprites).length;
    const onAssetLoad = () => {
      ++loaded;
      if (loaded >= required) {
        callback();
      }
    }
    this.preloadSprites(onAssetLoad);
  }

  preloadSprites(onAssetLoadCallback) {
    for (let key in this.game.sprites) {
      this.game.sprites[key] = new Image;
      this.game.sprites[key].src = 'image/' + key + '.png';
      this.game.sprites[key].addEventListener('load', onAssetLoadCallback);
    }
  }

  run() {
    this.create();
    this.gameInterval = setInterval(() => {
      this.update();
    }, 100);
  }

  create() {
    this.board = new Board(this.game);
    this.tree = new Tree(this.game);
    this.woodcutter = new Woodcutter(this.game);
    this.strip = new Strip(this.game);

    this.dd = () => {
      if (event.code === 'ArrowLeft') {
        this.woodcutter.positionWoodLeft();
      }
      if (event.code === 'ArrowRight') {
        this.woodcutter.positionWoodRight();
      }
      this.render();
    }
    document.addEventListener('keydown', this.dd)

  }

  update() {
    //this.render();
    this.loose();
  }

  render() {
    this.game.score += 10;
    this.game.ctx.clearRect(0, 0, this.game.canvas.width, this.game.canvas.height);
    this.board.createBoard(this.game)
    this.tree.renderMass(this.mp3);
    this.woodcutter.createWoodcutter();
  }

  loose() {
    if (this.checkTime() === 0 || this.checkBranch()) {
      this.stop();
      this.looseMenu = new LooseMenu(this.game.score,this.ressult);
    }
  }

  checkTime () {
    return this.strip.object.time;
  }

  checkBranch() {
    if (this.tree.tree.mass[6].randBranch === 1 && !this.woodcutter.wood.some) {
      return true
    } else if (this.tree.tree.mass[6].randBranch === 3 && this.woodcutter.wood.some) {
      return true
    }
  }

  stop() {
    document.removeEventListener('keydown',this.strip.lisAddTime)
    document.removeEventListener('keydown',this.dd)
    clearInterval(this.gameInterval);
    clearInterval(this.strip.inter);
  }

  clear() {

  }


}
