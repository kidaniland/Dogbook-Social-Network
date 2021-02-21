//importar lo que escriba en FIREBASE AUTH y/o FIRESTORE

//import { registerView } from '../view/register-view.js';

//import { validatorRegister } from '../controler/input-validator'

//nombre de los campos a rellenar en formulario de registro

//import { validatorRegister } from '../controler/input-validator.js';


/*
export const registerControler = () => {
    const validateRegisterForm = () => {
        //elementos
        const btnSubmit = document.querySelector('#RegisterBtn')
        const userDog = document.querySelector('#usuario');
        const breedDog  = document.querySelector('#raza');
        const genderDog = document.querySelector('.chekbox-gender');
        const birthDog = document.querySelector('.chekbox-birth');
        const humanName = document.querySelector('#nombre');
        const password = document.querySelector('#password');
        const password2 = document.querySelector('#password2');
        const email = document.querySelector('#email');
        const terminos =  document.querySelector('#terminos');

        const result = validatorRegister(
            userDog.value, 
            breedDog.value, 
            humanName.value, 
            password.value, 
            password2.value,
            email.value);

            if(campos.usuario && 
                campos.nombre && 
                campos.password && 
                campos.correo && 
                campos.raza && 
                terminos.checked && 
                genderDog.checked && 
                birthDog.checked) {
                //reinicio todos los campos del formulario
                    formulario.reset();
            
                //activamos el mensajito de exito
                    document.getElementById('formulario--mensaje-exito').classList.add('formulario--mensaje-exito-activo');
            
                //para que se elimine en unos 5 segundos
                    setTimeout(() => {
                        document.getElementById('formulario--mensaje-exito').classList.remove('formulario--mensaje-exito-activo');
                    }, 5000);
                    
                //por cada icono remover la clase correcto
                    document.querySelectorAll('.formulario--grupo-correcto').forEach((icono) => {
                        icono.classList.remove('formulario--grupo-correcto');
                    });
                } 
              else {
                    document.getElementById('formulario--mensaje').classList.add('formulario--mensaje-activo');
                }
              //desde aqui enviar a firebase
    };
    document.querySelector('#user').addEventListener('input', validateEmailPassword);
    document.querySelector('#password').addEventListener('input', validateEmailPassword);
};
*/