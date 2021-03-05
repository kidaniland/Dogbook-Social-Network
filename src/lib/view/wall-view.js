import { headerView } from "./header-view.js";
import { footerView } from "./footer-view.js";
import { postContentView } from "./postcontent-view.js";

const wallView = () => {
    const wallContent = `

        ${headerView}

        <div class ="wall--content">

            <div class="perfil--resumen">
                <div class="sidebar--left">

                    <img src="./image/avatar.png" class="img--side" id="avatarUser">
                    <p class="text--side">
                        Soy: </br> 
                        <span class="span--side" id="username">
                            Firulais
                        </span>
                    </p>
                    <p class="text--side">
                        Mi humano se llama: </br>
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

                <div class="make--post">	
                    <div class="make--post-img">
                        <img class="make--post-img-user" id="avatarUser" src="./image/avatar.png">
                    </div>

                    <div class="make--post-username">				 
                        <p class="make--post-name" id="username">Firulais</p>
                    </div>

                    <div class="make--post-post">
                        <textarea id="makePost" placeholder="¿Qué estás oliendo?, envía un imágen o ladrido."></textarea>
                    </div>

                    <div class="make--post-load">
                        <img id="load2" class="post-img" src=" ">
                    </div>

                    <div class="make--postbar">
                        <input type="file" accept="images/*" id="chooseImg">
                        <button type="button" id="likepost" class="postbar-bttn">
                            <i class="fas fa-paper-plane" id="postbarImg"></i>
                        </button>
                        <button type="button" class="postbar-bttn" id="imgbttn">
                            <i class="far fa-image" id="postbarImg"></i>
                        </button>
                    </div>
                 </div>

                 <div class="post--content">
                    ${postContentView}
                 </div>

            </div>


            <div class="recomendacion">
                <div class="sideba--right">

                    <div class="right-content">
                        <img class="img--side-right" src="./image/avatar-dog.png">
                        <p class="user--side-right">Dino</p>
                        <a class="a--side-right" id="addFriend1">Agregar amigo</a>
                    </div>
                    <div class="right-content">
                        <img class="img--side-right" src="./image/avatar-dog.png">
                        <p class="user--side-right">Titto</p>
                        <a class="a--side-right" id="addFriend1">Agregar amigo</a>
                    </div>
                    <div class="right-content">
                        <img class="img--side-right" src="./image/avatar-dog.png">
                        <p class="user--side-right">Luna</p>
                        <a class="a--side-right" id="addFriend1">Agregar amigo</a>
                    </div>
                    <div class="right-content">
                        <img class="img--side-right" src="./image/avatar-dog.png">
                        <p class="user--side-right">Toronto</p>
                        <a class="a--side-right" id="addFriend1">Agregar amigo</a>
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