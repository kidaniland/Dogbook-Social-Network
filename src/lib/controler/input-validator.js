//import { campos } from '../controler/register-controler';


/*
export const validatorRegister = (user, breed, name, password, password2, email) => {
    const campos = {
        usuario: false,
        raza: false,
        nombre: false,
        password: false,
        email: false
    };
    const regularExpression = {
        usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
        nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
        password: /^.{4,12}$/, // 4 a 12 digitos.
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    };

    //por cada input ejecuta lo siguiente...
    inputsRegister.forEach((input)=>{
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
    });

    const validarFormulario = (e) => {
        switch (e.target.name) {
            case "usuario":
                validarCampo(regularExpression.usuario, e.target, 'usuario');
            break;
            case "raza":
                validarCampo(regularExpression.nombre, e.target, 'raza');
            break;
            case "nombre":
                validarCampo(regularExpression.nombre, e.target, 'nombre');
            break;
            case "password":
                validarCampo(regularExpression.password, e.target, 'password');
                validarPassword2();
            break;
            case "password2":
                validarPassword2();
            break;
            case "email":
                validarCampo(regularExpression.correo, e.target, 'email');
            break;
        }
    };
    const validarCampo = (expresion, input, campo) => {
        if(expresion.test(input.value)){
          document.getElementById(`grupo--${campo}`).classList.remove('formulario--grupo-incorrecto');
          document.getElementById(`grupo--${campo}`).classList.add('formulario--grupo-correcto');
          document.querySelector(`#grupo--${campo} i`).classList.remove('fa-times-circle');
          document.querySelector(`#grupo--${campo} i`).classList.add('fa-check-circle');
          document.querySelector(`#grupo--${campo} .formulario--input-error`).classList.remove('formulario--input-error-activo');
          campos[campo] = true;
        }
        else{
          document.getElementById(`grupo--${campo}`).classList.add('formulario--grupo-incorrecto');
          document.getElementById(`grupo--${campo}`).classList.remove('formulario--grupo-correcto');
          document.querySelector(`#grupo--${campo} i`).classList.add('fa-times-circle');
          document.querySelector(`#grupo--${campo} i`).classList.remove('fa-check-circle');
          //y ahora si agregamos el parrafo de instrucciones
          document.querySelector(`#grupo--${campo} .formulario--input-error`).classList.add('formulario--input-error-activo');
          campos[campo] = false;
        }
    };
  
    const validarPassword2 = () => {
        const inputPassword1 = document.getElementById('password');
        const inputPassword2 = document.getElementById('password2');
  
        if(inputPassword1.value !== inputPassword2.value){
          document.getElementById(`grupo--password2`).classList.add('formulario--grupo-incorrecto');
          document.getElementById(`grupo--password2`).classList.remove('formulario--grupo-correcto');
        //icono
          document.querySelector(`#grupo--password2 i`).classList.add('fa-times-circle');
          document.querySelector(`#grupo--password2 i`).classList.remove('fa-check-circle');
  
          document.querySelector(`#grupo--password2 .formulario--input-error`).classList.add('formulario--input-error-activo');
          campos['password'] = false;
  
        } 
        else {
          document.getElementById(`grupo--password2`).classList.remove('formulario--grupo-incorrecto');
          document.getElementById(`grupo--password2`).classList.add('formulario--grupo-correcto');
  
          document.querySelector(`#grupo--password2 i`).classList.remove('fa-times-circle');
          document.querySelector(`#grupo--password2 i`).classList.add('fa-check-circle');
  
          document.querySelector(`#grupo--password2 .formulario--input-error`).classList.remove('formulario--input-error-activo');
          campos['password'] = true;
      }
    };
}
*/


