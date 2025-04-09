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
const location = Intl.DateTimeFormat().resolvedOptions().timeZone;
logToServer(location);