//función para obtener la lista de datos para hacer el resumen del perfil

export const getProfileSummary = (user) => {
    console.log("LLEGA a doc-->", user);

    const sidebarLeft = document.createElement('div'); 
    sidebarLeft.setAttribute('class', 'sidebar--left');

    const elementsProfileS = `
        <img class="img--side" id="avatarUser"></img>
        <p class="text--side">
            Soy: </br> 
            <span class="span--side" id="username"></span>
        </p>
        <p class="text--side">
            Mi humano se llama: </br>
            <span class="span--side" id="sideName"></span>
        </p>
        <p class="text--side" id="sideCountry">
        </p>
        <a href="#/perfil" class="link--side "id="alProfile">Editar perfíl</a>
    `; 

    sidebarLeft.innerHTML = elementsProfileS;

    const img = sidebarLeft.querySelector('#avatarUser');
    const sideUser = sidebarLeft.querySelector('#username');
    const sideName = sidebarLeft.querySelector('#sideName');
    const sideCountry = sidebarLeft.querySelector('#sideCountry')

    const firestore = firebase.firestore();
    firestore.collection('users')
      .doc(user.email)
      .get() //obten los datos
      .then((doc) => {
        console.log('Muestra lo capturado USER-->', doc.data()) //snapshot es un obj q muestra datos cambiando
        const userData = doc.data();
        img.setAttribute('src', userData.photo)
        sideUser.innerHTML = userData.user;
        sideName.innerHTML = userData.nameH;
        sideCountry.innerHTML = '<i class="fas fa-map-marker-alt"></i>  ' + userData.country;
      })
      .catch(error => {
        console.error("Error ", error);
    })


    return sidebarLeft
}
    
