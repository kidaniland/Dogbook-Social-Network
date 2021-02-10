//Inputs del LOGIN
const validatorLogin = (emailValue, passwordValue) => {
    if (emailValue.trim() === '' || passwordValue.trim() === '') {
        return true;
    }
    else {
        return false;
    }
};

//Inputs del REGISTRO
const validatorRegisterDog = (
    nameD,
    breedD,
    sexD,
    birthD,
    colorD
) => {
    if (
        nameD === '' ||
        breedD === '' ||
        sexD === '' ||
        birthD === '' ||
        colorD === ''
    ) {
        return true;
    }
    else {
        return true;
    }
};

const validatorRegisterHuman = (
    emailRegister,
    passwordRegister,
    nameF,
    nameL,
    sex,
    birth,
    country,
    emailRegisterValid,
    passwordRegisterValid) => {
        if (
            emailRegisterValue === '' ||
            passwordRegisterValue === '' ||
            user === '' ||
            nameF === '' ||
            nameL === '' ||
            sex === '' ||
            birth === '' ||
            country === ''
        ) {
            return true;
        }
        if (emailRegisterValid && passwordRegisterValid) {
            return false;
        }
        else {
            return true;
        }
};

export {
    validatorLogin,
    validatorRegisterDog,
    validatorRegisterHuman
};