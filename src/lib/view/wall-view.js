const wallView = () => {
    const wallContent = `
        <div>
            <h1>AHORA SI ESCRIBIMOS TODO EL CONTENIDO AQUIIII...</h1>
            <h1>AHORA SI ESCRIBIMOS TODO EL CONTENIDO AQUIIII...</h1>
            <h1>AHORA SI ESCRIBIMOS TODO EL CONTENIDO AQUIIII...</h1>
            <h1>AHORA SI ESCRIBIMOS TODO EL CONTENIDO AQUIIII...</h1>
            <h1>AHORA SI ESCRIBIMOS TODO EL CONTENIDO AQUIIII...</h1>
        </div>
    `;

    const wallElement = document.createElement('div');
    wallElement.setAttribute('class', 'wall-view');
    wallElement.innerHTML = wallContent;

    return wallElement
}

export { wallView }