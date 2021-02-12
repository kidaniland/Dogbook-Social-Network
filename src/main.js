import { loginView } from './lib/view/login-view.js';
import { hashCondition } from './lib/route.js';

const initial = () => {
  //console.log(">>", loginView);
  document.getElementById('containers').appendChild(loginView());
  window.addEventListener('locationchange', () => {
    hashCondition(window.location.hash);
  });
}
window.addEventListener('load', initial); //sin los parentesis porq eso significaría invacación inmediata.

