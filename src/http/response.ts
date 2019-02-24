export default class Response {
  constructor(public body: string, public status: number) {}
  
  json() {
    return JSON.parse(this.body || null);
  }
}
