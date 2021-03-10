//import { dataUserByEmail } from "../firebase/firestore.js";
import { wallContent } from "../view/wall-view.js";

const wallView = () => {  

    const wallElement = document.createElement('div');
    wallElement.setAttribute('class', 'wall-view');
    wallElement.innerHTML = wallContent;

    //navegador del header
    document.querySelector('.nav--list').style.display = 'flex';

    
    //SIDEBAR LEFT: resumen de perfil
    const imgProfile = wallElement.querySelector('#avatarUser'); //la misma para Make Post
    const nameUser = wallElement.querySelector('#username'); //tambien para make post y post view
    const nameHuman = wallElement.querySelector('#sideName');
    const countryUser = wallElement.querySelector('#sideCountry');
      

    //si hay foto la colocamos, sino se coloca la que es por default
    const user = JSON.parse(localStorage.getItem('user'));
    /*
    if (user.photo === null) {
        imgProfile.setAttribute('src', './image/avatar.png'); 
    }
    else{
        imgProfile.setAttribute('src', user.photo);
    }
    */
    //encontrando usuario por email
    //dataUserByEmail(user.email)



    //MAKE A POST: recogiendo los datos
    /* 
    const makePost = wallContent.querySelector('#postbarImg');
    makePost.addEventListener('click', () => {
        console.log("enviandooooooo");
    }) 
    */


    //para pintar los post
    /*
    const postList = document.querySelector('#post')
    */
    //listar usuarios autenticados basado en solo los cambios
    


return wallElement
}
export { wallView }