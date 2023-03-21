const ctrlsForm = document.querySelector('.controls-form');
const circle = document.querySelector('.circle');

ctrlsForm.addEventListener('submit', e => {
  e.preventDefault();

  const { submit: submitBtn, option } = e.currentTarget.elements;

  circle.style.animationDirection = option.value;
  circle.classList.toggle('is-animated');

  const isAnimated = circle.classList.contains('is-animated');

  option.forEach(el => (el.disabled = isAnimated));

  submitBtn.textContent = isAnimated ? 'Stop' : 'Start';
});
