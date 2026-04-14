"use strict";
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

signUpBtn.addEventListener("click", () => {
  loginPage.classList.add("display-off");
  signUpPage.classList.add("display-on");
});
createAccountBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const fName = signFirstName.value;
  const lName = signSurnameInput.value;
  const email = signEmailInput.value;
  const day = Number(signDay.value);
  const month = Number(signMonth.value);
  const year = Number(signYear.value);
  let gender;
  const genderRadio = document.querySelector('input[name="gender"]:checked');
  if (genderRadio) {
    gender = genderRadio.value;
  }
  const password = signUpPass.value;

  console.log(fName, lName, email, day, month, year, gender, password);
});
