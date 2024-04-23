const form = document.getElementById("number-form");
const numbersInput = document.getElementById("numbers");
const resultDiv = document.getElementById("result");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const numbers = numbersInput.value.split(",").map(Number);
    const min = Math.min(...numbers);
    const max = Math.max(...numbers);
    resultDiv.textContent = `Min: ${min}, Max: ${max}`;
});