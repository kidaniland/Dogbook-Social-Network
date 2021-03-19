/*
    postContainer.innerHTML = elementsPost;
    
    //elementos del usuario
    const imgP = postContainer.querySelector('#avatarUser');
    const userDogP = postContainer.querySelector('.name');
    //elementos del post
    const postTimeSpan = postContainer.querySelector('.time');
    const postedMessage = postContainer.querySelector('.post');
    const postedImage = postContainer.querySelector('.postimg');
    //elementos de interacción
    const pawLikeSpan = postContainer.querySelector('#like');
    const numPawLike = 0;
    const pawLikeBtn = postContainer.querySelector('#pawBtn');
    const comentSpan = postContainer.querySelector('#comentar');
    const comentBtn = postContainer.querySelector('#comentBtn');
    const numComent = 0;
    

    
    //eventos de los botones
    pawLikeBtn.addEventListener('click', () => {
        numPawLike ++
        //la información hay que guardarla en la colección
    })

    comentBtn.addEventListener('click', () => {
        //abrir el div con un textArea para que se guarde el comentario
        //Capturar el valor de esa textArea
        //guardarlo en una nueva colección identificandolo por autor y id del post donde fue puesto
        //mostrar mensaje de exito
        //cerrar y dejar sumado uno en el span contador de comentarios
        //guardar esa ultima información en la coleccion del post
        numComent ++

    })


*/



/*
const getAllPostToPrint = (data => {
    if (data.length) {
        data.forEach(doc => {
            //Cargar los datos básicos del perfil 
            if (doc.photo === null) {
                imgP.setAttribute('src', './image/avatar-dog.png');
                userDogP = doc.user
            }
            else {
                imgP.setAttribute('src', doc.photo);
                userDogP.innerHTML = doc.user;
            }

            postTimeSpan.innerHTML = doc.tiempo;
            postedMessage.innerHTML = doc.post;
            postedImage.setAttribute('src', doc.postImg);

            pawLikeSpan.innerHTML = doc.pawLike;
            comentSpan.innerHTML = doc.comentarios;

        })
    }
}
*/




/*
    if (user.length){
        //console.log("2-->", data.length)
        let htmlPostContent = '';
        data.forEach(doc =>{
            //console.log("3 -->", doc)
            const post = doc.data()
            console.log("REVISA-> ", post)
            const li = `
            <div class="main--post">

                <div class="mainpost--userimg">
                    <img src="./image/avatar-dog.png"/>
                </div>

                <div class="mainpost--username">				 
                    <p class="name">${post.user}</p></br>
                    <span class="time">2min ago</span>
                </div>
                <div class="mainpost--post">
                    <div>
                        <p class="post">${post.comentario}</p>
                    </div>
                    <div>
                        <img class="postimg" src=${post.imagen}>
                    </div>
                </div>

                <div class="like--coment">
                    <div class="like--img">
                        <span class="paw--like" id="like1">${post.paw}</span>
                        <i class="fas fa-paw"></i>
                        <i class="far fa-comment"></i>
                    </div>
                </div>
            </div>
            `;
            htmlPostContent += li;
        })
        postList.innerHTML = htmlPostContent;
    }
    else{
        postList.innerHTML = '<p>No se han encontrado publicaciones</p>';
    }
    return postList
    */