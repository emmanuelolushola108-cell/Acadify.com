"use strict";

export function displaySideBar() {
  const menuIcon = document.querySelector(".hamburger-menu");
  const sideBar = document.querySelector(".side-bar");
  const overlay = document.querySelector(".side-bar-overlay");
  if (!menuIcon || !sideBar || !overlay) return;
  menuIcon.addEventListener("click", () => {
    sideBar.classList.toggle("active");
    overlay.classList.toggle("active");
  });
  overlay.addEventListener("click", () => {
    sideBar.classList.remove("active");
    overlay.classList.remove("active");
  });
}
