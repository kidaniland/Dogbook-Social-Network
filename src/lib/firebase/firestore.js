//EL DATABASE ESTA HABILITADO EN MODO DE PRUEBA
export const firestore = firebase.firestore();
// Almacena datos de cada usuario
const registerUser = (user) => {
    return firestore.collection("users")
        .add(user)
        .then(docRef => {
            console.log("ID del documento: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error ", error);
        })
};

//Si el usuario está autenticado, quiero mostrar los datos de:
const dataPost = () => {
  const auth = firebase.auth();
  auth
  .onAuthStateChanged(user => { //cada vez q se dispare obten user
    if (user){
      firestore.collection('post')
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
}


export {
  registerUser
}
