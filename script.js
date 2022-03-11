let info = document.getElementById("info")
let background = document.getElementById("background")
let artworks = document.querySelectorAll(".artwork")
let previousButton = document.getElementById("previous")
let nextButton = document.getElementById("next")
let fullImage = document.getElementById("full-image")
var imageNumber = 0
var infoFullImage = false
var slideShow


function openInfo(title, image, text, link){
    background.classList.add("open")
    info.classList.add("open")
    info.classList.add("open")

    document.body.style.overflow = "hidden"
    
    info.children[0].innerText = title
    info.children[1].src = image
    info.children[2].innerHTML = text
    info.children[3].href = link
}

function nextImage(){
    fullImage.src = artworks[imageNumber].src
    fullImage.classList.add("open")

    imageNumber++

    if(imageNumber >= artworks.length){
        imageNumber = 0
    }
    setTimeout(()=>{fullImage.classList.remove("open")},7000)
}

function startSlideShow() {
    background.classList.add("open")
    document.body.style.overflow = "hidden"
    nextImage()
    slideShow = setInterval(nextImage,8000)
    
}

//startSlideShow()

info.children[1].onclick = ()=>{
    fullImage.src = info.children[1].src
    fullImage.classList.add("open")
    info.classList.remove("open")
    infoFullImage = true
}

for (let index = 0; index < artworks.length; index++) {
    const artwork = artworks[index];

    artwork.addEventListener("click", ()=>{
        openInfo(artwork.getAttribute("data-title"), artwork.src, artwork.getAttribute("data-text"), artwork.getAttribute("data-link"))
    })
}

background.addEventListener('click', ()=>{
    if (infoFullImage === true) {
        info.classList.add("open")
        infoFullImage = false
    }else{
        background.classList.remove("open")
        info.classList.remove("open")

    }
    clearInterval(slideShow)
    fullImage.classList.remove("open")
    imageNumber = 0
    document.body.style.overflow = "auto"
})
