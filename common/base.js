export class base {
  setId(id) {
    this.id = id;
  }

  setHtmlContent(content) {
    this.id.innerHTML = content;
  }
  setUrl(val){
    let url = `https://api.giphy.com/v1/gifs/search?q=${val}&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json`
    this.promise = fetch(url)
  }
}
