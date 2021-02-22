const state = {
  colors: ['#e367a4', '#48b1f3'],
  directions:[0,45,90,135,180,225,270,315],
  currentDirection: 90,
};

const init = () => {
  makeBtnsDirection();
  makeLegendColors();
  makeGradient();
  makeCssCode();
};

const randomHexaColorGenerator = () => `#${Math.random().toString(16).slice(2, 8)}`;

const makeBtnsDirection = () => {
  const {directions, currentDirection} = state;
  const container = document.getElementById('directionBtns');
  container.innerHTML = '';

  directions.forEach(direction => {
    console.log(direction, currentDirection);
    const btn = document.createElement('button');
    btn.className = 'button';
    btn.setAttribute('data-direction', direction);
    btn.textContent = direction;
    if(direction === currentDirection) btn.classList.add('current');
    btn.addEventListener('click', (e) => handleChangeDirection(e.target.dataset.direction));
    container.append(btn);
  });
}

const makeLegendColors = () => {
  const {colors, currentDirection} = state;
  const colorsContainer = document.getElementById('colors');

  colorsContainer.innerHTML= '';

  colors.forEach((color, index) => {
    const span = document.createElement('span');
    span.style.color = color;
    span.textContent = color;

    const spanArrow = document.createElement('span');
    spanArrow.id = 'directionArrow';
    spanArrow.style.transform = `rotate(${currentDirection}deg)`;
    spanArrow.textContent = ' ↑ ';

    colorsContainer.append(span);

    if(index < colors.length-1) colorsContainer.append(spanArrow);

  });

};

const makeGradient = () => {
  const {colors, currentDirection} = state;
  const gradient = document.getElementById('gradient');
  gradient.style.background = `linear-gradient(${currentDirection}deg, ${[...colors]})`;
};

const makeCssCode = () => {
  const {colors, currentDirection} = state;
  const cssCodeGenerator = document.getElementById('cssCodeGenerator');
  const code = `background-color: linear-gradient(${currentDirection}deg, ${[...colors]});`;
  cssCodeGenerator.innerHTML = '';
  cssCodeGenerator.append(code);
};

const handleChangeDirection = (newDirection) => {
  state.currentDirection = Number(newDirection);
  init();
};

document.addEventListener("DOMContentLoaded", init());
