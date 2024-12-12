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

var srcIndex = Math.round(Math.random()*(sources.length-1))
var src1 = sources[srcIndex]
sources.splice(srcIndex,1)
var src2 = sources[Math.round(Math.random()*(sources.length-1))]

image1.src = `./Images/${src1}`
image2.src = `./Images/${src2}`