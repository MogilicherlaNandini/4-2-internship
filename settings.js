// Function to toggle visibility of different sections (Profile, Settings, Chat)
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);

    // Hide all sections first
    document.querySelectorAll('.profile-section, .settings-section, .chat-section').forEach(sec => {
        if (sec.id !== sectionId) {
            sec.style.display = 'none';
        }
    });

    // Toggle the selected section
    if (section.style.display === 'none' || section.style.display === '') {
        section.style.display = 'block';
    } else {
        section.style.display = 'none';
    }
}

// Function to toggle between Light and Dark mode
function toggleTheme() {
    const body = document.body;
    const isDarkMode = body.classList.toggle('dark-mode');

    // Save preference in localStorage
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

// Function to load the saved theme preference
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
}

// Call this function on page load to apply saved theme
document.addEventListener('DOMContentLoaded', loadTheme);
