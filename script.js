// Subject and chapter data
const chapters = {
  math: ["algebra", "geometry", "calculus"],
  physics: ["mechanics", "optics", "thermodynamics"],
  chemistry: ["organic-chemistry", "inorganic-chemistry", "physical-chemistry"],
};

const subjectDropdown = document.getElementById('subject');
const chapterDropdown = document.getElementById('chapter');
const downloadButton = document.getElementById('download-btn');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Populate chapter dropdown based on selected subject
subjectDropdown.addEventListener('change', () => {
  const subject = subjectDropdown.value;

  chapterDropdown.innerHTML = '<option value="">--Choose a Chapter--</option>';

  if (subject) {
    chapters[subject].forEach((chapter) => {
      const option = document.createElement('option');
      option.value = chapter;
      option.textContent = chapter.replace(/-/g, ' ').toUpperCase();
      chapterDropdown.appendChild(option);
    });
    chapterDropdown.disabled = false;
    downloadButton.disabled = true;
  } else {
    chapterDropdown.disabled = true;
    downloadButton.disabled = true;
  }
});

// Enable download button only if a chapter is selected
chapterDropdown.addEventListener('change', () => {
  downloadButton.disabled = !chapterDropdown.value;
});

// Handle download
downloadButton.addEventListener('click', () => {
  const subject = subjectDropdown.value;
  const chapter = chapterDropdown.value;

  if (subject && chapter) {
    // Construct the download URL
    const downloadUrl = `/download?subject=${subject}&chapter=${chapter}`;
    window.location.href = downloadUrl; // Trigger download
  } else {
    alert('Please select both subject and chapter!');
  }
});

// Toggle navbar for mobile
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
