import { pushState } from "../router.js";

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
const createUser = (email, password, cb) => {
  const auth = firebase.auth();
  console.log("LLEGA a create--->", email, password);

  auth
    .createUserWithEmailAndPassword(email, password)
    .then (userCredential => {
      console.log("lo logramos");
      cb(null, userCredential)
      //Enviamos por correlo la URL (durante la verificacion) para que llegue de nuevo a login-view
      /*const config = {
        url: 'http://localhost:5000/'
      }

      if (userCredential.user.emailVerified === false){
          userCredential.user.sendEmailVerification(config)
          //cierro sesión
          signOut()
      }*/
      /*
      setTimeout(() => { 
      //cerrar formulario
      document.querySelector('.register-view').style.display = "none"
      }, 4000);*/ 
    })
    .catch(error => {
      console.error(error)
      cb(error)
    })
}


//Iniciar sesión
const singIn = (email, password, callback) => {
  console.log("LLEGA-->", email, password);
  const auth = firebase.auth();
  //console.log("---->", auth);
  auth
    .signInWithEmailAndPassword(email, password) //regresa una promise que podrá identf al usuario ya registrado
    .then (userCredential => {
      console.log("SE HA LOGEADO")
      callback(null, userCredential)
      /*if(userCredential.user.emailVerified === false){
        localStorage.setItem('user', JSON.stringify(
          {
            name: userCredential.user.displayName,
            email: userCredential.user.email,
            photo: userCredential.user.photoURL,
            uid: userCredential.user.uid,
          }))
          //por ultimos pasamos al muro
          pushState('#/muro')
      }
      else{
        Materialize.toast('Verifica tu correo electrónico antes de ingresar.')
      } */
    })
    .catch(error => {
      console.error(error)
    })
}

//Cerrar sesión
const signOut = () => {
  const auth = firebase.auth();
  auth
    .signOut()
    .then( () => {
        localStorage.removeItem('user');
        pushState('#/');
        console.log('Sesión cerrada');
        console.log(user);
    })
    .catch(error => {
      console.error(error)
    })
}

export {
  createUser,
  singIn,
  signOut
}
