// Save this as script.js
const button = document.getElementById('colorBtn');

button.addEventListener('click', () => {
  // Random background color on button click
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  document.body.style.backgroundColor = randomColor;
});
