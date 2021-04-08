import { addPawLike } from "../firebase/firestore.js";

const postContentView = (data) => {
    let postViewDiv = document.createElement('div')
    postViewDiv.setAttribute('class', 'main--post')
  
    if (data.length) {
        let postContainer = '';
        data.forEach(doc => {
            const post = doc.data();
            const postId = doc.id;
            
            const li = `
            <div class="cada--post" >
                <div class="mainpost--userimg">
                    <img id="avatarUser" src=${post.imageProfile}></img>
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
                    <hr class="barra">
                    <div class="like--img">
                        <span class="paw--like" id="like">${post.pawLike}</span>
                        <i class="fas fa-paw" id="pawBtn" post-id=${postId}></i>
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

    //EVENTO para dar PawLikes
    document.addEventListener('click', (e) => {

        let element = e.target;
        console.log("TARGET-->", element)
        let postId = element.getAttribute('post-id')
       
        
        //conseguir la información del post clikeado
        addPawLike(postId, (error) => {
            if (error) {
                console.log("ERROR in addPawLike", error)
            }
            else {
                element.style.color = 'red';
                
                const spanLike = element.previousElementSibling;
                let numberOfLike = spanLike.innerHTML;
                let addLike = parseInt(numberOfLike) + 1;
                spanLike.innerHTML = addLike;
            }
        })

        /*
        addComent(postId, (error) => {
            if (error) {
                console.log("ERROR in addComent", error)
            }
            else{
                const spanComment = element.previousElementSibling;
                let numberOfComment = spanComment.innerHTML;
                let addnumberComment = parseInt(numberOfComment) + 1;
                spanComment.innerHTML = addnumberComment
            }
        })
        */

    })
    

    return postViewDiv
}


export { postContentView }