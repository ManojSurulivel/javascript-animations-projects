// script.js
const waveText = document.getElementById('waveText');

// Function to apply wave effect
function createWaveEffect(textElement) {
  const text = textElement.textContent;
  textElement.textContent = '';
  text.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.animationDelay = `${index * 0.1}s`;
    textElement.appendChild(span);
  });
}

// Apply wave effect to the text
createWaveEffect(waveText);
