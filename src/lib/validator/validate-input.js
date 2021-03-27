export const validateRecordField = (expresion, input, campo) => {
  let grupo = document.querySelector(`#grupo--${campo}`);
  let grupoI = document.querySelector(`#grupo--${campo} i`);
  let grupoFormError = document.querySelector(`#grupo--${campo} .formulario--input-error`);

  if(expresion.test(input.value)){

    grupo.classList.remove('formulario--grupo-incorrecto');
    grupo.classList.add('formulario--grupo-correcto');

    grupoI.classList.remove('fa-times-circle');
    grupoI.classList.add('fa-check-circle');

    grupoFormError.classList.remove('formulario--input-error-activo');
    return true;
  }
  else{
    grupo.classList.add('formulario--grupo-incorrecto');
    grupo.classList.remove('formulario--grupo-correcto');
    grupoI.classList.add('fa-times-circle');
    grupoI.classList.remove('fa-check-circle');
    grupoFormError.classList.add('formulario--input-error-activo');
    return false;
  }

}

export const validatePassword2 = () => {
  const inputPassword1 = document.getElementById('password');
	const inputPassword2 = document.getElementById('password2');

  const groupPss2 = document.querySelector(`#grupo--password2`);
  const groupPssI = document.querySelector(`#grupo--password2 i`);
  const formInputErr = document.querySelector(`#grupo--password2 .formulario--input-error`);

    if(inputPassword1.value !== inputPassword2.value){
        groupPss2.classList.add('formulario--grupo-incorrecto');
        groupPss2.classList.remove('formulario--grupo-correcto');
      //icono
        groupPssI.classList.add('fa-times-circle');
        groupPssI.classList.remove('fa-check-circle');
  
        formInputErr.classList.add('formulario--input-error-activo');
        return false;
    } 
    else {
        groupPss2.classList.remove('formulario--grupo-incorrecto');
        groupPss2.classList.add('formulario--grupo-correcto');
  
        groupPssI.classList.remove('fa-times-circle');
        groupPssI.classList.add('fa-check-circle');
  
        formInputErr.classList.remove('formulario--input-error-activo');
        return true;
    }
}

export const showMessage =(registerElement) => {
  registerElement.querySelector('#formulario--mensaje-exito')
      .classList.add('formulario--mensaje-exito-activo');

  setTimeout(() => {
      registerElement.querySelector('#formulario--mensaje-exito')
          .classList.remove('formulario--mensaje-exito-activo');
  }, 5000);

  registerElement.querySelectorAll('.formulario--grupo-correcto').forEach((icono) => {
      icono.classList.remove('formulario--grupo-correcto');
  });
}

//funcion para q los inputs no al enviar esten vacios
export const validatorLogin = (userValue, passwordValue) => {
  if (userValue.trim() === '' || passwordValue.trim() === '') {
      return true;
  }
  else {
      return false;
  }
}

export const previewImgProfile = (imgFile) => {
  let reader = new FileReader();
  reader.readAsDataURL(imgFile);

  reader.onload = function () {
    let preview = document.querySelector('.previewImg');

    let imgElement = document.createElement('img');
    imgElement.src = reader.result;
    imgElement.style.width = "20rem";

    preview.innerHTML = '';
    preview.appendChild(imgElement);
  }
}