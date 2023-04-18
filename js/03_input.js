const rangeInput = document.querySelector('input[type="range"]');
const output = document.querySelector('.js-selected-value');
rangeInput.addEventListener('input', e => (output.textContent = e.target.value));
