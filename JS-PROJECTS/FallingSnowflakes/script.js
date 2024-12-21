// script.js
const canvas = document.getElementById("snowCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let snowflakes = [];

// Create a snowflake
class Snowflake {
  constructor(x, y, radius, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "white";
    ctx.fill();
    ctx.closePath();
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    // Reset snowflake position when it falls off screen
    if (this.y > canvas.height) {
      this.y = 0;
      this.x = Math.random() * canvas.width;
    }

    if (this.x > canvas.width || this.x < 0) {
      this.x = Math.random() * canvas.width;
    }
  }
}

// Generate snowflakes
function createSnowflakes(count) {
  for (let i = 0; i < count; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 4 + 1; // Radius between 1 and 5
    const speedX = Math.random() * 1 - 0.5; // Horizontal speed
    const speedY = Math.random() * 3 + 1; // Vertical speed
    snowflakes.push(new Snowflake(x, y, radius, speedX, speedY));
  }
}

// Animation loop
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  snowflakes.forEach((snowflake) => {
    snowflake.draw();
    snowflake.update();
  });

  requestAnimationFrame(animate);
}

// Adjust canvas size on window resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  snowflakes = [];
  createSnowflakes(150);
});

// Initialize
createSnowflakes(150); // Create 150 snowflakes
animate();
