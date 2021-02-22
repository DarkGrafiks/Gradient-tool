const state = {
  colors: ['#e367a4', '#48b1f3'],
  direction: '90deg',
};

const init = () => {
  makeColors();
  makeGradient();
}

// Générer 2 couleurs aléatoires
const randomHexaColorGenerator = () => `#${Math.random().toString(16).slice(2, 8)}`;
// Générer les colors
const makeColors = () => {
  const {colors} = state;
  const colorsContainer = document.getElementById('colors');

  colors.forEach((color, index) => {
    const span = document.createElement('span');
    span.style.color = color;
    span.textContent = color;
    colorsContainer.append(span);
    
    if(index < colors.length-1) colorsContainer.append(' → ');

  });

};

// Appliquer les colors au dégradé
const makeGradient = () => {
  const {colors} = state;
  const gradient = document.getElementById('gradient');
  gradient.style.background = `linear-gradient(90deg, ${[...colors]})`;
}

// Générer un dégradé
// Changer le direction du dégradé
// Renseigner le code CSS

document.addEventListener("DOMContentLoaded", init());
