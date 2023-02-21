
export class Strip {
  constructor() {
    this.object = {
      time: 100,
      timer: 100,
      upTime:2,
    };
    this.createProgress();
  }

  createProgress() {
    const wrapper = document.getElementById('app')
    const progress = document.createElement('progress')
    progress.id = 'progress';
    progress.max = 100;
    progress.value = 100;
    wrapper.appendChild(progress)
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
}