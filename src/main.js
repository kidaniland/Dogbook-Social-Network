import { hashCondition } from './lib/router.js';

window.addEventListener('hashchange', () => {
  console.log('cambio --Z>>>', window.location.hash)
  hashCondition(window.location.hash);
});
window.addEventListener('load', () => {
  console.log('cargo --Z>>>')
  hashCondition(window.location.hash);
});