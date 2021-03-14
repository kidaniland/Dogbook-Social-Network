
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

    /*elementos*/
    const img = wallElement.querySelector('#avatarUser');
    const userDog = wallElement.querySelector('#username');
    const inputFileImg = wallElement.querySelector('#chooseImg');

    //Previsualizar la imagen a postear
    inputFileImg.addEventListener('change', (e) => {
        console.log('Target file -->', e.target.files[0])

        let reader= new FileReader();
        reader.readAsDataURL(e.target.files[0]);

        reader.onload= function(){
            let preview  = wallElement.querySelector('#imagenPreview');
            let imgElement = document.createElement('img');
                imgElement.src = reader.result;
                imgElement.style.width ="20rem";
                preview.innerHTML='';
                preview.append(imgElement);
        }
    })

    //Pveto boton enviar
    const sendPost = wallElement.querySelector('.postbar-bttn');
    sendPost.addEventListener('click', () => {
        console.log("FUNCIONO");
        const textarea = wallElement.querySelector('#makePost').value;
        console.log("esto tiene textArea", textarea);

    })


 
    //CONTENIDO CENTRAl: post realizados
   


    return wallElement
}


export { wallView }