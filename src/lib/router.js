/*---LUGAR DESDE DONDE SE INVOCARAN TODAS LAS PETICIONES---*/
import { loginView } from '../lib/view/login-view.js';
import { registerView } from '../lib/view/register-view.js';
import { wallView } from './controler/wallview-controler.js';
import { profileView } from './view/profile-view.js';

//EL RAUTER TIENE QUE TENER ACCESO A LA INFORMACION DE LA API(O FIREBASE)

//Condicion hash para pantalla de inicio, si este es " " o null entonces w.l.h= #/
export const hashCondition = (hash, user) => {
    //console.log('HAS --ZZZ>', hash)
    if (hash === '' || !user){
        return router('#/');
    }
    return router(hash, user);
}

//muestra vistas en función del hash que ejecuta la funcion pushState
export const router = (hash, user) => {
    const mainContainers = document.getElementById('root');
    mainContainers.innerHTML = '';
  
    switch (hash) {
        case '#/':
            return mainContainers.appendChild(loginView(user)); 
        break;
        case '#/registro':
            return mainContainers.appendChild(registerView(user)); 
        break;
        case '#/muro':
            return mainContainers.appendChild(wallView(user));
        break;
        case '#/perfil':
            return mainContainers.appendChild(profileView(user));
        break;
        default:
            mainContainers.innerHTML = '<h2>No existe</h2>';
    }
};

// finalmente se modifica el hash en la url
export const pushState = (route) => {
    let stateObj = {};
    history.pushState(stateObj, "", route);
    window.dispatchEvent(new Event('pushState'));
    window.dispatchEvent(new Event('locationchange'));
    window.dispatchEvent(new Event('hashchange'))
};
