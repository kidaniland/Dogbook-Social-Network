//import { pushState } from '../router.js';

//EVITAR dejar este archivo a la vista cuando se haga público el proyecto
const firebaseConfig = {
    apiKey: "AIzaSyAaODj-xRqenmcztHx7NlQSdjn1qymLsw4",
    authDomain: "social-network-17cd8.firebaseapp.com",
    projectId: "social-network-17cd8",
    storageBucket: "social-network-17cd8.appspot.com",
    messagingSenderId: "1098491151135",
    appId: "1:1098491151135:web:f45ebeff7f405f84c9262a",
    measurementId: "G-RF5REDL25N"
  };


// Inicializa Firebase
firebase.initializeApp(firebaseConfig);

//Creando Usuario con Email y Passwor
const createUser = (email, password) => {
  const auth = firebase.auth();

  auth
    .createUserWithEmailAndPassword(email, password)
    .then (userCredential => {
      console.log("lo logramos"); 
      //reinicio todos los campos del formulario
      formulario.reset();

      //cerrar formularios OJO esto de ultimo sino no le da tiempo al registro
      //signOut()  
    })
    .catch(error => {
        console.error(error)
        Materialize.toast(error.message, 4000) //mensaje flotante de error
    })
}

//Iniciar sesión
const singIn = (email, password) => {
  const auth = firebase.auth();
console.log("---->", auth);
  auth
    .signInWithEmailAndPassword(email, password) //regresa una promise que podrá identf al usuario ya registrado
    .then (userCredential => {
      console.log("USUARIO INGRESADO :D"); 
      //entrar al MURO
       // pushState('#/muro')
      //reinicio todos los campos del formulario
       //formLogin.reset(); 
  
    })
    .catch(error => {
        console.error(error)
    })
}

//Si el usuario está autenticado, quiero mostrar los datos
firebase
  .auth()
  .onAuthStateChanged(user => { //cada vez q se dispare obten user
    if (user){
      dataBase.collection('post')
        .get()
        .then((snapshot) => {
          console.log('Muestra lo capturado-->', snapshot.docs)
          setupPost(snapshot.docs)
        })
    }
    else{
      console.log('No está logueado>>>>')
      setupPost([])

    }
  })

//Cerrar sesión
const signOut = () => {
  firebase
    .auth()
    .signOut()
    .then( () => {
        localStorage.removeItem('user');
        pushState('#/');
        console.log('Sign-out');
        console.log(user);
    })
    .catch(error => {
      console.error(error)
    })
}

export {
  createUser,
  singIn 
}
