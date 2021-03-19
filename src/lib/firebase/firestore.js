//import { getProfileSummary } from "../view/profileSummary-view.js";

import { postContentView } from "../view/postcontent-view.js";

//EL DATABASE ESTA HABILITADO EN MODO DE PRUEBA
const firestore = firebase.firestore();
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
const getDataUserbyEmail = (user,cb) =>{
  let userData;
  firestore.collection('users')
    .doc(user.email)
    .get() //obten los datos
    .then((doc) => {
      console.log("Muestra lo capturado USER-->", doc.data()) //snapshot es un obj q muestra datos cambiando
      userData = doc.data();
    })
    .catch(error => {
      console.error("Error ", error);
  })
  return userData
}
*/



//Almacena post de cada usuario
const registerPost = (post, cb) => {
  console.log("llega a registerPost--->", post);
  return firestore.collection("posts")
      .doc(post.user)
      .set(post)
      .then(docRef => {
          cb(null, docRef)
          console.log("ID del documento: ", docRef);
      })
      .catch(error => {
          console.error("Error ", error);
          cb(error)
      })
};

//Recupera el todos los post almacenados
const allDataPost = (user, cb) => {
  console.log("llega a allDataPost", user)
  if (user) {
    return firestore.collection("posts")
      .get()
      .then((snapshot) => {
        console.log("LLEGO DE collection post-->", snapshot.docs)
        const allPost = snapshot.docs;
        cb(null, snapshot.docs)
          console.log("snapshot", allPost);
      })
      .catch(error => {
        console.error("Error ", error);
        cb(error)
      })
  }
  else {
    console.log('auth: singOut')
  }

}


export {
  registerUser,
  registerPost,
  allDataPost
  //getDataUserbyEmail
}
