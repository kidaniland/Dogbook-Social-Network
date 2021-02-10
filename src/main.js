import { myFunction } from './lib/index.js';
myFunction();

const init = () => {
    document.getElementById('root').innerHTML = menu();
    window.addEventListener('load', changeroute(window.location.hash));
  
    // reconoce un cambio en el hash y le pasa ese nuevo hash a changeRouter
    if ('onhashchange' in window) {
      window.onhashchange = () => {
        console.log('en onhashchange', window.location.hash);
        document.getElementById('root1').innerHTML = '';
        changeroute(window.location.hash);
      };
    }
  };
  
  window.addEventListener('load', init());

  //otro
  const init = () => {
    document.getElementById('containers').innerHTML = login();
    
    changeRoute(window.location.hash);

    window.addEventListener('locationchange', () => {
        changeRoute(window.location.hash);
    }); 

    window.addEventListener('popstate', () => {
        window.dispatchEvent(new Event('locationchange'))
    });
}
window.addEventListener('load', init);
