export default abstract class Table {

  constructor(
    private selector: string,
    private columns: Array<string>,
    private _data?: Array<any>,
  ) {}

  getElement() {
    return document.querySelector(this.selector);
  }

  protected createRows() {
    const element = this.getElement();

    for (let row of this._data) {
      const tr = document.createElement('tr');
      for (let column of this.columns) {
        element.appendChild(tr);
        this.createColumn(tr, row[column]);
      }
    }
  }

  protected createColumn(trRow, columnData: any) {
    const td = document.createElement('td');
    td.innerHTML = columnData;
    trRow.appendChild(td);
  }

  make() {
    return this.createRows();
  }

  set data(value) {
    this._data = value;
  }

}
