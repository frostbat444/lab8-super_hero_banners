window.onload = initBannerLink;

var theAd = 0;
var adURL = new Array("sh1.html","sh2.html","sh3.html","sh4.html","sh5.html","sh6.html");
var adImages = new Array("superhero1.png","superhero2.png","superhero3.png","superhero4.png","superhero5.png","superhero6.png");


function initBannerLink() {
     if (document.getElementById("adBanner").parentNode.tagName == "A") {
        document.getElementById("adBanner").parentNode.onclick = newLocation;
     }

     rotate();
}

function newLocation() {
     document.location.href = adURL[theAd];
     return false;
}

function rotate() {
     theAd++;
     if (theAd == adImages.length) {
        theAd = 0;
     }
     document.getElementById("adBanner").src = adImages[theAd];

     setTimeout(rotate, 3 * 1000);
}