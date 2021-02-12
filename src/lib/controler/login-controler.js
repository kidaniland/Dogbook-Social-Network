/*import {
    authGoogle,
    createUser,
    signIn,
} from '../lib/firebase/firebase-auth.js'; //no creado*/

/*import { registerUser, getUserByEmail } from '../lib/firebase/firestore.js'; //no usado aun*/

//import { loginView } from '../view/login-view.js'; 

import { 
    validatorLogin
} from '../controler/input-validator.js';

export const loginPage = () => {
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
};