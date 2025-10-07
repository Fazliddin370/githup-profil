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

let git = "https://api.github.com/users/"
async function getdata(name){
    const data = await fetch(name)
    return await data.json();
}
    let btn = document.querySelector("button")
    let inp = document.querySelector(".inp-open")
    let hot = document.querySelector(".git")
    

    btn.onclick = function (){
        if(inp.value.length > 2){
            getdata(git + inp.value).then((e)=>{
             hot.innerHTML = `
        <div class="poto">
                    <img class="foto" src=${e.avatar_url} alt="">
                </div>
                <div class="gren">
                    <div class="parent">
                    <div>
                        <h1 class="fazliddin">${e.name}</h1>
                        <a class="a-herf" href="https://github.com/${e.login}"><p>${e.url}</p></a>
                        <p class="dastur">${e.bio}</p>
                    </div>
                    <div>
                        <p class="home">Joined 20 Fab 2025</p>
                    </div>
                </div>
                <div class="follow">
                    <div class="ful">
                        <div>
                        <p>Repos</p>
                        <h1>${e.public_repos}</h1>
                    </div>
                    <div>
                        <p>Followers</p>
                        <h1>${e.followers}</h1>
                    </div>
                    <div>
                        <p>Following</p>
                        <h1>${e.following}</h1>
                    </div>
                    </div>
                </div>
                <div class="uzb">
                    <div>
                        <div class="blog">
                            <img src="./imglar/003-pin.png" alt="">
                            <p>${e.location}</p>
                        </div>
                        <div class="blog">
                            <img src="./imglar/002-url.png" alt="">
                            <a href=""><p>${e.email}</p></a>
                        </div>
                    </div>
                    <div>
                        <div class="blog">
                            <img src="./imglar/Path.png" alt="">
                            <p>Not Available</p>
                        </div>
                        <div class="blog">
                            <img src="./imglar/001-office-building.png" alt="">
                            <p>${e.company}</p>
                        </div>
                    </div>
                </div>
                </div>
        `
        hot.style.display = "flex"
        })
        }
    }
getdata()