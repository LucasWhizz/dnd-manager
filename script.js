fetch('https://script.google.com/macros/s/YOUR_DEPLOYED_URL_HERE/exec')
  .then(response => response.json())
  .then(data => console.log(data)); // Display JSON data in console for now

function showImage(character) {
    let img = document.getElementById("char-image");

    const characterImages = {
        "dargrath": "images/dargrath.jpg",
        "harvester": "images/harvester.jpg",
        "neree": "images/neree.jpg",
        "zeyola": "images/zeyola.jpg",
        "wildstride": "images/wildstride.jpg",
        "katara": "images/katara.jpg",
        "nyanxar": "images/nyanxar.jpg"
    };

    img.src = characterImages[character];
    img.style.display = "block";
}

function hideImage() {
    let img = document.getElementById("char-image");
    img.style.display = "none";
}
