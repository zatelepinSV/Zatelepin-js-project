import {Game} from "./game.js";
import {Helper} from "./helper.js";


export class Spa {
  #scores = null;
  set scoresData(scores) {
    this.#scores = scores;
  }
  constructor(renderHookId) {
    //this.audio = new Audio('audio/btn.mp3');
    this.hookId = renderHookId;
    this.subscribeToHashChanges();
  }

  subscribeToHashChanges() {
    window.onhashchange = () => this.processState();
  }

  processState() {

    let state = decodeURIComponent(location.hash.substr(1));
    if (state === '') {
      this.renderMainPage();
    } else {
      state = JSON.parse(state);
    }

    switch (state.page) {
      case 'newGame':
        this.game = new Game(this.#scores);
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
                 <p>The strongest lumberjack in the world who accepts the challenge to cut down the biggest tree in the 
                 world! But here's the catch, no matter how much he cuts it: the tree does not fall, but falls lower 
                 and lower. The user controls the lumberjack with the arrows on the keyboard. The tree moves with each 
                 blow of the ax and obstacles (branches) appear on it randomly. The user needs to control the 
                 lumberjack from side to side to avoid collision with the branches appearing on the tree trunk. 
                 An adrenaline scale is also provided, which will decrease and increase over time with each hit of an 
                 ax on a tree. The user will have to cut the tree faster, because if the scale ends, the player 
                 has lost. The more hits with an ax - the more points. I ran into a branch - I lost, the scale 
                 ended - I lost.</p>`;

    Helper.createPage(this.hookId,"rules", key,true);
  }

  renderScorePage() {
    const scores = this.#scores.filter(item => item.rang < 11);
    let result = `<h1>Score</h1>
                  <table> <td>Rang</td><td>Name</td><td>Score</td>`;
    result += scores.map(item => `<tr>
        <td>${item.rang}</td>
        <td>${item.name}</td>
        <td id="tableScore">${item.score}</td>
        </tr>`).join('');
    result+= `</table>`;

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