const state = {
  colors: ['#e367a4', '#48b1f3'],
  directions:[0,45,90,135,180,225,270,315],
  currentDirection: 90,
};

/**
 * Init function that update UI
 */
const init = () => {
  makeBtnsDirection();
  makeLegendColors();
  makeGradient();
  makeCssCode();
};

/**
 * Function that generate hexadecimal color
 */
const randomHexaColorGenerator = () => `#${Math.random().toString(16).slice(2, 8)}`;

/**
 * Generate directionnals buttons HTML
 */
const makeBtnsDirection = () => {
  const {directions, currentDirection} = state;
  const container = document.getElementById('directionBtns');
  container.innerHTML = ''; // Clean UI element before update

  // HTML buttons generation
  directions.forEach(direction => {
    const btn = document.createElement('button');
    btn.className = 'button';
    btn.setAttribute('data-direction', direction); // Data attr used by event listener
    btn.textContent = direction;

    if(direction === currentDirection) btn.classList.add('current');

    btn.addEventListener('click', (e) => handleChangeDirection(e.target.dataset.direction));

    container.append(btn);
  });
}

/**
 * Generate legend colors of gradient tool
 */
const makeLegendColors = () => {
  const {colors, currentDirection} = state;
  const colorsContainer = document.getElementById('colors');
  colorsContainer.innerHTML= ''; // Clean UI element before update

  // HTML legend colors generation
  colors.forEach((color, index) => {
    const span = document.createElement('span');
    span.style.color = color;
    span.textContent = color;

    // Generate arrow that indicate gradient direction
    const spanArrow = document.createElement('span');
    spanArrow.id = 'directionArrow';
    spanArrow.style.transform = `rotate(${currentDirection}deg)`;
    spanArrow.textContent = ' ↑ ';

    colorsContainer.append(span);

    // Insert arrow only between 2 legend colors
    if(index < colors.length-1) colorsContainer.append(spanArrow);

  });

};

/**
 * Generate visual gradient UI
 */
const makeGradient = () => {
  const {colors, currentDirection} = state;
  const gradient = document.getElementById('gradient');
  gradient.style.background = `linear-gradient(${currentDirection}deg, ${[...colors]})`;
};

/**
 * Generate CSS code of gradient
 */
const makeCssCode = () => {
  const {colors, currentDirection} = state;
  const cssCodeGenerator = document.getElementById('cssCodeGenerator');
  const code = `background-color: linear-gradient(${currentDirection}deg, ${[...colors]});`;
  cssCodeGenerator.innerHTML = ''; // Clean UI element before update
  cssCodeGenerator.append(code);
};

/**
 * Change gradient direction and update UI
 * @param {number} newDirection 
 */
const handleChangeDirection = (newDirection) => {
  state.currentDirection = Number(newDirection);
  init();
};

document.addEventListener("DOMContentLoaded", init());
