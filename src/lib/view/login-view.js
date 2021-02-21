/*HTML DE LA VISTA LOGIN*/

import { registerView } from "./register-view.js";

const loginView = () => {
    const loginContent = `
        <img src="./image/wave.png" alt="wave" class="wave">
        <div class="container">
        <div class="img">
            <img src="./image/dog-transparent.png" alt="perro">
        </div>
        <div class= "login-content">
            <form action="index-html" class="formulario-login" id="formularioLogin">
            
            <!--grupo bienvenida-->
                <img src="./image/avatar.png" alt="avatar" class="avatar">
                <h2>Dogbook</h2>

            <!--grupo usuario-->
                <div class="input-div one">
                    <div class="i">
                            <i class="fas fa-dog"></i>
                    </div>
                    <div>
                            <h5>Nombre de usuario</h5>
                            <input type="text" class="input" id="user">
                    </div>
                </div>

            <!--grupo password-->
                <div class="input-div two">
                    <div class="i">
                            <i class="fas fa-lock"></i>
                    </div>
                    <div>
                            <h5>Contraseña</h5>
                            <input type="password" class="input" id="password">
                    </div>
                </div>

            <!--al registro-->
                <a href="#/registro" id="registro">Registrar usuario</a>

            <!--btn entrar-->
                <button type="submit" class="login-btn" value="Entrar" id="loginBtn">Entrar</button>
            </form>
        </div>
        </div>
    `;

    //ubicando elementos de login-view
    const loginElement = document.createElement('section');
    loginElement.setAttribute('class', 'login-view');
    loginElement.innerHTML = loginContent;

    const inputs = loginElement.querySelectorAll('.input');
    console.log(">>>>>>>", inputs);

    //evento del boton entrar
    const enterSite = loginElement.querySelector('#loginBtn');
    enterSite.addEventListener('click', () => {
        const user = document.querySelector('#user').value;
        const password = document.querySelector('#password').value;
        validatorLogin(user, password);
    });

    //hacia la vista registo
   /* const HrefRegister = loginElement.querySelector('#registro');
    HrefRegister.addEventListener('click', () => {
        console.log("AKIIIIIII");
        window.location = "#/registro";
    });*/


    //funcion para q los inputs no esten vacios
    const validatorLogin = (userValue, passwordValue) => {
        if (userValue.trim() === '' || passwordValue.trim() === '') {
            return true;
        }
        else {
            return false;
        }
    }

    //Funciones estéticas de los input -PAG LOGIN-
    const focusFunction = (e) => {
        //console.log("THIS>>", this, e.target.parentNode.parentNode) para llegar hasta el div padre;
        let parent = e.target.parentNode.parentNode;
        parent.classList.add('focus');
    }

    const blurFunction = (e) => {
        let parent = e.target.parentNode.parentNode;
        if(e.target.value === ""){
            parent.classList.remove('focus');
        }
    }

    inputs.forEach(input => {
        input.addEventListener('focus', focusFunction); 
        input.addEventListener('blur', blurFunction); 

    });
    
    return loginElement
} 
    
    export { loginView }