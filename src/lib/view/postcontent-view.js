const postContentView = (user) => { 
    //console.log("LLEGA A DATA DE postcontentview-->", data);
    const postList = document.createElement('div');
    postList.setAttribute('class', '.post--content-all');
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
}

export { postContentView }

 /* const setupPosts = data => { } */


/*
const postContentView = `
    <div class="main--post">

        <div class="mainpost--userimg">
            <img src="./image/avatar-dog.png"/>
        </div>

        <div class="mainpost--username">				 
            <p class="name">Sultán</p></br>
            <span class="time">2min ago</span>
        </div>
        <div class="mainpost--post">
            <div>
                <p class="post">
                    Hoy es un excelente día para tomar sol! Dame una patita para seguir mostrándoles mis aventuras.
                </p>
            </div>
            <div>
                <img class="postimg" src="./image/dogSunglasses.jpg">
            </div>
        </div>

        <div class="like--coment">
            <div class="like--img">
                <span class="paw--like" id="like1"> 0 </span>
                <i class="fas fa-paw"></i>
                <i class="far fa-comment"></i>
            </div>
        </div>

    </div>
`;
*/