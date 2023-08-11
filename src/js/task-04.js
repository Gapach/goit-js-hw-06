const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById("value");

let counterValue = 0;

function updateCounterDisplay() {
  valueSpan.textContent = counterValue;
}

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  updateCounterDisplay();
});

incrementBtn.addEventListener("click", () => {
  counterValue += 1;
  updateCounterDisplay();
});

updateCounterDisplay();
