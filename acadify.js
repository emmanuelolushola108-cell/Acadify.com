"use strict";
const menuIcon = document.querySelector(".hamburger-menu");
const sideBar = document.querySelector(".side-bar");
const overlay = document.querySelector(".side-bar-overlay");

menuIcon.addEventListener("click", () => {
  sideBar.classList.add("active");
  overlay.classList.add("active");
});
overlay.addEventListener("click", () => {
  sideBar.classList.remove("active");
  overlay.classList.remove("active");
});
