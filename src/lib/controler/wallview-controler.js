
import { postContentView } from "../view/postcontent-view.js";
import { getProfileSummary } from "../view/profileSummary-view.js";
import { wallContent } from "../view/wall-view.js";



const wallView = (user) => {  

    const wallElement = document.createElement('div');
    wallElement.setAttribute('class', 'wall-view');
    wallElement.innerHTML = wallContent;

    //navegador del header
    document.querySelector('.nav--list').style.display = 'flex';

    
    //SIDEBAR LEFT: resumen de perfil
    const profileSummary = wallElement.querySelector('.perfil--resumen');
    profileSummary.appendChild(getProfileSummary(user)); 

    //CONTENIDO CENTRAl: hacer un post

    //CONTENIDO CENTRAl: post realizados
    const postContentinMain = wallElement.querySelector('.post--content');
    postContentinMain.innerHTML += postContentView();


    return wallElement
}


export { wallView }