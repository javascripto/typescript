import Page from './page';
import PostHttp from '../http/post-http';

export default class PostNewPage implements Page {
  form: HTMLFormElement;

  constructor(private postHttp: PostHttp) {
    this.init();
  }

  init(): void {
    this.form = document.querySelector('#my-form');
    this.form.addEventListener('submit', event => {
      event.preventDefault();
      this.submit();
      return false;
    });
  }

  submit() {
    const data = new FormData(this.form);
    this.postHttp.save(data)
      .then(console.log);
  }

  isValid(): boolean {
    return;
  }

}

new PostNewPage(new PostHttp);
