import { Spa } from "./modules/Spa.js";
import { AjaxStringStorage } from "./modules/AjaxStringStorage.js";
import { DOMHelper } from "./modules/Component.js";

class App {

  static async init() {
    const spa = new Spa('app');
    const storage = new AjaxStringStorage();
    DOMHelper.createLoader();

    const encData = await storage.preloadData('READ');
    if (encData.error !== undefined) {
      alert(encData.error);
    } else if (encData) {
      spa.scoresData = JSON.parse(encData.result);
      spa.processState();
    } else {
      spa.renderMainPage();
    }
  }
}

App.init().then(() => console.log('App was initialized!'));