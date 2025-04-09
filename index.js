function logToServer(message) {
    console.log(message);

    fetch('/api/log', {
        method: 'POST',
        headers: {
             'content-type': 'application/json',
        },
        body: JSON.stringify({ message }),
    })
    .catch(error => console.error('Error sending log to server:', error));
}

logToServer('This will show in Vercel logs');