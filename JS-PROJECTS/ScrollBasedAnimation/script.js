// script.js

// Select all elements with the class "box"
const boxes = document.querySelectorAll('.box');

// Function to check the position of each box
function checkBoxes() {
  const triggerBottom = window.innerHeight * 0.8; // Set trigger point at 80% of the viewport height

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    // Add or remove the "active" class based on scroll position
    if (boxTop < triggerBottom) {
      box.classList.add('active');
    } else {
      box.classList.remove('active');
    }
  });
}

// Add the scroll event listener
window.addEventListener('scroll', checkBoxes);

// Initial check on page load
checkBoxes();
