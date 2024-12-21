const phrases = [
    "Welcome to my channel!",
    "Creating amazing JavaScript animations.",
    "Enjoy the journey of coding!"
  ];
  
  const typingElement = document.getElementById("typing");
  let currentPhraseIndex = 0;
  let currentCharIndex = 0;
  let isDeleting = false;
  
  function typeEffect() {
    const currentPhrase = phrases[currentPhraseIndex];
  
    if (isDeleting) {
      // Deleting characters
      typingElement.textContent = currentPhrase.substring(0, currentCharIndex--);
      if (currentCharIndex < 0) {
        isDeleting = false;
        currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length; // Move to the next phrase
      }
    } else {
      // Typing characters
      typingElement.textContent = currentPhrase.substring(0, currentCharIndex++);
      if (currentCharIndex > currentPhrase.length) {
        isDeleting = true; // Start deleting after fully typing
        setTimeout(typeEffect, 1000); // Pause at the end of the phrase
        return;
      }
    }
  
    const speed = isDeleting ? 50 : 100; // Adjust speed for typing and deleting
    setTimeout(typeEffect, speed);
  }
  
  // Start the typing effect
  typeEffect();
  