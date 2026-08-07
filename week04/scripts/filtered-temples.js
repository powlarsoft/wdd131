/* ===== Temple Data Array ===== */
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
  },
  {
    templeName: "St. George Utah",
    location: "St. George, Utah, United States",
    dedicated: "1877, April, 6",
    area: 110000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-temple-lds-894724-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 41010,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/1-Rome-Temple-2160936.jpg"
  }
];

/* ===== DOM Elements ===== */
const templeGrid = document.getElementById("temple-grid");
const pageTitle = document.getElementById("page-title");
const navLinks = document.querySelectorAll("nav a");
const hamburger = document.getElementById("hamburger");
const mainNav = document.getElementById("main-nav");

/* ===== Helper: Extract year from dedicated string ===== */
function getYear(dedicated) {
  const year = parseInt(dedicated.split(",")[0].trim(), 10);
  return isNaN(year) ? 0 : year;
}

/* ===== Create a single temple card (figure) ===== */
function createTempleCard(temple) {
  const figure = document.createElement("figure");
  figure.className = "temple-card";

  const img = document.createElement("img");
  img.src = temple.imageUrl;
  img.alt = `${temple.templeName} Temple`;
  img.loading = "lazy";
  img.width = 400;
  img.height = 250;

  const caption = document.createElement("figcaption");

  const name = document.createElement("h3");
  name.textContent = temple.templeName;

  const location = document.createElement("p");
  location.innerHTML = `<span class="label">Location:</span> ${temple.location}`;

  const dedicated = document.createElement("p");
  dedicated.innerHTML = `<span class="label">Dedicated:</span> ${temple.dedicated}`;

  const area = document.createElement("p");
  area.innerHTML = `<span class="label">Area:</span> ${temple.area.toLocaleString()} sq ft`;

  caption.append(name, location, dedicated, area);
  figure.append(img, caption);

  return figure;
}

/* ===== Display temples ===== */
function displayTemples(filter = "home") {
  templeGrid.innerHTML = "";

  let filtered = temples;

  switch (filter) {
    case "old":
      filtered = temples.filter((t) => getYear(t.dedicated) < 1900);
      pageTitle.textContent = "Old";
      break;
    case "new":
      filtered = temples.filter((t) => getYear(t.dedicated) > 2000);
      pageTitle.textContent = "New";
      break;
    case "large":
      filtered = temples.filter((t) => t.area > 90000);
      pageTitle.textContent = "Large";
      break;
    case "small":
      filtered = temples.filter((t) => t.area < 10000);
      pageTitle.textContent = "Small";
      break;
    default:
      filtered = temples;
      pageTitle.textContent = "Home";
  }

  filtered.forEach((temple) => {
    templeGrid.appendChild(createTempleCard(temple));
  });

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.dataset.filter === filter);
  });
}

/* ===== Navigation clicks ===== */
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    displayTemples(link.dataset.filter);

    // Close mobile menu
    mainNav.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.innerHTML = "&#9776;";
  });
});

/* ===== Hamburger toggle ===== */
hamburger.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", isOpen);
  hamburger.innerHTML = isOpen ? "&times;" : "&#9776;";
});

/* ===== Footer ===== */
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

/* ===== Initial load ===== */
displayTemples("home");