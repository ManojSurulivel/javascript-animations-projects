const canvas = document.getElementById("bouncingBall");
const ctx = canvas.getContext("2d");

// Set canvas size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Ball properties
let ball = {
  x: canvas.width / 2, // Initial x position
  y: canvas.height / 2, // Initial y position
  radius: 20,          // Ball radius
  dx: 4,               // X-axis velocity
  dy: 4,               // Y-axis velocity
  color: "lime"        // Ball color
};

// Animation loop
function animate() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the ball
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
  ctx.closePath();

  // Ball collision with walls
  if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
    ball.dx = -ball.dx; // Reverse x direction
    changeColor();
  }
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.dy = -ball.dy; // Reverse y direction
    changeColor();
  }

  // Update ball position
  ball.x += ball.dx;
  ball.y += ball.dy;

  // Request the next animation frame
  requestAnimationFrame(animate);
}

// Change ball color randomly
function changeColor() {
  ball.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
}

// Start animation
animate();
