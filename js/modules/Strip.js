import { SettingsMenuHelper } from "./Component.js";

export class Strip {
  constructor() {
    this.object = {
      time: 100,
      timer: 100,
      upTime: null,
    };
    this.createProgress();
    this.difficultyLevel();
  }

  createProgress() {
    const wrapper = document.getElementById('app')
    const progress = document.createElement('progress')
    progress.id = 'progress';
    progress.max = 100;
    progress.value = 100;
    wrapper.appendChild(progress);

    const exitBtn = document.createElement('div');
    exitBtn.id = 'exit'
    exitBtn.innerText = 'Exit';
    wrapper.appendChild(exitBtn);
    document.addEventListener('keydown', () => {
      if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
        this.startProgress(this.object.timer);
      }
    }, {once: true});
  }

  startProgress(time) {
    const bar = document.getElementById('progress');
    this.inter = setInterval(() => {
      if (this.object.time < 0) {
        clearInterval(this.inter)
      } else {
        bar.value = this.object.time;
      }
      this.object.time--;
    }, time)
    this.lisAddTime = () => {
      if (event.code === 'ArrowLeft' || event.code === 'ArrowRight') {
        this.object.time += this.object.upTime;
      }
    }
    document.addEventListener('keydown', this.lisAddTime);
  }

  difficultyLevel() {
    let difficulty = null;
    for (let item of Object.keys(SettingsMenuHelper.object.complication)) {
      if (SettingsMenuHelper.object.complication[item]) {
        difficulty = item;
      }
    }

    switch (difficulty) {
      case 'easy':
        this.object.upTime = 2;
        break;
      case 'norm':
        this.object.upTime = 1;
        break;
      case 'hard':
        this.object.upTime = 0.5;
        break;
    }
  }
}