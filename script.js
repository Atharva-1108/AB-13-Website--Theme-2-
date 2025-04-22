window.onload = () => {
  const overlay = document.getElementById("overlay");
  const prompt = document.getElementById("language-prompt");
  const mainContent = document.getElementById("main-content");

  const englishBtn = document.getElementById("english-btn");
  const prakritBtn = document.getElementById("prakrit-btn");

  // Show prompt and blur until selection
  overlay.style.display = "block";
  prompt.style.display = "flex";

  englishBtn.onclick = () => {
    localStorage.setItem("lang", "english");
    transitionToMain();
  };

  prakritBtn.onclick = () => {
    localStorage.setItem("lang", "prakrit");
    transitionToMain();
  };

  function transitionToMain() {
    prompt.classList.add("fade-out");
    overlay.classList.add("fade-out");

    setTimeout(() => {
      prompt.style.display = "none";
      overlay.style.display = "none";
      mainContent.style.display = "block";
    }, 1000); // 1 second fade
  }
};
