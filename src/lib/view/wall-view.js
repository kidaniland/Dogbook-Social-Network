import { headerView } from "./header-view.js";
import { footerView } from "./footer-view.js";

const wallView = () => {
    const wallContent = `
        ${headerView}
        <div class ="wall--content">

            <div class="perfil--resumen">
                <div class="sidebar--left">

                    <img src="./image/avatar.png" class="img--side">
                    <p class="text--side">
                        Soy: </br> 
                        <span class="span--side" id="sideUser">
                            Firulais
                        </span>
                    </p>
                    <p class="text--side">
                        Mi human@ es: </br>
                        <span class="span--side" id="sideName">
                            Daniela Villa
                        </span>
                    </p>
                    <p class="text--side" id="sideCountry">
                        Chile
                    </p>
                    <a href="" class="link--side "id="alProfile">Visitar perfíl</a>

                </div>
            </div>


            <div class="post--content">
                <div class="main mainpost" style="margin-bottom:20px; padding-bottom:10px;">	

                    <div class="userimg">
                        <img src="./image/avatar.png">
                    </div>

                    <div class="username">				 
                        <p class="name" style="top:15px;">Firulais</p>
                    </div>

                    <p class="quotes">
                        <textarea id="mypara" placeholder="¿Qué estás oliendo?, envía un imagen o ladrido"></textarea>
                    </p>

                    <!--botones de interaccion-->

                    <div class="post">
                        <img id="load2" class="postimg" src=" ">
                    </div>

                    <div class="postbar">
                        <input type="file" accept="images/*" id="chooseimg">
                        <button type="button" class="imgbttn" id="imgbttn">
                            <i class="far fa-image"></i>
                        </button>
                        <span class="span--like" id="like-number">0</span>
                        <button type="button" id="likepost" class="postmypost">
                            <i class="fas fa-paw"></i>
                        </button>
                        <button type="button" id="postmypost" class="postmypost">
                            <i class="far fa-comment"></i>
                        </button>
                    </div>

                 </div>
            </div>


            <div class="recomendacion">
                <div class="sidebarright">

                    <div class="right-content">
                        <img src="./image/avatar-dog.png">
                        <p class="name">Dog 1</p>
                        <a href="" id="addFriend1">Agregar amigo</a>

                    </div>

                    <div class="right-content">
                        <img src="./image/avatar-dog.png">
                        <p class="name">Dog 2</p>
                        <a href="" id="addFriend2">Agregar amigo</a>
                    </div>

                    <div class="right-content">
                        <img src="./image/avatar-dog.png">
                        <p class="name">Dog 3</p>
                        <a href="" id="addFriend3">Agregar amigo</a>
                    </div>

                    <div class="right-content">
                        <img src="./image/avatar-dog.png">
                        <p class="name">Dog 4</p>
                        <a href="" id="addFriend4">Agregar amigo</a>
                    </div>

                </div>    
            </div>
        </div> 
        ${footerView}
    `;

    const wallElement = document.createElement('div');
    wallElement.setAttribute('class', 'wall-view');
    wallElement.innerHTML = wallContent;

    //evento TOGGLE-MENU del HEADER
    /*const toggleMenu = wallElement.querySelector('.menu--toggle');
        toggleMenu.addEventListener('click', () => {
            console.log("<<<<<CLIK>>>>");
            //toggleMenu.classList.add('active');

            const changeIcon = wallElement.querySelector('.icon');
            changeIcon.classList.remove('.fa-bars');
            changeIcon.classList.add('.fa-times');

            const navClass = wallElement.querySelector('.nav')
            navClass.classList.add('active')
        })*/

    return wallElement
}

export { wallView }