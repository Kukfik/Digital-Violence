document.getElementById("phish-form").addEventListener("submit", function(e) {
  e.preventDefault();

  document.body.innerHTML = `
    <div class="alert-box">
      <h1>⚠️ Stop.</h1>
      <p>You were about to give away personal data.</p>
      <p class="small">This was a simulation — real phishing pages look similar.
      <br>Please, read the personal data more properly!!!</p>
      <a href="index.html" class="continue-btn">Mini game: find safer way to enter the site!</a>
    </div>
  `;
});