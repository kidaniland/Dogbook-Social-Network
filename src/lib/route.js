import { loginPage } from './controler/login-controler.js';
//import { registerControler } from './controler/login-controler.js'; //iniciado, faltan datos
//import { wallView } from './view/wall-view.js'; //no está hecho aun
//import { postView } from './view/post-view.js'; //no está hecho aun
//import { profileView } from './view/profile-view.js'; //no está hecho aun

//hay q condicionar a la pantalla de inicio al hash, si este es " " o null entonces w.l.h= #/
export const hashCondition = (hash) => {
    if (hash === '' || localStorage.getItem('user') === null) {
        window.location.hash = '#/';
        return hashView('#/');
    }
    return hashView(hash);
}
//muestra vistas en función del hash que ejecuta la funcion pushState
export const hashView = (hash) => {
    const mainContainers = document.getElementById('containers');
    mainContainers.innerHTML = '';
  
    switch (hash) {
        case '#/inicio':
            loginPage(); //lo que vienen de los controlers
        break;
        case '#/registro':
            registerControler();
        break;
        case '#/muro':
            //lo que venga de los controler
        break;
        case '#/post':
            //lo que venga de los controler
        break;
        case '#/perfil':
            //lo que venga de los controler 
        break;
        default:
            mainContainers.innerHTML = '<h2>No existe</h2>';
    }
};

// finalmente se modifica el hash en la url
export const pushState = (route) => {
    let stateObj = {};
    history.pushState(stateObj, "page 2", route);
    window.dispatchEvent(new Event('pushState'));
    window.dispatchEvent(new Event('locationchange'));
};