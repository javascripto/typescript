import Http from './http';

export default class PostHttp {

  private http: Http;
  private url = 'https://jsonplaceholder.typicode.com/posts';

  constructor() {
    this.http = new Http();
  }

  query(): Promise<Array<any>> {
    return this.http.get(this.url)
      .then(response => response.json());
  }

  save(data: FormData) {
    return this.http.post(this.url,data)
      .then(response => response.json());
  }

}
