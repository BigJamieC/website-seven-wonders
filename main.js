var image1 = document.querySelector('.tourist1')
var image2 = document.querySelector('.tourist2')

var sources = [
    "tourist1.png",
    "tourist2.png",
    "tourist3.png",
    "tourist4.png",
    "tourist5.png",
    "tourist6.png"
]

image1.src = `./Images/${sources[Math.round(Math.random()*(sources.length-1))]}`
image2.src = `./Images/${sources[Math.round(Math.random()*(sources.length-1))]}`