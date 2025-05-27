fetch('https://script.google.com/macros/s/YOUR_DEPLOYED_URL_HERE/exec')
  .then(response => response.json())
  .then(data => console.log(data)); // Display JSON data in console for now
