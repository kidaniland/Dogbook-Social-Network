//EL DATABASE ESTA HABILITADO EN MODO DE PRUEBA
const dataBase = firebase.firestore();
// Almacena datos de cada usuario
const registerUser = (user) => {
    return dataBase.collection("users")
        .add(user)
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        })
};

/*
export {
  registerUser
}
*/






//Ingreso con cuenta de Google
/*
//CREAR USUARIO con email/password
const registerUser = (email, password, names) => {
  firebase
    .auth()
    .createUserWithEmailPassword(email, password)
    //esto regresa una promise q recibe un objeto json
    .then(result => {
      result.user.updateProfile({
        displayName : names
      })

      //se lo enviamos por correo al cliente (durante la verificacion) para que llegue de nuevo a login-view
      const config = {
        url: 'http://localhost:5000/'
      }

      //para que firebase envíe un correo de verificación
      result.user.sendEmailVerification(config)
      .catch(error => {
        console.error(error)
        Materialize.toast(error.message, 4000)
      })

      //le pedimos a firebase que no lo guarde hasta que no de click en link de verificación
      firebase.auth().singOut()
      //mensaje de bienvenida al usuario
      Materialize.toast(
        `Bienvenido ${names}, debes realizar el proceso de verificación con el link enviado al correo registrado`, 
        4000,
      )
      //cierra ventana despues del mensaje
      $('.modal').modal('close')
    })
    .catch(error => {
      console.error(error)
      Materialize.toast(error.message, 4000)//para que el usuario vea un mensaje error
    })
}

*/
//Cerrar sesion 
