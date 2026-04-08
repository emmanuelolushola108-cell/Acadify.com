"use strict";
const menuIcon = document.querySelector(".hamburger-menu");
const sideBar = document.querySelector(".side-bar");
const overlay = document.querySelector(".side-bar-overlay");
const addFileBtn = document.querySelector(".add-btn");
const userInputField = document.querySelector(".user-input-field");
const userInputOverlay = document.querySelector(".user-input-overlay");
const addCta = document.querySelector(".add-files-cta");
const blogSlide = document.querySelectorAll(".blog-slide").length;
// const slideCon = document.querySelector(".blog-slides");
// const nextSlideBtn = document.querySelector(".next-slide");
// const slideWidth = document.querySelector(".blog-slides").clientWidth;

document.addEventListener("DOMContentLoaded", () => {
  const slideCon = document.querySelector(".blog-slides");
  const slides = document.querySelectorAll(".blog-slide");
  const nextBtn = document.querySelector(".next-slide");
  const prevBtn = document.querySelector(".previous-button");

  let i = 0;

  nextBtn.addEventListener("click", () => {
    if (i < slides.length - 1) {
      i++;
      slideCon.style.transform = `translateX(-${i * 104}%)`;
    }
  });
  prevBtn.addEventListener("click", () => {
    if (i > 0) {
      i--;
      console.log(i);
      slideCon.style.transform = `translateX(-${i * 104}%)`;
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
  userInputOverlay.classList.remove("active");
  userInputField.classList.remove("user-active");
});
addFileBtn.addEventListener("click", () => {
  userInputOverlay.classList.add("active");
  userInputField.classList.add("user-active");
});
userInputOverlay.addEventListener("click", () => {
  userInputField.classList.remove("user-active");
  userInputOverlay.classList.remove("active");
});
addCta.addEventListener("click", () => {
  userInputOverlay.classList.remove("active");
  userInputField.classList.remove("user-active");
});
