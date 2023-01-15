const inputEl = document.getElementById("validation-input");
const validLength = Number(inputEl.getAttribute("data-length"));

inputEl.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length != validLength) {
    inputEl.classList.add("invalid");
  } else {
    if (inputEl.classList.contains("invalid")) {
      inputEl.classList.replace("invalid", "valid");
    }
  }
});
