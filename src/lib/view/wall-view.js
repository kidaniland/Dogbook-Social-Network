//import { headerView } from "./header-view.js";
import { footerView } from "./footer-view.js";
import { postContentView } from "./postcontent-view.js";


export const wallContent = `

    <div class ="wall--content">

        <div class="perfil--resumen">
            <div class="sidebar--left">

                <img class="img--side" id="avatarUser">
                <p class="text--side">
                    Soy: </br> 
                    <span class="span--side" id="username"></span>
                </p>
                <p class="text--side">
                    Mi humano se llama: </br>
                    <span class="span--side" id="sideName"></span>
                </p>
                <p class="text--side" id="sideCountry"></p>

                <a href="#/perfil" class="link--side "id="alProfile">Editar perfíl</a>

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

                <div id= "visorArchivo"></div>
                
                <div>
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

        </div>


        <div class="recomendacion">
            <div class="sidebar--right">

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

        ${footerView}
    </div>      
`;



