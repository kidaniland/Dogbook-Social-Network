const profileView = () => {
    const profileContent =
        ` <h1>EN TODO ESTO VA EL PERFIL</h1>
        <h1>EN TODO ESTO VA EL PERFIL</h1>
        <h1>EN TODO ESTO VA EL PERFIL</h1>
        <h1>EN TODO ESTO VA EL PERFIL</h1>
        `;
    const profileElement = document.createElement('div');
    profileElement.innerHTML = profileContent;


    return profileElement
}

export { profileView }

