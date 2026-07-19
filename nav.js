// Shared navigation menu — single source of truth.
// To change the nav (add/remove/reorder links, change icons), edit ONLY this file.
// Every page that includes <script src="nav.js"></script> updates automatically.

document.write(`
  <div class="dropdown-container">
    <button class="dropdown-button">☰</button>
    <div class="dropdown-content">
      <div class="radio-container">
        <input type="radio" id="option1" name="dropdown" />
        <label for="option1"><a href="home.html">🏠︎ Home</a></label>

        <input type="radio" id="option2" name="dropdown" />
        <label for="option2"><a href="about.html">✎ About</a></label>

        <input type="radio" id="option3" name="dropdown" />
        <label for="option3"><a href="projects.html">🗒 Project</a></label>

        <input type="radio" id="option4" name="dropdown" />
        <label for="option4"><a href="activities.html">✦ Activities</a></label>

        <input type="radio" id="option5" name="dropdown" />
        <label for="option5"><a href="contact.html">☏ Contact</a></label>
      </div>
    </div>
  </div>
`);
