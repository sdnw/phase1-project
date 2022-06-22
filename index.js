document.querySelector("#comments-list").innerHTML=""
// accesses data from public api
fetch("https://api.opensea.io/api/v1/assets?limit=50")
.then(resp => resp.json())
.then(data => renderImage(data.assets))

function renderImage (data) {
    // instance of array iteration
    data.forEach(element => {notforrender(element)}
)}

function notforrender (element) {
    if(element.image_url == null ) {
    }
    else {

    let list = document.querySelector(".image-container")
    let div = document.createElement("div")
    let img = document.createElement("img")
    let name = document.createElement("h2")
    let likes = document.createElement("p")

        img.src = element.image_url
        name.innerText = element.name.slice(0,12)
        likes.innerText = Math.trunc(element.token_id*.0000000000000000000000000000000000000000000000000000000000000000000000001)
        name.className = "title"
        img.className = "image"
        div.className = "image-card"

    // 1st deliverable 
    let btnup = document.createElement("button")
    let btndown = document.createElement("button")
        btnup.innerText = "Upvote"
        btndown.innerText = "Downvote"
        btnup.className = "float-child"
        btndown.className = "float-child"
        
        btnup.addEventListener("click", () => {
            let oldlikes = parseInt(likes.innerText)
            let newlikes = oldlikes +1
            likes.innerText = newlikes
            
        })
        btndown.addEventListener("click", () => {
            let oldlikes = parseInt(likes.innerText)
            let newlikes = oldlikes -1
            likes.innerText = newlikes
            
        })

div.append(img,name,likes,btnup,btndown)
list.append(div)

    // 2nd deliverable
    document.querySelector(".logo").addEventListener("mouseover", function( event ) {
    // highlight the mouseover target
    event.target.style.width = `30%`
    event.target.style.height = `30%`

    // reset the color after a short delay
    setTimeout(function() {
        event.target.style.width = `20%`;
        event.target.style.height = `20%`
        }, 500);
    }, false);

    };

    };

// 3rd deliverable
const form = document.querySelector('#new-nft-form').addEventListener('submit', submitNft)
function submitNft(event) {
      event.preventDefault()
        const name = document.querySelector('#nft-name').value
        const image = document.querySelector('#nft-image').value
       
        let newNft = {
            'name': name,
            'image_url': image,
            'token_id' : "0" }
            notforrender(newNft)
         }
    