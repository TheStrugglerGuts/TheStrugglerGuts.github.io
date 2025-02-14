// JavaScript to reveal the surprise message
document.getElementById('surpriseBtn').addEventListener('click', function() {
    const message = document.getElementById('surpriseMessage');
    message.classList.remove('hidden');
  });