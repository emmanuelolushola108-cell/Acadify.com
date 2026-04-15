"use strict";

let users = JSON.parse(localStorage.getItem("user")) || [];
const loginBtn = document.querySelector(".login-cta");
const createAccountBtn = document.querySelector(".submit-cta");
const signUpBtn = document.querySelector(".sign-up-cta");
const loginEmailInput = document.querySelector(".login-email");
const loginPasswordInput = document.querySelector(".login-password");
const forgetPasswordLink = document.querySelector(".forget-password");
const signSurnameInput = document.querySelector(".surname");
const signFirstName = document.querySelector(".first-name");
const signEmailInput = document.querySelector(".sign-email-input");
const signDay = document.querySelector(".day");
const signMonth = document.querySelector(".month");
const signYear = document.querySelector(".year");
const signUpPass = document.querySelector(".password-input");
const loginPage = document.querySelector(".login");
const signUpPage = document.querySelector(".sign-up-form");

const nameString = (name) => {
  if (!name) return;
  const n = name.trim().toLowerCase();
  return n[0].toUpperCase() + n.slice(1);
};

const isValidName = (name) => {
  return name && name.trim().length > 0;
};

const isValidEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const isLeapYear = (year) => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

const isValidDate = (day, month, year) => {
  // convert to numbers
  const d = Number(day);
  const m = Number(month);
  const y = Number(year);

  // basic checks
  if (!d || !m || !y) return false;
  if (isNaN(d) || isNaN(m) || isNaN(y)) return false;

  // month must be 1–12
  if (m < 1 || m > 12) return false;

  // days in each month
  const daysInMonth = [
    31,
    isLeapYear(y) ? 29 : 28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31,
  ];

  return d >= 1 && d <= daysInMonth[m - 1];
};
const isValidPassword = (p) => {
  const hasSpecialChar = /[^a-zA-Z0-9]/.test(p);

  return p && p.length >= 8 && hasSpecialChar;
};
signUpBtn.addEventListener("click", () => {
  loginPage.classList.add("display-off");
  signUpPage.classList.add("display-on");
});
createAccountBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const genderRadio = document.querySelector('input[name="gender"]:checked');
  if (
    !isValidEmail(signEmailInput.value) ||
    !isValidName(signFirstName.value) ||
    !isValidName(signSurnameInput.value) ||
    !isValidDate(signDay.value, signMonth.value, signYear.value) ||
    !genderRadio ||
    !isValidPassword(signUpPass.value)
  )
    return;
  const firstName = nameString(signFirstName.value);
  const lastName = nameString(signSurnameInput.value);
  const email = signEmailInput.value;
  const day = Number(signDay.value);
  const month = Number(signMonth.value);
  const year = Number(signYear.value);
  const gender = genderRadio?.value;
  const password = signUpPass.value;

  const userObject = {
    firstName,
    lastName,
    email,
    date: [day, month, year],
    gender,
    password,
  };

  users.push(userObject);
  localStorage.setItem("user", JSON.stringify(users));
  signFirstName.value =
    signSurnameInput.value =
    signEmailInput.value =
    signDay.value =
    signMonth.value =
    signYear.value =
    signUpPass.value =
      "";
  genderRadio.checked = false;
});
