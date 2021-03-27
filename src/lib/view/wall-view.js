import { footerView } from "./footer-view.js";

export const wallContent = `

    <div class ="wall--content">

        <div class="perfil--resumen">
            
        </div>


        <div class="post--content">

            <div class="make--post">	
                <div class="make--post-img">
                    <img class="make--post-img-user" id="userFoto">
                </div>

                <div class="make--post-username">				 
                    <p class="make--post-name" id="userDog"></p>
                </div>

                <div class="make--post-post">
                    <textarea id="makePost" placeholder="¿Qué estás oliendo?, envía un imágen o ladrido."></textarea>
                </div>

                <div class="make--postbar">

                    <div type="button" class="postbar-bttn">
                        <i class="fas fa-paper-plane"></i>
                    </div>

                    <label for="chooseImg" class="make--postbar-label">
                        <i class="far fa-image" id="imgbttn"></i>   
                    </label>
                    <input type="file" accept="images/*" name="image" id="chooseImg">

                </div>
                
            </div>
            <div class="make--post-imagenPreview" id="imagenPreview"></div>
            <div class="view--post">
            <!-- DESDE POSTCONTENT-VIEW-->
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



