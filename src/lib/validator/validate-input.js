const campos = [];

export const validatePassword2 = (pass1, pass2) => {
      
    if(pass1.value !== pass2.value){
        document.querySelector(`#grupo--password2`).classList.add('formulario--grupo-incorrecto');
        document.querySelector(`#grupo--password2`).classList.remove('formulario--grupo-correcto');
      //icono
        document.querySelector(`#grupo--password2 i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo--password2 i`).classList.remove('fa-check-circle');
  
        document.querySelector(`#grupo--password2 .formulario--input-error`).classList.add('formulario--input-error-activo');
        campos['password'] = false;
    } 
    else {
        document.querySelector(`#grupo--password2`).classList.remove('formulario--grupo-incorrecto');
        document.querySelector(`#grupo--password2`).classList.add('formulario--grupo-correcto');
  
        document.querySelector(`#grupo--password2 i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo--password2 i`).classList.add('fa-check-circle');
  
        document.querySelector(`#grupo--password2 .formulario--input-error`).classList.remove('formulario--input-error-activo');
        campos['password'] = true;
    }
}

export const validateRecordField = (expresion, input, campo) => {
    if(expresion.test(input.value)){
      document.querySelector(`#grupo--${campo}`).classList.remove('formulario--grupo-incorrecto');
      document.querySelector(`#grupo--${campo}`).classList.add('formulario--grupo-correcto');
      document.querySelector(`#grupo--${campo} i`).classList.remove('fa-times-circle');
      document.querySelector(`#grupo--${campo} i`).classList.add('fa-check-circle');
      document.querySelector(`#grupo--${campo} .formulario--input-error`).classList.remove('formulario--input-error-activo');
      campos[campo] = true;
    }
    else{
      document.querySelector(`#grupo--${campo}`).classList.add('formulario--grupo-incorrecto');
      document.querySelector(`#grupo--${campo}`).classList.remove('formulario--grupo-correcto');
      document.querySelector(`#grupo--${campo} i`).classList.add('fa-times-circle');
      document.querySelector(`#grupo--${campo} i`).classList.remove('fa-check-circle');
      document.querySelector(`#grupo--${campo} .formulario--input-error`).classList.add('formulario--input-error-activo');
      campos[campo] = false;
    }
}