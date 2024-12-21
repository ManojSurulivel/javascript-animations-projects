const cube = document.querySelector('.cube');

let rotateX = 0;
let rotateY = 0;
let speedX =  0.1;
let speedY = 0.1;

document.addEventListener('mousemove', (e) => {
  const {clientX, clientY, innerWidth, innerHeight} = e;

  speedX = ((clientY / innerHeight) - 0.5) * 2;
  speedY = ((clientX / innerWidth) - 0.5 ) * 2;
})

function animationCube(){
  rotateX += speedX;
  rotateY += speedY;

  cube.computedStyleMap.transform = `rotateX(${rotateX}deg) rotateY(${rotate}deg)`;

  requestAnimationFrame(animateCube);
}

animateCube();