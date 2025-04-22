document.addEventListener("DOMContentLoaded", function () {
  const prompt = document.getElementById("prompt");
  const mainContent = document.getElementById("main-content");
  const translatorPage = document.getElementById("translator-page");

  // Check if the user has already selected a language
  const selectedLanguage = localStorage.getItem("language");

  if (selectedLanguage) {
    showMainPage(); // If language is already selected, skip the prompt and show main page
  } else {
    prompt.classList.remove("hidden"); // Show the prompt if language hasn't been selected
  }

  // Handle language selection
  document.getElementById("english-btn").addEventListener("click", function () {
    localStorage.setItem("language", "english"); // Save the language choice
    showMainPage(); // Show the main page
  });

  document.getElementById("prakrit-btn").addEventListener("click", function () {
    localStorage.setItem("language", "prakrit"); // Save the language choice
    showMainPage(); // Show the main page
  });

  // Function to hide the prompt and show the main content
  function showMainPage() {
    prompt.classList.add("fadeOut");
    setTimeout(function () {
      prompt.classList.add("hidden"); // Hide prompt after fadeOut
      mainContent.classList.remove("hidden");
      mainContent.classList.add("fadeIn"); // Show main content with fadeIn animation
    }, 500); // Time to wait for the fadeOut to complete
  }

  // Show the translator page when the translate button is clicked
  document.getElementById("translate-btn").addEventListener("click", function () {
    mainContent.classList.add("fadeOut");
    setTimeout(function () {
      mainContent.classList.add("hidden");
      translatorPage.classList.remove("hidden");
      translatorPage.classList.add("fadeIn"); // Show the translator page with fadeIn animation
    }, 500);
  });

  // Example of fetching translation (you can integrate with a translation API here)
  document.getElementById("translate-submit").addEventListener("click", function () {
    let inputText = document.getElementById("input-text").value;
    // Call your translation API and get the translated text
    let translatedText = "Translated text would appear here";  // This should come from the API
    document.getElementById("output-text").value = translatedText;
  });

  // Go back to the main page from the translator page
  document.getElementById("back-btn").addEventListener("click", function () {
    translatorPage.classList.add("fadeOut");
    setTimeout(function () {
      translatorPage.classList.add("hidden");
      mainContent.classList.remove("hidden");
      mainContent.classList.add("fadeIn");
    }, 500);
  });
});
