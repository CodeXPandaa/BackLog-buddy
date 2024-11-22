// Object to hold the chapters for each subject
const chapters = {
  math: ["Algebra", "Geometry", "Calculus"],
  physics: ["Mechanics", "Thermodynamics", "Electromagnetism"],
  chemistry: ["Organic Chemistry", "Inorganic Chemistry", "Physical Chemistry"]
};

// Get references to the DOM elements
const subjectDropdown = document.getElementById('subject');
const chapterDropdown = document.getElementById('chapter');
const downloadButton = document.getElementById('download-btn');

// Event listener for subject dropdown change
subjectDropdown.addEventListener('change', function() {
  const selectedSubject = this.value;
  
  // Clear the chapter dropdown
  chapterDropdown.innerHTML = '<option value="">--Choose a Chapter--</option>';
  
  if (selectedSubject) {
    // Populate the chapter dropdown based on selected subject
    chapters[selectedSubject].forEach(chapter => {
      const option = document.createElement('option');
      option.value = chapter.toLowerCase().replace(/\s+/g, '-'); // Convert chapter name to a URL-friendly format
      option.textContent = chapter;
      chapterDropdown.appendChild(option);
    });
    
    // Enable the chapter dropdown
    chapterDropdown.disabled = false;
  } else {
    chapterDropdown.disabled = true;
  }
  
  // Disable the download button until a chapter is selected
  downloadButton.disabled = true;
});

// Event listener for chapter dropdown change
chapterDropdown.addEventListener('change', function() {
  // Enable the download button if a chapter is selected
  downloadButton.disabled = !this.value;
});

// Event listener for download button click
downloadButton.addEventListener('click', function() {
  const selectedSubject = subjectDropdown.value;
  const selectedChapter = chapterDropdown.value;
  
  if (selectedSubject && selectedChapter) {
    const downloadUrl = `downloads/${selectedSubject}/${selectedChapter}.pdf`; // Adjust the URL as needed
    window.location.href = downloadUrl; // Simulate a download
  } else {
    alert("Please select both a subject and a chapter to download.");
  }
});

  //hamburger 
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active'); // Toggle the 'active' class
  });
});