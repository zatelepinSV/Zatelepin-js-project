import {Spa} from "./Spa.js";
import {AjaxStringStorage} from "./AjaxStringStorage.js";


class App {

  static async init() {
    const spa = new Spa('app');
    const storage = new AjaxStringStorage();
    spa.renderLoadingPage();

    const encData = await storage.preloadData('READ');
    if (encData.error !== undefined) {
      alert(encData.error);
    } else if (encData) {
      spa.articlesData = JSON.parse(encData.result);
      spa.processState();
    } else {
      spa.renderMainPage();
    }

  }

}


App.init().then(() => console.log('App was initialized!'));