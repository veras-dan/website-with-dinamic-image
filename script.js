
var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var page = document.getElementById("page");

var backgroundImg = new Array(
    "images/bg1.png",
    "images/bg2.png",
    "images/bg3.png",
    "images/bg4.png",
    "images/bg5.png",
);

let i = 0;

next.onclick = function() {
    
    if(i < 4) {
        page.style.backgroundImage = 'url("'+backgroundImg[i+1]+'")';
        thumbnail[i+1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i++;
    };
};

prev.onclick = function() {
    
    if(i > 0) {
        page.style.backgroundImage = 'url("'+backgroundImg[i-1]+'")';
        thumbnail[i-1].classList.add("active");
        thumbnail[i].classList.remove("active");
        i--;
    }
};
