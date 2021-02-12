//importar lo que escriba en FIREBASE AUTH y/o FIRESTORE

//import { registerView } from '../view/register-view.js';

export const registerControler = () => {
    const registerData = () => {
        const btnRegister = document.querySelector('#btn')
        //Dog
        const nameDogInput = document.querySelector('#nameDog');
        const breedSelect = document.querySelector('#breed');
        const sexSelect = document.querySelector('#sexSelect');
        const birthDogSelect = document.querySelector('#birthDog');
        //Human
        const nameInput = document.querySelector('#nameHuman');
        const secondnImput = document.querySelector('#secondNameHuman');
        const emailInput = document.querySelector('#emailInput');
        const passwordA = document.querySelector('#passwordA');
        const passwordB = document.querySelector('#passwordB');
        const birthHumanSelect = document.querySelector('#birthDog');

        const result = validatorLogin(emailEnter.value, passwordEnter.value);

        btnEnter.disabled = result; //desabilito, inicia en True
        if (result === false) {
            btnEnter.classList.remove('disabled');
        } else {
            btnEnter.classList.add('disabled');
        }

        //aqui buscar como recorrer todos los query y me extraer los datos para almacenar en firebase 
    }; 
};