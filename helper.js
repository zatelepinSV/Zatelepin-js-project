export class Helper {
  static createPage(hookId, className,text,value, loose) {
    const appEl = document.getElementById(hookId);
    const pageWrapper = document.createElement('div');
    pageWrapper.id = 'wrapper';
    pageWrapper.className = className;
    pageWrapper.innerHTML = text;
    if (value) {
      const btnBack = document.createElement('button');
      btnBack.id = 'back';
      btnBack.type = "button";
      btnBack.innerText = 'BACK';
      btnBack.addEventListener("click", () => {
        location.hash = encodeURIComponent('');
      })
      pageWrapper.prepend(btnBack)
    }
    return appEl.replaceChildren(pageWrapper);
  }

}