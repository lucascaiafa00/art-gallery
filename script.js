let info = document.getElementById("info")
let background = document.getElementById("background")
let artworks = document.querySelectorAll(".artwork")
let previousButton = document.getElementById("previous")
let nextButton = document.getElementById("next")

function openInfo(title, image, text, link){
    background.classList.add("open")
    info.classList.add("open")

    document.body.style.overflow = "hidden"
    
    info.children[0].innerText = title
    info.children[1].src = image
    info.children[2].innerHTML = text
    info.children[3].href = link
}

for (let index = 0; index < artworks.length; index++) {
    const artwork = artworks[index];

    artwork.addEventListener("click", ()=>{
        openInfo(artwork.getAttribute("data-title"), artwork.src, artwork.getAttribute("data-text"), artwork.getAttribute("data-link"))
    })
}


background.addEventListener('click', ()=>{
    background.classList.remove("open")
    info.classList.remove("open")

    document.body.style.overflow = "auto"
})
