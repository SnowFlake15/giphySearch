import { addItem } from "./searchItems.js";
let searchItems = [
  "Internet Cats",
  "Meme's",
  "Typing",
  "Space",
  "Rick and Morty",
];
import { gifSection } from "./gifs/gif.js";
let searchItem = document.getElementById("searchItem");

let serachItemsID = document.getElementById("searchItems");
let serchItemsBlock = new addItem();
serchItemsBlock.setItemList = searchItems;
serchItemsBlock.id = serachItemsID;
serchItemsBlock.render();

function fetchData(val) {
  fetch(
    `https://api.giphy.com/v1/gifs/${val}?limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json`
  )
    .then((response) => response.json())
    .then((data) => console.log(data["data"]));
}

document.getElementById("trending").onclick = function () {
  // let data = fetchData("trending")
  // console.log(data)
  fetch(
    `https://api.giphy.com/v1/gifs/trending?limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data["data"]);
      let gifsID = document.getElementById("gifs");
    let gifsBlock = new gifSection();
    gifsBlock.setItemList = data["data"]
    gifsBlock.id = gifsID;
    // gifsBlock.setUrl = searchItem.value;
    gifsBlock.render();
    });
};

document.getElementById("submit").onclick = function () {
  console.log(searchItem.value);
  if (searchItem.value.length > 0) {
    searchItems.shift();
    searchItems.push(searchItem.value);
    console.log(searchItems);
    serchItemsBlock.setItemList = searchItems;
    serchItemsBlock.render();
    let url = `https://api.giphy.com/v1/gifs/search?q=${searchItem.value}&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json`;
    let promise = fetch(url);
    // promise.then((res)=>{
    //     console.log(res)
    //     // infolock.setInfoList = res;
    //     // infolock.render()
    // });
    console.log(url);
    promise.then((res) => {
      // console.log(res.json())
      return res.json();
    });
    promise.then((res) => {
      console.log("resp", res);
      // infolock.setInfoList = res;
      // infolock.render()
    });
    let gifsID = document.getElementById("gifs");
    let gifsBlock = new gifSection();
    // gifsBlock.setItemList = searchItems
    gifsBlock.id = gifsID;
    gifsBlock.setUrl = searchItem.value;
    gifsBlock.render();
  }
};
