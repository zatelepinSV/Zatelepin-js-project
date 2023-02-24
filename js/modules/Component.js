
export class SPAHelper {
  static createPage(hookId, className,text,value) {
    const appEl = document.getElementById(hookId);
    const pageWrapper = document.createElement('div');
    pageWrapper.id = 'wrapper';
    pageWrapper.className = className;
    pageWrapper.innerHTML = text;
    if (value) {
      const btnBack = document.createElement('div');
      btnBack.id = 'back';
      btnBack.innerText = 'BACK';
      btnBack.addEventListener("click", () => {
        location.hash = encodeURIComponent('');
      })
      pageWrapper.prepend(btnBack)
    }
    return appEl.replaceChildren(pageWrapper);
  }

}

export class DOMHelper {
  static createLoader() {
    const appEl = document.getElementById('app');
    let wind = document.createElement('div');
    wind.id = 'wait';
    wind.innerHTML = `Loading... Please Wait`;
    appEl.appendChild(wind)
  }

  static removeLoader() {
    document.getElementById('wait').remove();
  }

}

export class SettingsMenuHelper {
  static object = {
    audio: true,
    complication: {
      easy: true,
      norm: null,
      hard: null,
    },
  }


}