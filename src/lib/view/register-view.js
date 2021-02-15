const registerView = `
<div class ="user-register">
    <form action="" class="formulario" id="formulario">

    <!--Grupo usuario-->
        <div class="formulario--grupo" id="grupo--usuario">
            <label for="usuario" class="formulario--label">Usuario Canino</label>
            <div class="formulario--grupo-input">
                <input type="text" class="formulario--input" name="usuario" id="usuario" placeholder="Firulais">
                <i class="formulario--validacion-estado fas fa-times-circle"></i>
                <p class="formulario--input-error">
                    El nombre usuario tiene que ser de 4 a 16 dígitos y solo puede contener números, letras y/o guión bajo.
                </p>
            </div>
        </div>
    
    <!--Grupo raza/especie-->
        <div class="formulario--grupo" id="grupo--raza">
            <label for="raza" class="formulario--label">Raza</label>
            <div class="formulario--grupo-input">
                <input type="text" class="formulario--input" name="raza" id="raza" placeholder="Caniche">
                <i class="formulario--validacion-estado fas fa-times-circle"></i>
                <p class="formulario--input-error">
                    Selecciona la raza a la que pertenece tu mascota.
                </p>
            </div>
        </div>

    <!--Grupo genero-->
        <div class="formulario--grupo" id="grupo--sexo">
            <label for="dog-gender" class="formulario--label">Sexo</label>
            <div class="formulario--grupo-input">
            <label for="">
                <input type="checkbox" name="dog-gender" id="dog-gender-male" class="dog-gender-male" value="M">
                <span class="lbl">Macho</span>
                <input type="checkbox" name="dog-gender" id="dog-gender-fem" class="dog-gender-fem" value="F">
                <span class="lbl">Hembra</span>
                <input type="checkbox" name="dog-gender" id="dog-gender-none" class="dog-gender-none" value="D">
                <span class="lbl">Desconocido</span>
            </label>
            </div>
        </div>

    <!--Grupo nacimiento-->
        <div class="formulario--grupo" id="grupo--nacimiento">
            <label for="nacimiento" class="formulario--label">Edad</label>
            <div class="formulario--grupo-input">
                <select name="years-old" id="dogYearsOld" data-placeholder="Meses/años"></select>
                <label for="radio-inline">
                    <input type="checkbox" name="dog-birth" id="dogYear" class="dog-edad" value="Y">
                    <span class="lbl">Años</span>
                    <input type="checkbox" name="dog-birth" id="dog-month" class="dog-edad" value="Mth">
                    <span class="lbl">Meses</span>
                </label>
            </div>
        </div>

    <!--Grupo nombre humano-->
        <div class="formulario--grupo" id="grupo--nombre">
            <label for="nombre" class="formulario--label">Nombre Humano</label>
            <div class="formulario--grupo-input">
                <input type="text" class="formulario--input" name="nombre" id="nombre" placeholder="John Doe">
                <i class="formulario--validacion-estado fas fa-times-circle"></i>
                <p class="formulario--input-error">
                    El nombre tiene que ser de 4 a 16 dígitos y solo puede contener números, letras y/o guión bajo.
                </p>
            </div>
        </div>
    
    <!--Grupo contraseña-->
        <div class="formulario--grupo" id="grupo--password">
            <label for="password" class="formulario--label">Contraseña</label>
            <div class="formulario--grupo-input">
                <input type="password" class="formulario--input" name="password" id="password">
                <i class="formulario--validacion-estado fas fa-times-circle"></i>
                <p class="formulario--input-error">
                    La contraseña debe tener de 4 a 12 dígitos.
                </p>
            </div>
        </div>

    <!--Grupo contraseña 2-->
        <div class="formulario--grupo" id="grupo--password2">
            <label for="password2" class="formulario--label">Repetir contraseña</label>
            <div class="formulario--grupo-input">
                <input type="password" class="formulario--input" name="password2" id="password2">
                <i class="formulario--validacion-estado fas fa-times-circle"></i>
                <p class="formulario--input-error">
                    Ambas contraseñas deben ser iguales.
                </p>
            </div>
        </div>
    
    <!--Grupo coreo-->
        <div class="formulario--grupo" id="grupo--email">
            <label for="email" class="formulario--label">Correo Electrónico</label>
            <div class="formulario--grupo-input">
                <input type="email" class="formulario--input" name="email" id="email" placeholder="direccion@email.com">
                <i class="formulario--validacion-estado fas fa-times-circle"></i>
                <p class="formulario--input-error">
                    El correo solo puede contener números, letras y/o guión bajo.
                </p>
            </div>
        </div>

    <!--Terminos y condiciones-->
        <div class="formulario--grupo formulario--grupo-terminos" id="grupo--terminos">
            <label for="" class="formulario--label">
                <input type="checkbox" name="terminos" id="terminos" class="formulario--checkbox">
                Acepto los términos y condiciones.
            </label>
        </div>

    <!--mensaje error-->
        <div class="formulario--mensaje" id="formulario--mensaje">
          <p>
            <i class="fas fa-exclamation-triangle"></i> <b>Error: </b>Por favor rellena el formulacio correctamente.
          </p>
        </div>

        <!--button-->
        <div class="formulario--grupo formulario--grupo-btn-enviar">
          <button type="submit" class="formulario--btn">Enviar</button>
          <p class="formulario--mensaje-exito" id="formulario--mensaje-exito">
            ¡El formulario se ha enviado exitosamente!
          </p>
        </div>
    </form>
</div>
`;
export { registerView }