import {Game} from "./game.js";
import {Helper} from "./helper.js";


export class Spa {
  #articles = null;
  set articlesData(articles) {
    this.#articles = articles;
  }
  constructor(renderHookId) {
    this.audio = new Audio('audio/btn.mp3');
    this.hookId = renderHookId;
    this.subscribeToHashChanges();
  }

  subscribeToHashChanges() {
    window.onhashchange = () => this.processState();
  }

  processState() {
    this.audio.play();
    let state = decodeURIComponent(location.hash.substr(1));
    if (state === '') {
      this.renderMainPage();
    } else {
      state = JSON.parse(state);
    }

    switch (state.page) {
      case 'newGame':
        this.game = new Game(this.#articles);
        break;
      case 'rules':
        this.renderRulesPage();
        break;
      case 'score':
        this.renderScorePage();
        break;
      case 'settings':
        this.renderSettingsPage();
        break;
      default:
        this.renderMainPage();
    }
  }

  renderLoadingPage() {
    const appEl = document.getElementById(this.hookId);
    appEl.innerHTML = `Loading...`;
  }

  renderMainPage() {

    const html = `<h1>The woodcutter</h1>
                    <ul>
                        <li id="newGame">New Game</li>
                        <li id="rules">Rules</li>
                        <li id="score">Score</li>
                        <li id="settings">settings</li>
                    </ul>`;
    Helper.createPage(this.hookId,"rules", html,false);
    Array.from(document.getElementsByTagName('li')).map(item => {
      item.addEventListener("click", () => this.goToPage());
    });
  }

  renderRulesPage() {
    const key = `<h1>Rules</h1>
                 <p>some rules</p>`;

    Helper.createPage(this.hookId,"rules", key,true);
  }

  renderScorePage() {
    let result = `<h1>Score</h1>
                  <ul id="result">`
    result += this.#articles.sort((a,b) => a.id - b.id).map(item =>
      `<li><span>
      ${item.name} : ${item.id}</span>
      </li>`).reverse().join('');
    result += `</ul>`;

    Helper.createPage(this.hookId,"score", result,true);
  }

  renderSettingsPage() {
    const key = `<h1>Settings</h1>
                 <p>some settings</p>
                 <div>
                 <input type="checkbox" id="sound" name="sound" checked>
                 <label for="sound">Sound</label>
                 </div>`;

    Helper.createPage(this.hookId,"rules", key,true);
  }

  goToPage() {
    let pageId = event.target.id;
    this.switchToState({page: `${pageId}`});
  }

  switchToState(state) {
    location.hash = encodeURIComponent(JSON.stringify(state));
  }

}