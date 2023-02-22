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
    const wrapper = document.getElementById('app');
    const menu = document.createElement('div');
    menu.id = 'looseMenu';

    menu.innerHTML = `<h1>You LOOSE!</h1>
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
        this.#data.name = `${name}`;
        this.#data.score = `${this.score}`;
        console.log(this.#data)
        this.addDataFromForm();
        //this.result = [];
        this.store.preloadData('LOCKGET').then(() =>
          this.store.preloadData('UPDATE',JSON.stringify(this.result)));

        location.hash = encodeURIComponent(JSON.stringify({page: "score"}));
      });

    }

    startNewGame.addEventListener("click", this.startAgain);
    goToScore.addEventListener('click',this.recordResult);
  }

  addDataFromForm() {
    this.result.push(this.#data);
    this.result.sort((a,b) => a.score - b.score).reverse().
    map((item,index) => item.rang = index+1);
    this.result = this.result.filter(item => item.rang < 11);
  }

}