var messages = require('./messages');

var app = document.getElementById('app'); // Test connection to JS
app.innerHTML = '<p>' + messages.hi + ' ' + messages.event + '</p>'; // Test connection to JS