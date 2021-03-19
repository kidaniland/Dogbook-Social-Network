const postContentView = (data) => {
    let postViewDiv = document.createElement('div')
    postViewDiv.setAttribute('class', 'main--post')
    console.log("LLEGA DATA-->", data);
    if (data.length) {
        let postContainer = '';
        data.forEach(doc => {
            const post = doc.data();
            console.log ("esto es post-->", post)
            const li = `
            <div class="cada--post">
                <div class="mainpost--userimg">
                    <img id="avatarUser" src=${post.imagePrrofile}></img>
                </div>

                <div class="mainpost--username">				 
                    <p class="name">${post.autor}</p></br>
                    <span class="time">${post.tiempo}</span>
                </div>
                <div class="mainpost--post">
                    <div>
                        <p class="post">${post.post}</p>
                    </div>
                    <div>
                        <img class="postimg" src=${post.postImg}></img>
                    </div>
                </div>

                <div class="like--coment">
                    <div class="like--img">
                        <span class="paw--like" id="like">${post.pawLike}</span>
                        <i class="fas fa-paw" id="pawBtn"></i>
                        <span class="paw--like" id="comentar">${post.comentarios}</span>
                        <i class="far fa-comment" id="comentBtn"></i>
                    </div>
                </div>
            </div>`;
            postContainer += li
        });
        postViewDiv.innerHTML = postContainer
    }
    else{
        postViewDiv.innerHTML = '<h1>Aun no existen publicaciones</h1>'
    }

    return postViewDiv
}

export { postContentView }