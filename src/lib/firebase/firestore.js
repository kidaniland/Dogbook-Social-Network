//import { getProfileSummary } from "../view/profileSummary-view.js";

//EL DATABASE ESTA HABILITADO EN MODO DE PRUEBA
export const firestore = firebase.firestore();
// Almacena datos de cada usuario
const registerUser = (user, cb) => {
    return firestore.collection("users")
        .doc(user.email)
        .set(user)
        .then(docRef => {
            cb(null, docRef)
            console.log("ID del documento: ", docRef);
        })
        .catch(error => {
            console.error("Error ", error);
            cb(error)
        })
};



/*
  const dataUserByEmail = (email) => {
    firestore.collection('users')
      .where("email", "===", email)
      .get() //obten los datos
      .then( doc => {
        if (doc.exists) {
          getProfileSummary(doc.data())
        }
        else{
          console.log("Usuario no encontrado");
        }
      })
      .catch(error => {
        console.error("Error dataUserEmail", error);
      })
  }
*/




//onAuthStateChanged: este evento se tiene q disparar cada vez q un usuario se loguea o sale
//Si el usuario está autenticado, quiero mostrar los datos de:
/*
auth.onAuthStateChanged(user => { 
  if (user){
    firestore.collection('post')
      .get() //obten los datos
      .then((snapshot) => {
        console.log('Muestra lo capturado en POST-->', snapshot.docs) //snapshot es un obj q muestra datos cambiando
        postContentView(snapshot.docs)
      })
      .catch(error =>{
        console.error("Error", error);
      })
  }
  else{
    console.log('No está logueado>>>>')
    setupPost([])
  }
})
*/


export {
  registerUser,
  //dataUserByEmail
}
