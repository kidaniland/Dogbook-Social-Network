const postContentView = `
    <div class="main--post">

        <div class="userimg">
            <img src="./image/avatar-dog.png"/>
        </div>

        <div class="username">				 
            <p class="name">Sultán</p>
            <span class="time">2min ago</span>
        </div>

        <div class="post">
            <div>
                <p class="quotes">
                    Hoy es un excelente día para tomar sol...huesito para seguir mostrándoles mis aventuras.
                </p>
            </div>
            <div>
                <img class="postimg" src="./image/dogSunglasses.jpg">
            </div>
        </div>

        <div class="like--coment">
            <div class="like-paw">
                <span class="paw--like" id="like1"> 0 </span>
                <i class="fas fa-paw"></i>
            </div>
            <div class="coment-post">
                <i class="far fa-comment"></i>
            </div>
        </div>

    </div>
`;

export { postContentView }