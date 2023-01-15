const input = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

function handleInputName(event) {
  nameOutput.textContent = event.currentTarget.value;
  if (event.target.value === "") {
    nameOutput.textContent = "Anonymous";
  }
}

input.addEventListener("input", handleInputName);
