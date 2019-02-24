
enum HTTPVerbs {
  GET = 'GET',
  POST = 'POST'
}

export default class Http {
  get(url: string): Promise<any> {
    return new Promise((resolve, reject) => {
      const xhr = this.createXHR(HTTPVerbs.GET, url);
      xhr.onreadystatechange = this.onReadyStateChange(xhr, resolve, reject);
      xhr.send();
    });
  }

  post(url: string, payload) {
    return new Promise((resolve, reject) => {
      const xhr = this.createXHR(HTTPVerbs.POST, url);
      xhr.onreadystatechange = this.onReadyStateChange(xhr, resolve, reject);
      xhr.send(payload);
    });
  }

  private createXHR(verb: HTTPVerbs, url: string): XMLHttpRequest {
    let xhr = new XMLHttpRequest;
    xhr.open(verb, url, true);
    return xhr;
  }

  private onReadyStateChange(xhr: XMLHttpRequest, resolve, reject): () => void {
    return () => {
      xhr.readyState === 4 ? xhr.status === 200 
        ? resolve(xhr.responseText)
        : reject(xhr.status) : null;
    }
  }
}
