function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorBtn = document.querySelector(".change-color");
const nameColorSpan = document.querySelector(".color");

changeColorBtn.addEventListener("click", () => {
  let randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  nameColorSpan.textContent = randomColor;
});
