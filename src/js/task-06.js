const validationInput = document.getElementById("validation-input");
function checkValidation() {
  const requiredLength = parseInt(validationInput.getAttribute("data-length"));
  const inputValue = validationInput.value.length;

  if (inputValue === requiredLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}

validationInput.addEventListener("blur", checkValidation);
