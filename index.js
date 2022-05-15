import { searchItemSection } from "./searchItems/searchItems.js";
import { searchItemsData } from "./searchItems/searchItemsData.js";
import { gifSection } from "./gifs/gif.js";

import { searchUrl } from "./config/config.js";
import { trendingUrl } from "./config/config.js";
import { params } from "./config/config.js";
let searchItem = document.getElementById("searchItem");
let serachItemsID = document.getElementById("searchItems");
let serchItemsBlock = new searchItemSection();
serchItemsBlock.setItemList = searchItemsData;
serchItemsBlock.id = serachItemsID;
serchItemsBlock.render();

let gifsID = document.getElementById("gifs");
let gifsBlock = new gifSection();
gifsBlock.id = gifsID;

let trending = document.getElementById("trending");
let buttons = document.getElementsByClassName("search_item");
let submit = document.getElementById("submit");

function fetchData(val) {
  fetch(
    `${searchUrl}/search?q=${val}&limit=${params.limit}&api_key=${params.apiKey}&fmt=${params.fmt}`
  )
    .then((response) => response.json())
    .then((data) => {
      gifsBlock.setItemList = data["data"];
      gifsBlock.render();
    });
}

for (let i = 0; i < buttons.length; i++) {
  buttons[i].onclick = function () {
    fetchData(buttons[i].value);
  };
}

trending.onclick = function () {
  fetch(
    `${trendingUrl}&limit=${params.limit}&api_key=${params.apiKey}&fmt=${params.fmt}`
  )
    .then((response) => response.json())
    .then((data) => {
      gifsBlock.setItemList = data["data"];
      gifsBlock.render();
    });
};

submit.onclick = function () {
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
