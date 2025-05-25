const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21492
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 12502
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 15137
    }
]


const mainEl = document.getElementById("main-section")
console.log(render(posts))


if(posts){   
    mainEl.innerHTML = render(posts)

}

function render(postsArray){
    let postsElement = ""

    for(let i=0; i<postsArray.length; i++)
    {   
        let arObj = postsArray[i]
        postsElement+= ` 
                <section>
                    <div class="container">
                        <div class="follower-details-wrapper">
                            <img class="avatar-dimensions follower-avatar" src="${arObj.avatar}" alt="Follower avatar picture">
                            <div class="follower-name-location-wrapper">
                                <p class="follower-info follower-name">${arObj.name}</p>
                                <p class="follower-info follower-location">${arObj.location}</p>
                            </div>
                        </div>
                        <img class="post-img" src="${arObj.post}">
                        <div class="follower-post-responses">
                            <div class="follower-post-reactions">
                                <img class="reactions" src="images/icon-heart.png">
                                <img class="reactions" src="images/icon-comment.png">
                                <img class="reactions" src="images/icon-dm.png">
                            </div>
                            <p>${arObj.likes} likes</p>
                            <p>${arObj.username} <span>${arObj.comment}</span></p>
                        </div>                  
                    </div>
            </section>
            `
            
    }
    
    return postsElement
}
