"use strict";
const menuIcon = document.querySelector(".hamburger-menu");
const sideBar = document.querySelector(".side-bar");
const overlay = document.querySelector(".side-bar-overlay");

document.addEventListener("DOMContentLoaded", () => {
  const slideCon = document.querySelector(".blog-slides");
  const slides = document.querySelectorAll(".blog-slide");
  const nextBtn = document.querySelector(".next-slide");
  const prevBtn = document.querySelector(".previous-button");

  let i = 0;

  nextBtn.addEventListener("click", () => {
    if (i < slides.length - 1) {
      i++;
      slideCon.style.transform = `translateX(-${i * 100}%)`;
    }
  });
  prevBtn.addEventListener("click", () => {
    if (i > 0) {
      i--;
      console.log(i);
      slideCon.style.transform = `translateX(-${i * 100}%)`;
    }
  });
});

menuIcon.addEventListener("click", () => {
  sideBar.classList.add("active");
  overlay.classList.add("active");
});
overlay.addEventListener("click", () => {
  sideBar.classList.remove("active");
  overlay.classList.remove("active");
});
