// References to the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Allowed Book of Mormon books for validation
const validBooks = [
  "1 Nephi", "2 Nephi", "Jacob", "Enos", "Jarom", "Omni", "Mosiah",
  "Alma", "Helaman", "3 Nephi", "4 Nephi", "Mormon", "Ether", "Moroni"
];

button.addEventListener('click', function() {
  const chapter = input.value.trim();

  // Check to make sure the input is not blank
  if (chapter !== '') {
    // 1. Validate input: must start with a valid Book of Mormon book
    const isValid = validBooks.some(book => chapter.startsWith(book));
    if (!isValid) {
      alert("Please enter a valid Book of Mormon book and chapter.");
      input.focus();
      return;
    }

    // Limit to 10 entries
    if (list.children.length >= 10) {
      alert("You can only add up to 10 chapters (Top 10).");
      input.focus();
      return;
    }

    // Prevent duplicates
    const duplicate = Array.from(list.children).some(li => 
      li.firstChild.textContent === chapter
    );
    if (duplicate) {
      alert("This chapter has already been added.");
      input.focus();
      return;
    }

    // Create a new li element
    const li = document.createElement('li');
    li.textContent = chapter;

    // Create a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${chapter}`);

    // Append the delete button to the li
    li.append(deleteButton);

    // Append the li to the unordered list
    list.append(li);

    // Add event listener to the delete button
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    // Clear the input field and refocus
    input.value = '';
    input.focus();

  } else {
    alert('Please enter a chapter before adding.');
    input.focus();
  }
});
