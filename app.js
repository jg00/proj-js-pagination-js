import fetchFollowers from "./fetchFollowers.js";
import displayFollowers from "./displayFollowers.js";
import paginate from "./paginate.js";
import displayButtons from "./displayButtons.js";

const title = document.querySelector(".section-title h1");
const btnContainer = document.querySelector(".btn-container");

let index = 0;
let pages = [];

const setupUI = () => {
  displayFollowers(pages[index]);
  displayButtons(btnContainer, pages, index);
};

const init = async () => {
  const followers = await fetchFollowers();
  // displayFollowers(paginate(followers)[0]);
  title.textContent = "pagination";
  pages = paginate(followers);
  setupUI();
};

// Page Buttons
btnContainer.addEventListener("click", function (e) {
  if (e.target.classList.contains("btn-container")) return;

  if (e.target.classList.contains("page-btn")) {
    index = parseInt(e.target.dataset.index);
  }

  if (e.target.classList.contains("next-btn")) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }

  if (e.target.classList.contains("prev-btn")) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }

  setupUI();
});

window.addEventListener("load", init);

/*
  paginate(full list of items) and returns array of array chunks of followers
  const pages = paginate(followers);
  // console.log(pages); // (12) [Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(9), Array(1)]
*/