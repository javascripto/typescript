import Http from './http';

export default class PostHttp {

  private http: Http;

  constructor() {
    this.http = new Http();
  }

  query(): Promise<Array<any>> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json());
  }

}
