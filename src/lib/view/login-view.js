/*HTML DE LA VISTA LOGIN*/

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
                <h2>¡Conectate a Dogbook!</h2>

            <!--grupo usuario-->
                <div class="input-div one">
                    <div class="i">
                            <i class="fas fa-dog"></i>
                    </div>
                    <div>
                            <h5>Nombre de usuario</h5>
                            <input type="text" class="input" id="email">
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
                <a href="#">Registrate</a>

            <!--btn entrar-->
                <button type="submit" class="login-btn" value="Entrar" id="LoginBtn">
            </form>
        </div>
        </div>
    `;

    //Funciones estéticas de login-view
    const loginElement = document.createElement('section');
    loginElement.setAttribute('class', 'login-page');
    loginElement.innerHTML = loginContent;

    const inputs = loginElement.querySelectorAll('.input');
    console.log(">>>>>>>", inputs);

    //Funciones focus de los input -PAG LOGIN-
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