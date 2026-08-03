// Static values matching the HTML
const temperature = 10;   // °C
const windSpeed = 5;      // km/h

// One-line wind chill formula (metric)
function calculateWindChill(temp, speed) {
  return (13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16)).toFixed(1);
}

// Only calculate when conditions are met
function displayWindChill() {
  const windChillElement = document.getElementById("windchill");

  if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)} °C`;
  } else {
    windChillElement.textContent = "N/A";
  }
}

// Footer: current year + last modified
function updateFooter() {
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
}

// Run when page loads
displayWindChill();
updateFooter();