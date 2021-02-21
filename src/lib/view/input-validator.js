export const validateForm = (e) => {
    switch (e.target.name) {
        case "usuario":
            validateRecordField(regularExpression.usuario, e.target, 'usuario');
        break;
        case "raza":
            validateRecordField(regularExpression.nombre, e.target, 'raza');
        break;
        case "nombre":
            validateRecordField(regularExpression.nombre, e.target, 'nombre');
        break;
        case "password":
            validateRecordField(regularExpression.password, e.target, 'password');
            validatePassword2();
        break;
        case "password2":
            validatePassword2();
        break;
        case "email":
            validateRecordField(regularExpression.correo, e.target, 'email');
        break;
    }
}

const validateRecordField = (expresion, input, campo) => {
    if(expresion.test(input.value)){
      registerElement.querySelector(`#grupo--${campo}`).classList.remove('formulario--grupo-incorrecto');
      registerElement.querySelector(`#grupo--${campo}`).classList.add('formulario--grupo-correcto');
      registerElement.querySelector(`#grupo--${campo} i`).classList.remove('fa-times-circle');
      registerElement.querySelector(`#grupo--${campo} i`).classList.add('fa-check-circle');
      registerElement.querySelector(`#grupo--${campo} .formulario--input-error`).classList.remove('formulario--input-error-activo');
      campos[campo] = true;
    }
    else{
      registerElement.querySelector(`#grupo--${campo}`).classList.add('formulario--grupo-incorrecto');
      registerElement.querySelector(`#grupo--${campo}`).classList.remove('formulario--grupo-correcto');
      registerElement.querySelector(`#grupo--${campo} i`).classList.add('fa-times-circle');
      registerElement.querySelector(`#grupo--${campo} i`).classList.remove('fa-check-circle');
      registerElement.querySelector(`#grupo--${campo} .formulario--input-error`).classList.add('formulario--input-error-activo');
      campos[campo] = false;
    }
}

const validatePassword2 = () => {
    const inputPassword1 = registerElement.querySelector('#password');
    const inputPassword2 = registerElement.querySelector('#password2');
  
    if(inputPassword1.value !== inputPassword2.value){
        registerElement.querySelector(`#grupo--password2`).classList.add('formulario--grupo-incorrecto');
        registerElement.querySelector(`#grupo--password2`).classList.remove('formulario--grupo-correcto');
      //icono
        registerElement.querySelector(`#grupo--password2 i`).classList.add('fa-times-circle');
        registerElement.querySelector(`#grupo--password2 i`).classList.remove('fa-check-circle');
  
        registerElement.querySelector(`#grupo--password2 .formulario--input-error`).classList.add('formulario--input-error-activo');
        campos['password'] = false;
    } 
    else {
        registerElement.querySelector(`#grupo--password2`).classList.remove('formulario--grupo-incorrecto');
        registerElement.querySelector(`#grupo--password2`).classList.add('formulario--grupo-correcto');
  
        registerElement.querySelector(`#grupo--password2 i`).classList.remove('fa-times-circle');
        registerElement.querySelector(`#grupo--password2 i`).classList.add('fa-check-circle');
  
        registerElement.querySelector(`#grupo--password2 .formulario--input-error`).classList.remove('formulario--input-error-activo');
        campos['password'] = true;
    }
}