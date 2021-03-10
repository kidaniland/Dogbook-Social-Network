import { hashCondition } from './lib/router.js';
import { signOut } from './lib/firebase/firebase-config.js';

window.addEventListener('hashchange', () => {
  //console.log('cambio --Z>>>', window.location.hash)
  hashCondition(window.location.hash);
});
window.addEventListener('load', () => {
  //console.log('cargo --Z>>>')
  hashCondition(window.location.hash);
});

//header logOut
const logOutbtn = document.getElementById('logout');
logOutbtn.addEventListener('click', () => {
  console.log("Sesión cerrada");
  signOut()
})
