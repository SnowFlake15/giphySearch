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
function renderItems() {
  console.log(this.value);
}
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
// console.log(document.getElementsByClassName("search_item"))
let buttons = document.getElementsByClassName("search_item")
for(let i=0; i<buttons.length;i++ ){
    // console.log(buttons[i])
    buttons[i].onclick= function(){
        console.log('buttons[i].value')
        fetch(
            `https://api.giphy.com/v1/gifs/search?q=${buttons[i].value}&limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json`
          )
            .then((response) => response.json())
            .then((data) => {
            //   console.log(data["data"]);
              let gifsID = document.getElementById("gifs");
              let gifsBlock = new gifSection();
              gifsBlock.setItemList = data["data"];
              gifsBlock.id = gifsID;
              gifsBlock.render();
            });
    }
}

document.getElementById("trending").onclick = function () {
  //   if (searchItem.value.length > 0) {
  fetch(
    `https://api.giphy.com/v1/gifs/trending?limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json`
  )
    .then((response) => response.json())
    .then((data) => {
      // console.log(data["data"]);
      let gifsID = document.getElementById("gifs");
      let gifsBlock = new gifSection();
      gifsBlock.setItemList = data["data"];
      gifsBlock.id = gifsID;
      gifsBlock.render();
    });
  //   }
};

document.getElementById("submit").onclick = function () {
  //   console.log(searchItem.value);
  if (searchItem.value.length > 0) {
    searchItems.shift();
    searchItems.push(searchItem.value);
    // console.log(searchItems);
    serchItemsBlock.setItemList = searchItems;
    serchItemsBlock.render();
    fetch(
      `https://api.giphy.com/v1/gifs/search?q=${searchItem.value}&limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json`
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data["data"]);
        let gifsID = document.getElementById("gifs");
        let gifsBlock = new gifSection();
        gifsBlock.setItemList = data["data"];
        gifsBlock.id = gifsID;
        gifsBlock.render();
      });
  }
  let buttons = document.getElementsByClassName("search_item");
  for (let i = 0; i < buttons.length; i++) {
    // console.log(buttons[i])
    buttons[i].onclick = function () {
      console.log("buttons[i].value");
      fetch(
        `https://api.giphy.com/v1/gifs/search?q=${buttons[i].value}&limit=10&api_key=aFFKTuSMjd6j0wwjpFCPXZipQbcnw3vB&fmt=json`
      )
        .then((response) => response.json())
        .then((data) => {
          //   console.log(data["data"]);
          let gifsID = document.getElementById("gifs");
          let gifsBlock = new gifSection();
          gifsBlock.setItemList = data["data"];
          gifsBlock.id = gifsID;
          gifsBlock.render();
        });
    };
  }
};
