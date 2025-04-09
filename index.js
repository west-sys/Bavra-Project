

function logToServer() {

    let location;
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
        function (position) {
        location = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };
        }    
        );
    }

    console.log("this is the location log", location);

    fetch('/api/log', {
        method: 'POST',
        headers: {
             'content-type': 'application/json',
        },
        body: JSON.stringify({ location }),
    })
    .catch(error => console.error('Error sending log to server:', error));
}

logToServer();