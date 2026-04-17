"use strict";
import {
  signUpUser,
  loginUser,
  isValidDate,
  isValidEmail,
  isValidName,
  isValidPassword,
  switchToSignUp,
  redirectPage,
  inputFieldCheck,
} from "../services/authServices.js";

const loginPage = document.querySelector(".login");
const signUpPage = document.querySelector(".sign-up-page");
const surnameInput = document.querySelector(".surname");
const firstNameInput = document.querySelector(".first-name");
const signEmailInput = document.querySelector(".email-input");
const dayInput = document.querySelector(".day");
const monthInput = document.querySelector(".month");
const yearInput = document.querySelector(".year");
const genderInput = document.querySelector("input[name='gender']:checked");
const signPasswordInput = document.querySelector(".password-input");
const signUpBtn = document.querySelector(".submit-cta");
const loginRedirectBtn = document.querySelector(".login-redirect");
const loginBtn = document.querySelector(".login-cta");
const signUpRedirectBtn = document.querySelector(".signup-redirect");
const loginPassword = document.querySelector(".login-password");
const loginEmail = document.querySelector(".login-email");
const passwordLabel = document.querySelector(".password-label");
const emailLabel = document.querySelector(".email-label");

loginBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const email = loginEmail.value;
  const password = loginPassword.value;
  console.log(email, password);
  loginUser(password, email, signUpPage, loginPage);
  loginPassword.value = loginEmail.value = "";
});
signUpBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const firstName = firstNameInput.value;
  const surname = surnameInput.value;
  const email = signEmailInput.value;
  const password = signPasswordInput.value;

  const d = dayInput.value;
  const m = monthInput.value;
  const y = yearInput.value;

  const gender = document.querySelector("input[name='gender']:checked")?.value;

  const isValidNameF = isValidName(firstName);
  const isValidNameS = isValidName(surname);
  const isValidEmailr = isValidEmail(email);
  const isValidPasswordr = isValidPassword(password);
  const isValidDater = isValidDate(d, m, y);

  if (
    !isValidDater ||
    !isValidEmailr ||
    !isValidNameF ||
    !isValidNameS ||
    !isValidPasswordr ||
    !gender
  ) {
    return alert("input not correct");
  }

  const userData = {
    firstName,
    surname,
    email,
    date: { day: d, month: m, year: y },
    gender,
    password,
  };

  signUpUser(userData, loginPage, signUpPage);

  firstNameInput.value =
    surnameInput.value =
    signEmailInput.value =
    signPasswordInput.value =
    dayInput.value =
    monthInput.value =
    yearInput.value =
      "";
});
loginRedirectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  redirectPage(loginPage, signUpPage);
  firstNameInput.value =
    surnameInput.value =
    signEmailInput.value =
    signPasswordInput.value =
    dayInput.value =
    monthInput.value =
    yearInput.value =
      "";
});
signUpRedirectBtn.addEventListener("click", (e) => {
  e.preventDefault();
  redirectPage(signUpPage, loginPage);
  firstNameInput.value =
    surnameInput.value =
    signEmailInput.value =
    signPasswordInput.value =
    dayInput.value =
    monthInput.value =
    yearInput.value =
      "";
});
inputFieldCheck(
  signPasswordInput,
  signPasswordInput,
  isValidPassword,
  passwordLabel,
);
inputFieldCheck(signEmailInput, signEmailInput, isValidEmail, emailLabel);
