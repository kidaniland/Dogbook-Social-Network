const headerView = () => {
    const headerContent = `
        <div class="header">
            <a href="" class="header--logo">Dogbook</a>
            <i class="fas fa-bars"  class="header--toggle" id="nav-toggle"></i>
            <nav class="nav" id="nav-menu">
                <div class="nav--content bd-grid">
                    <i class="fas fa-times" class="nav--close" id="nav-close"></i>
                    <div class="nav--perfil">
                        <div class="nav--img">
                            <img src="https://www.petplan.co.uk/images/blog-assets/blog-make-your-dog-happy.jpg" alt="">
                        </div>
                        <div>
                            <a href="" class="nav--name">Firulais</a>
                            <span class="nav--human">Daniela Villa</span>
                        </div>
                    </div>
                    <div class="nav--menu">
                        <ul class="nav--list">
                            <li class="nav--item">
                                <a href="" class="nav--link">Home</a>
                                <i class="fas fa-home" class="nav--icon"></i>
                            </li>
                            <li class="nav--item">
                                <a href="" class="nav--link">Perfil</a>
                                <i class="fas fa-dog" class="nav--icon"></i>
                            </li>
                            <li class="nav--item">
                                <a href="" class="nav--link">Cerrar Sesión</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class=""></div>
            </nav>
        </div>
        `;
    const headerElement = document.createElement('header');
    headerElement.setAttribute('class', 'header-view');
    headerElement.innerHTML = headerContent;

    return headerElement    
}