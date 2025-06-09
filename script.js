fetch('https://script.google.com/macros/s/YOUR_DEPLOYED_URL_HERE/exec')
  .then(response => response.json())
  .then(data => console.log(data)); // Display JSON data in console for now

function showImage(character) {
    let img = document.getElementById("char-image");

    const characterImages = {
        "dargrath": "images/Dargrath.png",
        "harvester": "images/harvester.png",
        "neree": "images/neree.png",
        "zeyola": "images/zeyola.png",
        "wildstride": "images/wildstride.png",
        "katara": "images/katara.png",
        "nyanxar": "images/nyanxar.png"
    };

    img.src = characterImages[character];
    img.style.display = "block";
}

function hideImage() {
    let img = document.getElementById("char-image");
    img.style.display = "none";
}
