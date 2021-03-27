
//import { postContentView } from "../view/postcontent-view.js";
import { allDataPost, registerPost } from "../firebase/firestore.js";
import { postContentView } from "../view/postcontent-view.js";
import { getProfileSummary } from "../view/profileSummary-view.js";
import { wallContent } from "../view/wall-view.js";
import { previewImg, /*progressBar*/ } from "./helper-wallcontroler.js";

//const firestorage = firebase.storage();

const wallView = (user) => {  

    console.log("LLEGA A USER-->", user)

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
    const userDog = wallElement.querySelector('#userDog');
    const img = wallElement.querySelector('#userFoto');

    if(user.photo === null){
        img.setAttribute('src', "./image/avatar.png");
        userDog.textContent = user.user;

    }
    else{
        img.setAttribute('src', user.photo);
        userDog.textContent = user.user;
    }

    const inputFileImg = wallElement.querySelector('#chooseImg');
    const uploader = wallElement.querySelector('#uploader');
    const textarea = wallElement.querySelector('#makePost');
    const sendPostbtn = wallElement.querySelector('.postbar-bttn');

    //Elemento para mostrar todos los post
    let postView = wallElement.querySelector('.view--post');
    allDataPost(user, (error, snapshot) => {
        if(error){
            console.error('Error', error)
        }
        else{
            postView.appendChild(postContentView(snapshot))
        }
    });
    

    let urlUploadedImg = '';

    //Previsualizar la imagen a postear
    inputFileImg.addEventListener('change', (e) => {
        wallElement.querySelector('#imagenPreview').style.display = 'flex';
        console.log('Target file -->', e.target.files[0])
        //obtener el archivo
        let imgFile = e.target.files[0];

        //previsualiza la imagen
        previewImg(imgFile);

        //crear un referencia de almacenamiento (carpeta, nombre de archivo)
        let storageRef = firebase.storage().ref('img_post/' + imgFile.name);
        console.log('------->storageRef ', storageRef);

       //obtengo de esa imagen cargada su URL
        
        storageRef.put(imgFile)
        .then((data) => {
            storageRef.getDownloadURL().then((url) => { 
                //console.log('Sanap ->', data, url, typeof(url));
                urlUploadedImg = url;
                
            })
        });
        
    });

    sendPostbtn.addEventListener('click', () => {
        //console.log("FUNCIONO y la url es-->", urlUploadedImg);
        let date = new Date().toLocaleString();
        wallElement.querySelector('#imagenPreview').style.display = 'none';

        if (urlUploadedImg === '') {
            registerPost({
                autor: user.user,
                comentarios: 0,
                imageProfile: user.photo,
                pawLike: 0,
                post: textarea.value,
                postImg: '',
                tiempo: date
            }, (error) => {
                if (error) {
                    console.log("ERROR ", error)
                }
                else {
                    //mensaje de exito
                    console.log('Todo salió bien')
                    textarea.value = '';
                    //imprimir post
                    allDataPost(user, (error, snapshot) => {
                        if(error){
                            console.error('Error', error)
                        }
                        else{
                            postView.appendChild(postContentView(snapshot))
                        }
                    });
                }
            });
        }
        else{
            registerPost({
                autor: user.user,
                comentarios: 0,
                imageProfile: user.photo,
                pawLike: 0,
                post: textarea.value,
                postImg: urlUploadedImg,
                tiempo: date
            }, (error) => {
                if (error) {
                    console.log("ERROR ", error)
                }
                else {
                    //mensaje de exito
                    console.log('Todo salió bien')
                    textarea.value = '';
                    allDataPost(user, (error, snapshot) => {
                        if(error){
                            console.error('Error', error)
                        }
                        else{
                            postView.appendChild(postContentView(snapshot))
                        }
                    });
                }
            });
        }
        
    })


 
    //CONTENIDO CENTRAl: post realizados

   


    return wallElement
}


export { wallView }