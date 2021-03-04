const headerView = `
      
    <header>
        <nav class="nav" id="navMenu">
            <label class="header--logo">D<i class="fas fa-paw"></i>gbook</label>
            <input type="checkbox" id="check">  
            <label for= "check" class="menu--toggle">
                <i class="fas fa-bars"></i> 
            </label>
            <ul class="nav--list">
                <li class="nav--item">
                    <a href="#/muro" class="nav--link active">
                        <i class="fas fa-home" class="nav--icon"></i> 
                        Inicio
                    </a>
                </li>
                <li class="nav--item">
                    <a href="" class="nav--link">
                        <i class="fas fa-dog" class="nav--icon"></i>
                        Perfil 
                    </a>
                </li>
                <li class="nav--item">
                    <a href="" class="nav--link"><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</a>
                </li>
            </ul>
        </nav>
    </header>
`;

export { headerView }
