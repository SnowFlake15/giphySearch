import { searchItemSection } from "./searchItems/searchItems.js";
import { searchItemsData } from "./searchItems/searchItemsData.js";
import { gifSection } from "./gifs/gif.js";

import{url} from "./config/config.js"
import{apiKey} from "./config/config.js"
import{limit} from "./config/config.js"

let searchItem = document.getElementById("searchItem");
let serachItemsID = document.getElementById("searchItems");
let serchItemsBlock = new searchItemSection();
serchItemsBlock.setItemList = searchItemsData;
serchItemsBlock.id = serachItemsID;
serchItemsBlock.render();

let gifsID = document.getElementById("gifs");
let gifsBlock = new gifSection();
gifsBlock.id = gifsID;

function fetchData(val) {
  fetch(
    `${url}/search?q=${val}&limit=${limit}&api_key=${apiKey}&fmt=json`
  )
    .then((response) => response.json())
    .then((data) => {
      gifsBlock.setItemList = data["data"];
      gifsBlock.render();
    });
}
let buttons = document.getElementsByClassName("search_item");
for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    fetchData(buttons[i].value);
  };
}

document.getElementById("trending").onclick = function () {
  fetch(
    `${url}/trending?limit=${limit}&api_key=${apiKey}&fmt=json`
  )
    .then((response) => response.json())
    .then((data) => {
      gifsBlock.setItemList = data["data"];
      gifsBlock.render();
    });
};

document.getElementById("submit").onclick = function () {
  if (searchItem.value.length > 0) {
    searchItemsData.shift();
    searchItemsData.push(searchItem.value);
    serchItemsBlock.setItemList = searchItemsData;
    serchItemsBlock.render();

    fetchData(searchItem.value);
  }
  let buttons = document.getElementsByClassName("search_item");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
      fetchData(buttons[i].value);
    };
  }
};
