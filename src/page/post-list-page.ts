import Page from './page';
import PostHttp from '../http/post-http';
import PostTable from '../components/post-table';

export default class PostListPage implements Page {

  constructor(private postHttp: PostHttp, private postTable: PostTable) {
    this.init();
  }

  init(): void {
    this.getPosts();
  }

  getPosts() {
    this.postHttp.query()
      .then(posts => {
        this.postTable.data = posts;
        this.postTable.make();
      });
  }
}

new PostListPage(
  new PostHttp(),
  new PostTable('#my-table > tbody', ['title', 'body'])
);