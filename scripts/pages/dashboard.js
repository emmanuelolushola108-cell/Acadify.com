"use strict";
import { displaySideBar } from "../components/sidebar.js";
import { goTo } from "../services/authServices.js";
const sessionUser = localStorage.getItem("currentUser");
let currentUser;
const welMsg = document.querySelector(".msg");
const filePageBtn = document.querySelector(".file-page");
if (sessionUser) {
  currentUser = JSON.parse(sessionUser);
  welMsg.textContent = `${currentUser.firstName}`;
}

goTo(filePageBtn, "files.html");
displaySideBar();
