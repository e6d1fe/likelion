const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onNameSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem("username", username);
  loginForm.classList.add("hidden");
  paintGreetings(username);
}

function paintGreetings() {
  const savedUserName = localStorage.getItem("username");
  if (savedUserName) {
    greeting.classList.remove("hidden");
    greeting.innerText = `Hello ${savedUserName}`;
    loginForm.classList.add("hidden");
  }
}

paintGreetings();

loginForm.addEventListener("submit", onNameSubmit);
