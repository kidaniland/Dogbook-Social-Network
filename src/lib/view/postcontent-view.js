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

export { postContentView }