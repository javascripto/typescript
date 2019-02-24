// Repo: DefinitelyTyped
// import { Promise } from "../../node_modules/es6-promise/es6-promise";
import Response from './response';
declare var Promise: any;


enum HTTPVerbs {
  GET = 'GET',
  POST = 'POST'
}

export default class Http {
  get(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const xhr = this.createXHR(HTTPVerbs.GET, url);
      this.configureCallbacks(xhr, resolve, reject);
      xhr.send();
    });
  }

  post(url: string, payload): Promise<any> {
    return new Promise((resolve, reject) => {
      const xhr = this.createXHR(HTTPVerbs.POST, url);
      this.configureCallbacks(xhr, resolve, reject);
      xhr.send(payload);
    });
  }

  private createXHR(verb: HTTPVerbs, url: string): XMLHttpRequest {
    let xhr = new XMLHttpRequest;
    xhr.open(verb, url, true);
    return xhr;
  }


  private configureCallbacks(xhr: XMLHttpRequest, resolve, reject) {
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        const response = new Response(xhr.responseText, xhr.status);
        (xhr.status >= 200 && xhr.status < 300)
          ? resolve(response)
          : reject(response);
      }
    };
  }
}
