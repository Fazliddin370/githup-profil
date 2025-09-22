let darkmod = document.querySelector(".darkmod")
let liht = document.querySelector(".liht")
let dark = document.querySelector(".dark-mod")
let body = document.querySelector("body")
let moder = document.querySelector(".moder")
darkmod.addEventListener("click", ()=>{
    dark.style.display = "none"
    liht.style.display = "block"
    body.style.background = "#FEFEFE"
})
moder.addEventListener("click", ()=>{
    dark.style.display = "block"
    liht.style.display = "none"
    body.style.background = "rgb(20,29,47)"
})