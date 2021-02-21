import { validateForm } from '../view/input-validator.js';


const registerView = () => {
    const registerContent = `
    <div class ="user-register">
        <form action="" class="formulario" id="formulario">
    
        <!--Grupo usuario-->
            <div class="formulario--grupo" id="grupo--usuario">
                <label for="usuario" class="formulario--label">Usuario Canino</label>
                <div class="formulario--grupo-input">
                    <input type="text" class="formulario--input" name="usuario" id="usuario" placeholder="Firulais">
                    <i class="formulario--validacion-estado fas fa-times-circle"></i>
                    <p class="formulario--input-error">
                        El nombre usuario tiene que ser de 4 a 16 dígitos y solo puede contener números, letras y/o guión bajo.
                    </p>
                </div>
            </div>
        
        <!--Grupo raza/especie-->
            <div class="formulario--grupo" id="grupo--raza">
                <label for="raza" class="formulario--label">Raza</label>
                <div class="formulario--grupo-input">
                    <input type="text" class="formulario--input" name="raza" id="raza" placeholder="Caniche">
                    <i class="formulario--validacion-estado fas fa-times-circle"></i>
                    <p class="formulario--input-error">
                        Selecciona la raza a la que pertenece tu mascota.
                    </p>
                </div>
            </div>
    
        <!--Grupo genero-->
            <div class="formulario--grupo" id="grupo--sexo">
                <label for="dog-gender" class="formulario--label">Sexo</label>
                <div class="formulario--grupo-input">
                <label for="">
                    <input type="checkbox" name="dogGender" id="genderMale" class="dog-gender" value="M">
                    <span class="chekbox-gender">Macho</span>
                    <input type="checkbox" name="dogGender" id="genderFem" class="dog-gender" value="F">
                    <span class="chekbox-gender">Hembra</span>
                    <input type="checkbox" name="dogGender" id="genderNone" class="dog-gender" value="D">
                    <span class="chekbox-gender">Desconocido</span>
                </label>
                </div>
            </div>
    
        <!--Grupo nacimiento-->
            <div class="formulario--grupo" id="grupo--nacimiento">
                <label for="nacimiento" class="formulario--label">Edad</label>
                <div class="formulario--grupo-input">
                    <select name="years-old" id="dogYearsOld" data-placeholder="Meses/años"></select>
                    <label for="radio-inline">
                        <input type="checkbox" name="dog-birth" id="dogYear" class="dog-birth" value="Y">
                        <span class="chekbox-birth">Años</span>
                        <input type="checkbox" name="dog-birth" id="dog-month" class="dog-birth" value="Mth">
                        <span class="chekbox-birth">Meses</span>
                    </label>
                </div>
            </div>
    
        <!--Grupo nombre humano-->
            <div class="formulario--grupo" id="grupo--nombre">
                <label for="nombre" class="formulario--label">Nombre Humano</label>
                <div class="formulario--grupo-input">
                    <input type="text" class="formulario--input" name="nombre" id="nombre" placeholder="John Doe">
                    <i class="formulario--validacion-estado fas fa-times-circle"></i>
                    <p class="formulario--input-error">
                        El nombre tiene que ser de 4 a 16 dígitos y solo puede contener números, letras y/o guión bajo.
                    </p>
                </div>
            </div>
        
        <!--Grupo contraseña-->
            <div class="formulario--grupo" id="grupo--password">
                <label for="password" class="formulario--label">Contraseña</label>
                <div class="formulario--grupo-input">
                    <input type="password" class="formulario--input" name="password" id="password">
                    <i class="formulario--validacion-estado fas fa-times-circle"></i>
                    <p class="formulario--input-error">
                        La contraseña debe tener de 4 a 12 dígitos.
                    </p>
                </div>
            </div>
    
        <!--Grupo contraseña 2-->
            <div class="formulario--grupo" id="grupo--password2">
                <label for="password2" class="formulario--label">Repetir contraseña</label>
                <div class="formulario--grupo-input">
                    <input type="password" class="formulario--input" name="password2" id="password2">
                    <i class="formulario--validacion-estado fas fa-times-circle"></i>
                    <p class="formulario--input-error">
                        Ambas contraseñas deben ser iguales.
                    </p>
                </div>
            </div>
        
        <!--Grupo coreo-->
            <div class="formulario--grupo" id="grupo--email">
                <label for="email" class="formulario--label">Correo Electrónico</label>
                <div class="formulario--grupo-input">
                    <input type="email" class="formulario--input" name="email" id="email" placeholder="direccion@email.com">
                    <i class="formulario--validacion-estado fas fa-times-circle"></i>
                    <p class="formulario--input-error">
                        El correo solo puede contener números, letras y/o guión bajo.
                    </p>
                </div>
            </div>
    
        <!--Terminos y condiciones-->
            <div class="formulario--grupo formulario--grupo-terminos" id="grupo--terminos">
                <label for="" class="formulario--label">
                    <input type="checkbox" name="terminos" id="terminos" class="formulario--checkbox">
                    Acepto los términos y condiciones.
                </label>
            </div>
    
        <!--mensaje error-->
            <div class="formulario--mensaje" id="formulario--mensaje">
              <p>
                <i class="fas fa-exclamation-triangle"></i> <b>Error: </b>Por favor rellena el formulacio correctamente.
              </p>
            </div>
    
            <!--button-->
            <div class="formulario--grupo formulario--grupo-btn-enviar">
              <button type="submit" class="formulario--btn" id="RegisterBtn">Enviar</button>
              <p class="formulario--mensaje-exito" id="formulario--mensaje-exito">
                ¡El formulario se ha enviado exitosamente!
              </p>
            </div>
        </form>
    </div>
    `;

    //elementos
    const registerElement = document.createElement('section');
    registerElement.setAttribute('class', 'register-view');
    registerElement.innerHTML = registerContent;

    const formRegister = registerElement.querySelector('#formulario');
    const inputsRegister = registerElement.querySelectorAll('.formulario--input');

    //por cada input del registro...
    inputsRegister.forEach((input) => {
        //console.log("ESTO LLEGO A IMPUT>>> ", input);
        input.addEventListener('keyup', validateForm);
        input.addEventListener('blur', validateForm);
    });

    //evento
    formRegister.addEventListener('submit', (e) =>{
        //e.preventDefault //eliminar al final sino no enviará nada
      
        const gender = registerElement.querySelector('.dog-gender');
        const birth = registerElement.querySelector('.dog-birth');
        const terminos = registerElement.querySelector('#terminos');
      
        if(campos.usuario && 
            campos.nombre && 
            campos.password && 
            campos.correo && 
            campos.raza && 
            terminos.checked && 
            gender.checked && 
            birth.checked) {
          //reinicio todos los campos del formulario
            formulario.reset();
      
          //activamos el mensajito de exito
            registerElement.querySelector('#formulario--mensaje-exito').classList.add('formulario--mensaje-exito-activo');
      
          //para que se elimine en unos 5 segundos
            setTimeout(() => {
                registerElement.querySelector('#formulario--mensaje-exito').classList.remove('formulario--mensaje-exito-activo');
            }, 5000);

          //por cada icono remover la clase correcto
            registerElement.querySelectorAll('.formulario--grupo-correcto').forEach((icono) => {
                icono.classList.remove('formulario--grupo-correcto');
            });
        } 
        else {
            registerElement.getElementById('formulario--mensaje').classList.add('formulario--mensaje-activo');
        }
        //OJOOOOOOOOOOOOOO desde aqui enviar a firebase
      });


    const regularExpression = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    //representan si un campo está valido o no 
    const campos = {
        usuario: false,
        raza: false,
        nombre: false,
        password: false,
        email: false
    }

    return registerElement
} 

export { registerView }