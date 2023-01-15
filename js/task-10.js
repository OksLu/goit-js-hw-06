function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX.

const inputNumber = document.querySelector("input");
const boxesContainer = document.getElementById("boxes");
const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
let size = 30;

function createBoxes(amount) {
  const divArr = [];
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.width = `${size + 10 * i}px`;
    div.style.height = `${size + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    divArr.push(div);
  }
  return divArr;
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}

createBtn.addEventListener("click", () => {
  const boxEl = createBoxes(inputNumber.value);
  boxesContainer.append(...boxEl);
});

destroyBtn.addEventListener("click", destroyBoxes);
