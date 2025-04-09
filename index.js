// Check if geolocation is supported by the browser
if ("geolocation" in navigator) {
    // Prompt user for permission to access their location
    navigator.geolocation.getCurrentPosition(
      // Success callback function
      (position) => {
        // Get the user's latitude and longitude coordinates
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
  
        // Do something with the location data, e.g. display on a map
        console.log(`Latitude: ${lat}, longitude: ${lng}`);
      },
      // Error callback function
      (error) => {
        // Handle errors, e.g. user denied location sharing permissions
        console.error("Error getting user location:", error);
      }
    );
  } else {
    // Geolocation is not supported by the browser
    console.error("Geolocation is not supported by this browser.");
  }

//   function logToServer() {

//     let location;
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//         function (position) {
//         location = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude
//         };
//         }    
//         );
//     }

//     console.log("this is the location log", location);

//     fetch('/api/log', {
//         method: 'POST',
//         headers: {
//              'content-type': 'application/json',
//         },
//         body: JSON.stringify({ location }),
//     })
//     .catch(error => console.error('Error sending log to server:', error));
// }

// logToServer();

function logToServer() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const location = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log("Location log:", location); // Log here to confirm data
  
        fetch('/api/log', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(location),
        })
          .catch(error => console.error('Error sending log:', error));
      },
      (error) => console.error('Geolocation error:', error)
    );
  }
  
  logToServer(); // Call the function