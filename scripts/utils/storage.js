export function saveUsers(userData) {
  users.push(userData);
  localStorage.setItem("users", JSON.stringify(users));
}
export function currentUser(userData) {
  localStorage.setItem("currentUser", JSON.stringify(userData));
}
