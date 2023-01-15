const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    window.alert("Будь ласка, заповніть всі поля");
  }

  console.log(`Email: ${email.value}, password: ${password.value}`);

  event.currentTarget.reset();
}
