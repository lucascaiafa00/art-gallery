let images = document.querySelectorAll(".img-container img")
let background = document.getElementById("background")
let info = document.getElementById("info")
let fullImage = document.getElementById("full-image")
let infoTitle = info.children[0]
let infoArtist = info.children[1]
let infoImage = info.children[2]
let slideShow
var currentImage = 0
var fullImageInfo = false

function startSlides() {
    currentImage = 0
    fullImage.src = images[currentImage].src
    background.classList.add("show")
    fullImage.classList.add("show")

    slideShow = setInterval(() => {
        fullImage.classList.remove("show")
        currentImage++
        if (currentImage >= images.length) {
            currentImage = 0
        }
        fullImage.src = images[currentImage].src
        fullImage.classList.add("show")
    }, 2500);
}

function closeImage() {
    if (fullImageInfo == true) {
        info.classList.add("show")
        fullImage.classList.remove("show")
        fullImageInfo = false
    }
    else{
        background.classList.remove("show")
        info.classList.remove("show")
        fullImage.classList.remove("show")
    }

    clearInterval(slideShow)
    currentImage = 0
    
}

images.forEach(image => {
    image.onclick = ()=>{
        background.classList.add("show")
        info.classList.add("show")

        infoTitle.innerHTML = image.title
        infoArtist.innerHTML = image.getAttribute("data-artist")
        infoImage.src = image.src

        fullImage.src = image.src
        infoImage.onclick = ()=>{
            fullImage.classList.add("show")
            info.classList.remove("show")
            console.log("09");
            fullImageInfo = true
        }
    }
});
