"use strict";
import { displaySideBar } from "../components/sidebar.js";
const sessionUser = localStorage.getItem("currentUser");
let currentUser;
const welMsg = document.querySelector(".msg");
if (sessionUser) {
  currentUser = JSON.parse(sessionUser);
  welMsg.textContent = `${currentUser.firstName}`;
}

displaySideBar();
