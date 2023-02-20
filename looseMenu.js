//import {Helper} from "./helper.js";
//import {Spa} from "./Spa.js";
import {AjaxStringStorage} from "./AjaxStringStorage.js";


export class LooseMenu {
  #data = {}
  constructor(score,result) {
    this.store = new AjaxStringStorage();
    this.score = score;
    this.result = result;
    this.createLooseMenu();
    this.showLooseMenu();

  }

  createLooseMenu() {
    /*const html = `<h1>You LOOOSE!!!</h1>
                    <p>Your score : ${this.score}</p>
                    <button id="save">Save</button> <button id="again" >Try again</button>`;
    Helper.createPage('app','looseMenu', html,false);*/
    const wrapper = document.getElementById('app');
    const menu = document.createElement('div');
    menu.id = 'looseMenu';

    menu.innerHTML = `<h1>You LOOOSE!!!</h1>
                    <p>Your score : ${this.score}</p>
                    <button id="save">Save</button> <button id="again" >Try again</button>`;
    wrapper.appendChild(menu);
  }


  showLooseMenu() {
    const startNewGame = document.getElementById('again');
    const goToScore = document.getElementById('save');

    this.startAgain = () => {
      location.hash = encodeURIComponent('')
    }

    this.recordResult = () => {
      const wrapper = document.getElementById('looseMenu');
      wrapper.innerHTML = `<h2>name</h2>
                             <form id="form" action="#">
                                  Your name:<br>
                                  <input type="text" name="name"><br><br>
                                  <input type="submit" value="Submit">
                                  </form> `;

      const formElement = document.getElementById('form');
      formElement.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(formElement);
        const name = formData.get('name');
        //this.#data[name] = this.score;
        this.#data.name = `${name}`;
        this.#data.id = `${this.score}`;
        //console.log(this.result)
        console.log(this.result)
        //this.result = [];
        this.store.preloadData('LOCKGET').then(() =>
          this.store.preloadData('UPDATE',JSON.stringify(this.result)))

        console.log(this.#data);
        this.result.push(this.#data)
        console.log(this.result)

        location.hash = encodeURIComponent(JSON.stringify({page: "score"}))
      });

    }

    startNewGame.addEventListener("click", this.startAgain);
    goToScore.addEventListener('click',this.recordResult);
  }


}