import { createUser } from '../firebase/firebase-config.js';
import { registerUser } from '../firebase/firestore.js';
import { validatePassword2 } from '../validator/validate-input.js';
import { validateRecordField } from '../validator/validate-input.js';


const registerView = () => {
    const registerContent = `

       <div class="registro-bienvenida">
            <h4>Bienvenido a Dogbook</h4>
                <div class="registro-bienvenida-texto">
                    Publica, comparte y conecta con otros amantes de los perros, se parte de este parque digital.
                </div>
            <span>¡Registrate ahora!</span>
        </div>

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
                        Escribe el nombre de la raza a la que pertenece tu mascota.
                    </p>
                </div>
            </div>
    
        <!--Grupo genero-->
            <div class="formulario--grupo" id="grupo--sexo">
                <label for="dog-gender" class="formulario--label">Sexo</label>
                <div class="formulario--grupo-input">
                    <select name="genderDog" id="genderDog">
                    </select>
                </div>
            </div>
    
        <!--Grupo nacimiento-->
            <div class="formulario--grupo" id="grupo--nacimiento">
                <label for="nacimiento" class="formulario--label">Nacimiento</label>
                <div class="formulario--grupo-input">
                    <input type="date" id="bDayDog" placeholder="Fecha de nacimiento:" autocomplete="Fecha de nacimiento:">       
                </div>
            </div>
    
        <!--Grupo nombre- humano-->
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

        <!--Grupo País de origen- humano-->
            <div class="formulario--grupo" id="grupo--nombre">
                <label for="nombre" class="formulario--label">País</label>
                <div class="formulario--grupo-input">
                    <input type="text" class="formulario--input" name="pais" id="paisHumano" placeholder="Chile">
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
                        La contraseña debe tener de 6 a 12 dígitos.
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
              <button type="submit" class="formulario--btn" id="RegisterBtn">Registrarse</button>
              <p class="formulario--mensaje-exito" id="formulario--mensaje-exito">
                ¡El formulario se ha enviado exitosamente!
              </p>
            </div>
        </form>
    `;

    //elementos
    const registerElement = document.createElement('div');
    registerElement.setAttribute('class', 'register-view');
    registerElement.innerHTML = registerContent;

    const formRegister = registerElement.querySelector('#formulario');
    const inputsRegister = registerElement.querySelectorAll('.formulario--input');

    //variables por cada input
    const userDog = registerElement.querySelector('#usuario');
    const breedDog = registerElement.querySelector('#raza');
    const selectGender = registerElement.querySelector('#genderDog');
    const birth = registerElement.querySelector('#bDayDog');
    const nameHuman = registerElement.querySelector('#nombre');
    const country = registerElement.querySelector('#paisHumano');
    const email = registerElement.querySelector('#email');
    const inputPassword1 = registerElement.querySelector('#password');
    const inputPassword2 = registerElement.querySelector('#password2');
    const terminos = registerElement.querySelector('#terminos');

    const regularExpression = {
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{6,12}$/, // 6 a 12 digitos.
        correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    }

    const campos = {
        user: false,
        breed: false,
        nameH: false,
        country: false,
        email: false
    }

    //select género del perro
    let fragment = document.createDocumentFragment();
    const genderDog = ['Selecciona:', 'Macho', 'Hembra', 'Desconocido'];
    for (const gender of genderDog){
        const selectG = document.createElement('option');
        selectG.setAttribute('value', gender.toLowerCase());
        selectG.textContent = gender;
        fragment.appendChild(selectG);
    }
    let gender;
    selectGender.appendChild(fragment);
    selectGender.addEventListener('change', () => {
        gender = selectGender.value;
        console.log("género del perro--> ", gender);
    })

    const validateForm = (e) => {
        switch (e.target.name) {
            case "usuario":
                validateRecordField(regularExpression.nombre, e.target, 'usuario');
            break;
            case "raza":
                validateRecordField(regularExpression.nombre, e.target, 'raza');
            break;
            case "nombre":
                validateRecordField(regularExpression.nombre, e.target, 'nombre');
            break;
            case "pais":
                validateRecordField(regularExpression.nombre, e.target, 'pais');
            break;    
            case "password":
                validateRecordField(regularExpression.password, e.target, 'password');
                validatePassword2(inputPassword1.value, inputPassword2.value);
            break;
            case "password2":
                validatePassword2(inputPassword1.value, inputPassword2.value);
            break;
            case "email":
                validateRecordField(regularExpression.correo, e.target, 'email');
            break;
        }
    }

    //por cada input del registro...
    inputsRegister.forEach((input) => {
        //console.log("ESTO LLEGO A IMPUT>>> ", input);
        input.addEventListener('keyup', validateForm);
        input.addEventListener('blur', validateForm);
    });
    
    //evento SUBMIT
    formRegister.addEventListener('submit', (e) => {
        e.preventDefault //eliminar al final...
        if (campos.user &&
            campos.breed &&
            campos.nameH &&
            campos.country &&
            campos.email &&
            terminos.checked) {
            //creo el usuario con email y pass
            createUser(email.value, inputPassword1.value);

            //le paso de parámetro un obj con todo lo del input, esta funcion desde firestore   
            registerUser({
                user: userDog.value,
                breed: breedDog.value,
                gender: gender,
                birth: birth.value,
                nameH: nameHuman.value,
                country: country.value,
                email: email.value })

            //mensaje de exito
            registerElement.querySelector('#formulario--mensaje-exito')
                .classList.add('formulario__mensaje-exito-activo');

            setTimeout(() => {
                registerElement.querySelector('#formulario--mensaje-exito')
                    .classList.remove('formulario__mensaje-exito-activo');
            }, 5000);
    
            registerElement.querySelectorAll('#formulario--grupo-correcto').forEach((icono) => {
                icono.classList.remove('formulario__grupo-correcto')
            })
        }
        else {
            registerElement.querySelector('#formulario--mensaje').classList.add('formulario--mensaje-activo')
        }
        
    })

    return registerElement
} 

export { registerView }