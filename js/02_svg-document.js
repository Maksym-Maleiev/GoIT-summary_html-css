const viewBoxState = {
  x: 0,
  y: 0,
  width: 400,
  height: 200,
};

const controlsRef = document.querySelector('.js-controls');
const outputXRef = document.querySelector('[data-x]');
const outputYRef = document.querySelector('[data-y]');
const outputWidthRef = document.querySelector('[data-width]');
const outputHeightRef = document.querySelector('[data-height]');
const svgRef = document.querySelector('.js-vector');

setOutput();
updateSVG();

controlsRef.addEventListener('input', event => {
  const { name, value } = event.target;
  viewBoxState[name] = value;
  setOutput();
  updateSVG();
});

function setOutput() {
  const { x, y, width, height } = viewBoxState;
  outputXRef.textContent = x;
  outputYRef.textContent = y;
  outputWidthRef.textContent = width;
  outputHeightRef.textContent = height;
}

function updateSVG() {
  const { x, y, width, height } = viewBoxState;
  svgRef.setAttribute('viewBox', `${x} ${y} ${width} ${height}`);
}
