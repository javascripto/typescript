import Page from './page';

export default class PostNewPage implements Page {

  constructor() {
    this.init();
  }

  init(): void {
    document.querySelector('#my-form').addEventListener('submit', event => {
      event.preventDefault();
      this.submit();
      return false;
    });
  }

  submit() {
    alert();
  }

  isValid(): boolean {
    return;
  }

}

new PostNewPage;
