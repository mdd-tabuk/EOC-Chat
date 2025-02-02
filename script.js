const socket = io('https://your-backend-server.com'); // Replace with your server

const sendButton = document.getElementById('send-button');
const messageInput = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages');

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    socket.emit('sendMessage', message);  // Send message to backend
    messageInput.value = '';
});

// Listen for new messages from the server
socket.on('receiveMessage', (message) => {
    const messageDiv = document.createElement('div');
    messageDiv.textContent = message;
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight; // Scroll to latest message
});
