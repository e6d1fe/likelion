const box = document.getElementById("dropdown-box");
const hi = document.getElementById("hi");

function changeColor(event) {
  const target = event.target.value;

  if (target === "red") {
    hi.style.color = "red";
  } else if (target === "orange") {
    hi.style.color = "orange";
  } else if (target === "yellow") {
    hi.style.color = "yellow";
  } else if (target === "green") {
    hi.style.color = "green";
  } else if (target === "blue") {
    hi.style.color = "blue";
  } else if (target === "navy") {
    hi.style.color = "navy";
  } else if (target === "purple") {
    hi.style.color = "purple";
  } else if (target === "black") {
    hi.style.color = "black";
  }
}

box.addEventListener("change", changeColor);
