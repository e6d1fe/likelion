const loginForm = document.getElementById("login-form");
const greeting = document.getElementById("greeting");

function greet(event) {
  console.log(event);
  event.preventDefault();
  const name = loginForm.firstElementChild.value;
  loginForm.classList.add("hidden");
  greeting.classList.remove("hidden");
  comment = "Hello, " + name + "!";
  greeting.innerText = comment;
}

loginForm.addEventListener("submit", greet);
