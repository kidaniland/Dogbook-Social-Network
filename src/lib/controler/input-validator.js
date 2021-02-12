//Input del LOGIN
const validatorLogin = (emailValue, passwordValue) => {
    if (emailValue.trim() === '' || passwordValue.trim() === '') {
        return true;
    }
    else {
        return false;
    }
};

//Input del REGISTRO
/*const validatorRegister = (
    userValue,
    nameValue,
    breedDValue,
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
};*/

export {
    validatorLogin,
    //validatorRegister
};