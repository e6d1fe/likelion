let stars = "";

for (let i = 1; i <= 5; i++) {
  stars += "&nbsp".repeat(5 - i) + "*".repeat(i) + "<br>";
}

document.write(stars);
