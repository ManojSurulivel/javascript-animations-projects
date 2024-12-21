// script.js
const canvas = document.getElementById("particleCanvas");
const ctx = canvas.getContext("2d");

// Resize canvas to fill the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const particles = [];

class Particle {
  constructor(x, y, color, size, velocity) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.size = size;
    this.velocity = velocity;
    this.life = 100; // Particle life span
  }

  update() {
    this.x += this.velocity.x;
    this.y += this.velocity.y;
    this.life -= 2; // Reduce life on each frame
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.life / 100})`;
    ctx.fill();
  }
}

function createParticles(x, y) {
  const colors = [
    { r: 255, g: 69, b: 0 },
    { r: 255, g: 140, b: 0 },
    { r: 255, g: 215, b: 0 },
    { r: 173, g: 216, b: 230 },
  ];

  for (let i = 0; i < 50; i++) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 5 + 2; // Particle size
    const angle = Math.random() * Math.PI * 2;
    const speed = Math.random() * 5;
    const velocity = {
      x: Math.cos(angle) * speed,
      y: Math.sin(angle) * speed,
    };

    particles.push(new Particle(x, y, color, size, velocity));
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((particle, index) => {
    if (particle.life <= 0) {
      particles.splice(index, 1); // Remove dead particles
    } else {
      particle.update();
      particle.draw();
    }
  });

  requestAnimationFrame(animate);
}

canvas.addEventListener("click", (e) => {
  createParticles(e.clientX, e.clientY);
});

animate();
