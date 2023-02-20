

export class AjaxStringStorage {
  static sendHttpRequest(method, url, data) {
    return fetch(url, {
      method: method,
      body: data
    }).then(response => {
      return response.json();
    });
  }

  storageHost = "http://fe.it-academy.by/AjaxStringStorage2.php";

  preloadData(f,v) {
    const pass = 1;
    const fd = new FormData();
    fd.append('f', f);
    fd.append('n', 'sergey');
    fd.append('p', `${pass}`);
    fd.append('v', v);
    return AjaxStringStorage.sendHttpRequest(
      'POST',
      this.storageHost,
      fd
    );
  }
}