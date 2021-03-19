import { hashCondition } from './lib/router.js';
import { init, signOut } from './lib/firebase/firebase-config.js';


window.addEventListener('load', () => {
  init((err, user) => {
    //console.log('MAIN -->>', user);

    hashCondition(window.location.hash, user);

    window.addEventListener('hashchange', () => {
      //console.log('cambio --Z>>>', window.location.hash)
      hashCondition(window.location.hash, user);
    });

    //header logOut
    const logOutbtn = document.getElementById('logout');
    logOutbtn.addEventListener('click', () => {
      console.log("Sesión cerrada");
      signOut()
      document.querySelector('.nav--list').style.display = 'none';
    })
  })
});
