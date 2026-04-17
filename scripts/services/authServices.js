export function signUpUser(userData, loginPage, signUpPage) {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (!userData || !userData.email) return;

  const { email } = userData;

  const userExist = users.find((user) => user.email === email);

  if (userExist) {
    switchToSignUp(loginPage, signUpPage);
    return;
  }

  users.push(userData);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", JSON.stringify(userData));
  window.location.href = "main.html";
}
export function loginUser(userPassword, userEmail, signUpPage, loginPage) {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  if (!userPassword || !userEmail) return;

  const userExist = users.find(
    (user) => user.email === userEmail && user.password === userPassword,
  );

  if (userExist) {
    localStorage.setItem("currentUser", JSON.stringify(userExist));
    window.location.href = "main.html";
  } else {
    switchToSignUp(loginPage, signUpPage);
    alert("sign up to get started");
  }
}

export function isValidEmail(email) {
  if (!email) return false;

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailPattern.test(email);
}
export function isValidName(name) {
  if (!name) return false;

  return name.trim().length >= 3;
}
function isLeapYear(year) {
  year = Number(year);

  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
export function isValidDate(day, month, year) {
  day = Number(day);
  month = Number(month);
  year = Number(year);
  if (!day || !month || !year) return false;
  if (month < 1 || month > 12) return false;
  const daysInMonth = [
    31,
    isLeapYear(year) ? 29 : 28,
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

  return day >= 1 && day <= daysInMonth[month - 1];
}
export function isValidPassword(password) {
  const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;

  return pattern.test(password);
}
export function switchToSignUp(loginPage, signUpPage) {
  if (!loginPage || !signUpPage) return;

  loginPage.classList.add("display-off");
  loginPage.classList.remove("display-on");

  signUpPage.classList.add("display-on");
  signUpPage.classList.remove("display-off");
}
export function redirectPage(showPage, hidePage) {
  if (!showPage || !hidePage) return;

  showPage.classList.add("display-on");
  showPage.classList.remove("display-off");

  hidePage.classList.add("display-off");
  hidePage.classList.remove("display-on");
}
export function inputFieldCheck(input, inputField, check, msgBox) {
  const content = msgBox.textContent;
  input.addEventListener("input", () => {
    const value = input.value;
    const isValid = check(value);

    if (value === "") {
      inputField.classList.remove("alarm-border");
      msgBox.textContent = content;
      msgBox.style.color = "var(--text-primary)";
      return;
    }

    if (!isValid) {
      inputField.classList.add("alarm-border");
      msgBox.style.color = "rgb(241, 10, 10)";
      msgBox.textContent =
        input.type === "password"
          ? "Password must contain uppercase, lowercase & number"
          : "Invalid email format";
      return;
    }

    inputField.classList.remove("alarm-border");
    msgBox.style.color = "green";
    msgBox.textContent = "Looks good ✓";
  });
}
