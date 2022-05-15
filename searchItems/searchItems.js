import { base } from "../common/base.js";
export class searchItemSection extends base {
  itemList = [];
  set setItemList(data) {
    this.itemList = data;
  }
  _renderItem(obj) {
    return `
        <button class="search_item" value="${obj}">${obj}</button>`;
  }
  _renderItemsList(list) {
    return list
      .map((obj) => {
        return this._renderItem(obj);
      })
      .join("");
  }
  render() {
    let content = this._renderItemsList(this.itemList);
    this.setHtmlContent(content);
  }
}
