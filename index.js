// write your code here

document.querySelector("#comments-list").innerHTML=""



fetch("https://api.opensea.io/api/v1/assets?format=json")
.then(resp => resp.json())
.then(data => renderImage(data.assets))
// .then(data => renderpic(data))

function renderImage (data) {
    data.forEach(element => {notforrender(element)})}

function notforrender (element) {

    if(element.image_url == null ) { 

    }
    
    else {
    let list=document.querySelector(".image-container")
    let div=document.createElement("div")        
    let img=document.createElement("img")
    let name=document.createElement("h2")
    let likes=document.createElement("p")        
    
        img.src=element.image_url
        name.innerText=element.name.slice(0,12)
        likes.innerText=element.token_id*.0000000000000000000000000000000000000000000000000000000000000000000000001
        name.className= "title"
        img.className = "image"
        div.className = "image-card"                
    
    let btnup=document.createElement("button")
    let btndown= document.createElement("button")
    

        btnup.innerText="Upvote"
        btndown.innerText="Downvote"
       
        btnup.className="float-child"
        btndown.className="float-child"
        
    
    let test=[img,name,likes]
    // console.log(test[2])
    
    div.append(img,name,btnup,btndown)
    list.append(div)

    btnup.addEventListener("click", () => {
        let oldlikes =parseInt(likes.innerText)
        let newlikes=oldlikes +1
        likes.innerText = newlikes
        console.log(newlikes)
    })

    btndown.addEventListener("click", () => {
        let oldlikes =parseInt(likes.innerText)
        let newlikes=oldlikes -1
        likes.innerText = newlikes
        console.log(newlikes)

        
        
    })

    img.addEventListener("mouseover", function( event ) {
    // highlight the mouseover target 
    event.target.style.width = `150%`
    event.target.style.height= `150%`

    // reset the color after a short delay
    setTimeout(function() {
        event.target.style.width = `100%`;
        event.target.style.height= `100%`
    }, 500);
    }, false);

    };

    
        }
        const form = document.querySelector('#new-nft-form').addEventListener('submit', submitNft)

        function submitNft(event) {
                event.preventDefault()
        
                const name = document.querySelector('#nft-name').value
                console.log(name)
                
                const image = document.querySelector('#nft-image').value
                console.log(image)
        
                let newNft = {
                    'name': name,
                    'image_url': image,
                    }
                    console.log(newNft)
                    notforrender(newNft)
                }


        



                                                   