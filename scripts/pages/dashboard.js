"use strict";
const sessionUser = localStorage.getItem("currentUser");
let currentUser;
const welMsg = document.querySelector(".msg");
if (sessionUser) {
  currentUser = JSON.parse(sessionUser);
  welMsg.textContent = `${currentUser.firstName}`;
}
