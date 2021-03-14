const postContentView = (user) => { 
    console.log("LLEGA A DATA DE postcontentview-->", user);

    const postList = document.createElement('div');
    postList.setAttribute('class', '.post--content-all');

    const elementsPost = `
    <div class="main--post">

        <div class="mainpost--userimg">
            <img id="avatarUser"></img>
        </div>

        <div class="mainpost--username">				 
            <p class="name"></p></br>
            <span class="time"></span>
        </div>
        <div class="mainpost--post">
            <div>
                <p class="post"></p>
            </div>
            <div>
                <img class="postimg">
            </div>
        </div>

        <div class="like--coment">
            <div class="like--img">
                <span class="paw--like" id="like"></span>
                <i class="fas fa-paw" id="pawBtn"></i>
                <span class="paw--like" id="comentar"></span>
                <i class="far fa-comment" id="comentBtn"></i>
            </div>
        </div>

    </div>
    `;

    postList.innerHTML = elementsPost;
    //elementos del usuario
    const img = postList.querySelector('#avatarUser');
    const userDogP = postList.querySelector('.name');
    //elementos del post
    const postTimeSpan = postList.querySelector('.time');
    const postedMessage = postList.querySelector('.post');
    const postedImage = postList.querySelector('.postimg');
    //elementos de interacción
    const pawLikeSpan = postList.querySelector('#like');
    const numPawLike = 0;
    const pawLikeBtn = postList.querySelector('#pawBtn');
    const comentSpan = postList.querySelector('#comentar');
    const comentBtn = postList.querySelector('#comentBtn');
    const numComent = 0;

    //Cargar los datos básicos del perfil 
    /*
    if (user.photo === null) {
        img.setAttribute('src', './image/avatar-dog.png')
    }
    else{
        img.setAttribute('src', user.photo);
        userDogP.innerHTML = user.user;
    }
    */
    
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

/*
    //FIRESTORE
    const firestore = firebase.firestore();
    firestore.collection('posts')
      .get() //obten los datos
      .then((doc) => {
        console.log('Muestra lo capturado POST-->', doc.data()) //snapshot es un obj q muestra datos cambiando
        const posts = doc.data();
        
        postTimeSpan.innerHTML = posts.tiempo;
        postedMessage.innerHTML = posts.post;
        postedImage.setAttribute('src', posts.postImg);
        
        pawLikeSpan.innerHTML = posts.pawLike;
        comentSpan.innerHTML = posts.comentarios;
      })
      .catch(error => {
        console.error("Error ", error);
    })
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
    return postList
}

export { postContentView }