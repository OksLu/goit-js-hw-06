const inputRange = document.getElementById("font-size-control");

const textEl = document.getElementById("text");

inputRange.addEventListener("input", (event) => {
  textEl.style.fontSize = `${event.currentTarget.value}px`;
});
