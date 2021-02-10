const loginPageView = `
    <section class="login-page">
    <img src="./image/wave.png" alt="wave" class="wave">
    <div class="container">
    <div class="img">
        <img src="./image/dog-transparent.png" alt="perro">
    </div>
    <div class= "login-content">
        <form action="index-html">
        <img src="./image/avatar.png" alt="avatar" class="avatar">
        <h2>¡Bienvenid@s!</h2>
        <div class="input-div one focus">
            <div class="i">
            <i class="fas fa-dog"></i>
            </div>
            <div>
            <h5>Nombre de usuario</h5>
            <input type="text" class="input" id="email">
            </div>
        </div>
        <div class="input-div two">
            <div class="i">
            <i class="fas fa-lock"></i>
            </div>
            <div>
            <h5>Contraseña</h5>
            <input type="password" class="input" id="password">
            </div>
        </div>
        <a href="#">Registrate</a>
        <input type="submit" class="btn" value="Entrar" id="btn">
        </form>
    </div>
    </div>
    </section>
    
    <!--Modal registro-->
    <div class="modal-register"></div>
    `;
    
    export { loginPageView }