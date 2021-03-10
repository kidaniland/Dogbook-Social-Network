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

//ubicamos al usuario por su email
//const dataUserByEmail = (email) => { 
  const auth = firebase.auth();
  auth.onAuthStateChanged(user => { //cada vez q se dispare obten user
    if (user){
      console.log("XXXXXXXXXXXX USER", user.email)
      firestore.collection('users')
        .doc(user.email)
        .get() //obten los datos
        .then((doc) => {
          console.log('Muestra lo capturado-->', doc.data()) //snapshot es un obj q muestra datos cambiando
          //setupPost(snapshot.docs)
        })
    }
    else{
      console.log('No está logueado>>>>')
    }
  })
//}

/*
//onAuthStateChanged: este evento se tiene q disparar cada vez q un usuario se loguea o sale
//Si el usuario está autenticado, quiero mostrar los datos de:
const dataPost = () => {
  const auth = firebase.auth();
  auth
  .onAuthStateChanged(user => { //cada vez q se dispare obten user
    if (user){
      firestore.collection('post')
        .get() //obten los datos
        .then((snapshot) => {
          console.log('Muestra lo capturado-->', snapshot.docs) //snapshot es un obj q muestra datos cambiando
          setupPost(snapshot.docs)
        })
    }
    else{
      console.log('No está logueado>>>>')
      setupPost([])

    }
  })
}
*/

export {
  registerUser
  //dataUserByEmail
}
