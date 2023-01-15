const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const counter = document.getElementById("value");

let counterValue = 0;

console.log(decrementBtn, incrementBtn, counterValue);

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  counter.innerHTML = counterValue;
});

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  counter.innerHTML = counterValue;
});
