import Http from './http';

export default class PostHttp {

  private http: Http;

  constructor() {
    this.http = new Http();
  }

  query() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1')
      .then(JSON.parse)
      .then(console.log);
  }

  save() {
    
  }
}
