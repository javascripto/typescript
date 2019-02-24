import Http from './http';
import PostTable from '../components/post-table';

export default class PostHttp {

  private http: Http;

  constructor() {
    this.http = new Http();
  }

  query() {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => new PostTable('#my-table > tbody', posts, ['title', 'body']).make());
  }

  save() {
    
  }
}
