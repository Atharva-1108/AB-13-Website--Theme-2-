// Function to change language and handle UI updates
function setLanguage(language) {
  // Set language to localStorage or handle session storage if needed
  localStorage.setItem('language', language);

  // Change the page content based on the selected language
  if (language === 'english') {
      document.querySelector('.content').innerHTML = `
          <h1>Welcome to the Website</h1>
          <p>This is the default page in English.</p>
      `;
  } else if (language === 'prakrit') {
      document.querySelector('.content').innerHTML = `
          <h1>साइट पर स्वागत है</h1>
          <p>यह default पृष्ठ है Prakrit में।</p>
      `;
  }

  // Fade out the prompt and blur effect
  document.querySelector('.language-prompt').classList.add('hidden');
  document.querySelector('.blur-background').classList.add('hidden');

  // After fade-out, remove the elements for clean-up
  setTimeout(() => {
      document.querySelector('.language-prompt').style.display = 'none';
      document.querySelector('.blur-background').style.display = 'none';
  }, 1000);  // Matches fade duration
}

// Check if language preference is already set in localStorage
window.onload = () => {
  let language = localStorage.getItem('language');
  if (!language) {
      // If no language selected, show the language prompt
      document.querySelector('.language-prompt').style.display = 'block';
      document.querySelector('.blur-background').style.display = 'block';
  } else {
      // Load content based on saved language
      setLanguage(language);
  }
};
