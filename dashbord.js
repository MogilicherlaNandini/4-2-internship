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
    section.style.display = (section.style.display === 'none' || section.style.display === '') ? 'block' : 'none';
}

// Function to open a chat with a selected user
function openChat(user) {
    let chatSection = document.getElementById('chat-section');
    let chatTitle = document.getElementById('chat-title');
    let chatBox = document.getElementById('chat-box');

    chatTitle.innerText = user;
    chatBox.innerHTML = `<p>Chat with ${user}</p>`; // Clear previous messages when opening a new chat
    chatSection.style.display = 'block';

    // Hide other sections
    document.getElementById('profile').style.display = 'none';
    document.getElementById('settings').style.display = 'none';
}

// Function to close the chat section
function closeChat() {
    document.getElementById('chat-section').style.display = 'none';
}

// Function to send a message
function sendMessage() {
    let messageInput = document.getElementById('message');
    let message = messageInput.value.trim();

    if (message !== "") {
        let chatBox = document.getElementById('chat-box');
        let newMessage = document.createElement('p');
        newMessage.textContent = "You: " + message;
        chatBox.appendChild(newMessage);
        messageInput.value = "";
    }
}

// Function to logout
function logout() {
    alert("Logging out...");
    window.location.href = "index.html";
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
