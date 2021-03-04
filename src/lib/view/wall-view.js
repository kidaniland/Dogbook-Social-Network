import { headerView } from "./header-view.js";
import { footerView } from "./footer-view.js";

const wallView = () => {
    const wallContent = `
        ${headerView}
        <div class ="wall--content">
            <div class="perfil--resumen">
                <h1>RESUMEN DEL PERFIL</h1>
            </div>
            <div class="post--resumen">
                <h1>LOS POST AGREGADOS</h1>
            </div>
            <div class="recomendacion">
                <h1>Recomendaciones o fotos de otros perfiles</h1>
            </div>
        </div> 
        ${footerView}
    `;

    const wallElement = document.createElement('div');
    wallElement.setAttribute('class', 'wall-view');
    wallElement.innerHTML = wallContent;

    //evento TOGGLE-MENU del HEADER
    /*const toggleMenu = wallElement.querySelector('.menu--toggle');
        toggleMenu.addEventListener('click', () => {
            console.log("<<<<<CLIK>>>>");
            //toggleMenu.classList.add('active');

            const changeIcon = wallElement.querySelector('.icon');
            changeIcon.classList.remove('.fa-bars');
            changeIcon.classList.add('.fa-times');

            const navClass = wallElement.querySelector('.nav')
            navClass.classList.add('active')
        })*/

    return wallElement
}

export { wallView }