import {
    authGoogle,
    createUser,
    signIn,
} from '../lib/firebase/firebase-auth.js'; //no creado

import { registerUser, getUserByEmail } from '../lib/firebase/firestore.js'; //no usado aun

import { loginPageView } from '../view/login-view.js'; //le falta el modal de registro

import {
    validatorLogin,
    validatorRegisterDog,
    validatorRegisterHuman
} from './input-validator.js'; //creado, le falta Validator register

import { pushState } from './router.js';

export const loginPage = () => {
//Elementos de PAG LOGIN
    const divLogin = document.createElement('div');
    divLogin.setAttribute('id', 'contenedor');
    divLogin.innerHTML = loginPageView;
    document.querySelector('#containers').appendChild(divLogin);

    //Variables para focus
    const inputs = document.querySelectorAll('.input');

    //Funciones focus PAG LOGIN
    function focusFunction(){
        let parent = this.parentNode.parentNode;
        parent.classList.add('focus');
    }

    function blurFunction(){
        let parent = this.parentNode.parentNode;
        if(this.value === ""){
            parent.classList.remove('focus');
        }
    }

    inputs.forEach(input => {
        input.addEventListener('focus', focusFunction); 
        input.addEventListener('blur', blurFunction); 

    });

    // Valida email y password
    const validateEmailPassword = () => {
        const btnEnter = document.querySelector('#btn')
        const emailEnter = document.querySelector('#email');
        const passwordEnter = document.querySelector('#password');
        const result = validatorLogin(emailEnter.value, passwordEnter.value);

        btnEnter.disabled = result; //desabilito, inicia en True
        if (result === false) {
            btnEnter.classList.remove('disabled');
        } else {
            btnEnter.classList.add('disabled');
        }
    };
    divLogin.querySelector('#email').addEventListener('input', validateEmailPassword);
    document.querySelector('#password').addEventListener('input', validateEmailPassword);

}