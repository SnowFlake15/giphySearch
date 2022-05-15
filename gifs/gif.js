import { base } from "../common/base.js";
export class gifSection extends base {
  gifList = [];
  set setItemList(data) {
    this.gifList = data;
  }
  _renderGif(obj) {
    return `
        <div class"gif_item">
            <img src="${obj["images"]["original"]["url"]}">
            <h6> Rating: ${obj["rating"]} </h6>
        </div>
        
        `;
  }
  _renderGifsList(list) {
    return list
      .map((obj) => {
        return this._renderGif(obj);
      })
      .join("");
  }
  render() {
    let content = this._renderGifsList(this.gifList);
    this.setHtmlContent(content);
  }
}
