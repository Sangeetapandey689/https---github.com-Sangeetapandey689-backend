// signup.js

// Function to handle signup form submission
document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const formData = new FormData(this);
    const userData = {};
    formData.forEach((value, key) => {
        userData[key] = value;
    });

    // Send a POST request to the backend with the userData using Axios
    // Replace the URL below with your backend endpoint
    const backendURL = "https://your-api-url.com/signup";
    
    // Send a POST request using Axios
    axios.post(backendURL, userData)
    .then(response => {
        // Handle the response from the backend here
        // You may want to redirect the user or display a message based on the response.
        console.log(response);
    })
    .catch(error => {
        console.error("Error:", error);
    });
});

// Your regular script can continue below this point

// For example:
// document.getElementById("myButton").addEventListener("click", function() {
//     // Your regular script code here
// });
setTimeout(() => {
    // Your MySQL connection code here
  }, 5000); // Wait for 5 seconds before connecting
  