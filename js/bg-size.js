const controls = document.querySelector(".controls");
const wrapper = document.querySelector(".wrapper");
const label = wrapper.querySelector(".label");

controls.addEventListener("click", onControlsClick);

function onControlsClick(e) {
  const { size } = e.target.dataset;
  wrapper.style.backgroundSize = size;
  label.textContent = size;
}
