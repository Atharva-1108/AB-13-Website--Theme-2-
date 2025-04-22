// Show prompt on page load
window.addEventListener('load', () => {
  document.getElementById('overlay').style.display = 'block';
  document.getElementById('language-prompt').style.display = 'flex';
});

// Language selection
function selectLanguage(lang) {
  document.getElementById('overlay').classList.add('fade-out');
  document.getElementById('language-prompt').classList.add('fade-out');
  setTimeout(() => {
    document.getElementById('overlay').style.display = 'none';
    document.getElementById('language-prompt').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
  }, 1000);
}

// In-memory record storage
const records = [];

// Handle tax calculation and storing data
function calculateTaxAndStore() {
  const name = document.getElementById('name').value;
  const area = parseFloat(document.getElementById('area').value);
  const quality = document.getElementById('quality').value;
  const produce = parseFloat(document.getElementById('produce').value);
  const date = new Date(document.getElementById('submissionDate').value);
  const today = new Date();

  if (!name || isNaN(area) || !quality || isNaN(produce) || isNaN(date.getTime())) {
    alert("Please fill in all fields correctly.");
    return;
  }

  // Determine base tax percentage
  let rate = 0;
  if (quality === 'Badland') rate = 0.05;
  else if (quality === 'Good') rate = 0.10;
  else if (quality === 'Excellent') rate = 0.15;

  const baseTax = produce * rate;

  // Check for penalty if submitted after 10th
  let penalty = 0;
  if (date.getDate() > 10) {
    const lateDays = date.getDate() - 10;
    penalty = produce * 0.01 * lateDays;
  }

  const totalTax = baseTax + penalty;

  records.push({
    name,
    area,
    quality,
    baseTax: baseTax.toFixed(2),
    penalty: penalty.toFixed(2),
    totalTax: totalTax.toFixed(2),
    date: date.toDateString(),
    paid: true
  });

  alert(`Tax successfully submitted. Total tax: ${totalTax.toFixed(2)} units`);
  document.getElementById('tax-form').reset();
}

// Fetch and display records
function showRecords() {
  const searchName = document.getElementById('searchName').value;
  const resultContainer = document.getElementById('recordResults');
  resultContainer.innerHTML = '';

  const result = records.find(r => r.name.toLowerCase() === searchName.toLowerCase());
  if (result) {
    resultContainer.innerHTML = `
      <p><strong>Name:</strong> ${result.name}</p>
      <p><strong>Land Area:</strong> ${result.area}</p>
      <p><strong>Land Quality:</strong> ${result.quality}</p>
      <p><strong>Tax Fixed:</strong> ${result.baseTax}</p>
      <p><strong>Penalty:</strong> ${result.penalty}</p>
      <p><strong>Total Tax:</strong> ${result.totalTax}</p>
      <p><strong>Date of Last Payment:</strong> ${result.date}</p>
      <p><strong>Status:</strong> ${result.paid ? "Paid" : "Unpaid"}</p>
    `;
  } else {
    resultContainer.innerHTML = "<p>No record found for the entered name.</p>";
  }
}
