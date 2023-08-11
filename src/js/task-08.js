const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const emailInput = event.currentTarget.elements.email;
  const passwordInput = event.currentTarget.elements.password;

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Всі поля повинні бути заповнені!");
    return;
  }

  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };
  console.log(formData);
  loginForm.reset();
}
