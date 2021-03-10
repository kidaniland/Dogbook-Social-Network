import { singIn } from '../firebase/firebase-config.js';
import { pushState } from '../router.js';
import { validatorLogin } from '../validator/validate-input.js';

const loginView = () => {
    const loginContent = `
        <img src="./image/wave.png" alt="wave" class="wave">

        <div class="container">
            <div class="img">
                <img src="./image/dog-transparent.png" alt="perro">
            </div>
        <div class= "login-content">

            <form action="" class="formulario-login" id="formularioLogin">
            
            <!--grupo bienvenida-->
                <img src="./image/avatar.png" alt="avatar" class="avatar">
                <h2>Bienvenido</h2>

            <!--grupo usuario-->
                <div class="input-div one">
                    <div class="i">
                            <i class="fas fa-dog"></i>
                    </div>
                    <div>
                            <h5>Email de usuario</h5>
                            <input type="text" class="input" id="userEmail">
                    </div>
                </div>

            <!--grupo password-->
                <div class="input-div two">
                    <div class="i">
                            <i class="fas fa-lock"></i>
                    </div>
                    <div>
                            <h5>Contraseña</h5>
                            <input type="password" class="input" id="userPassword">
                    </div>
                </div>

            <!--al registro-->
                <a href="#/registro" id="registro">Crea una cuenta</a>

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
    /////console.log(">>>>>>>", inputs);

    const loginForm = loginElement.querySelector('#formularioLogin')
    //evento
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const loginEmail = document.querySelector('#userEmail').value;
        const loginPassword = document.querySelector('#userPassword').value;
        //console.log("ENVIAMOS>>>", loginEmail, loginPassword);
        validatorLogin(loginEmail, loginPassword);
        singIn(loginEmail, loginPassword, (error, data) => {
            console.log("ESTO ES EL CALLBACK---", error);
            loginForm.reset();
                setTimeout(() => {
                    pushState('#/muro')
                    document.querySelector('.nav--list').style.display = 'flex';
                }, 2000);
        }); 
        
    })

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