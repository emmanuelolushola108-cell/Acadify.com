export function signUpUser(userData, loginPage, signUpPage) {
  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (!userData || !userData.email) return;

  const { email } = userData;

  const userExist = users.find((user) => user.email === email);

  if (userExist) {
    loginPage.classList.toggle("display-on");
    signUpPage.classList.toggle("display-off");
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
    signUpPage.classList.add("display-on");
    loginPage.classList.add("display-off");
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
