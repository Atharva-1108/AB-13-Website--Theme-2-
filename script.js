// script.js

// For prompt transition on index.html
window.onload = () => {
  setTimeout(() => {
    document.getElementById("prompt-container").style.opacity = 0;
    setTimeout(() => {
      document.getElementById("prompt-container").style.display = "none";
    }, 500); // Fade out after 0.5s
  }, 3000); // Prompt disappears after 3 seconds
};

// For translation on translator.html
function translateText() {
  const input = document.getElementById('input-text').value.trim();
  const source = document.getElementById('source-lang').value;
  const target = document.getElementById('target-lang').value;
  const output = document.getElementById('output-text');

  if (!input) {
    output.value = 'Please enter some text.';
    return;
  }

  // Mock translation logic
  output.value = `[${source.toUpperCase()} → ${target.toUpperCase()}]\n"${
