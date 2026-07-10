// Insert current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Insert last modified date
const modified = new Date(document.lastModified);
document.getElementById("lastModified").textContent =
  "Last Modification: " + modified.toLocaleString();
