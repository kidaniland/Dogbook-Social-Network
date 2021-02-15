//Input del LOGIN
const validatorLogin = (emailValue, passwordValue) => {
    if (emailValue.trim() === '' || passwordValue.trim() === '') {
        return true;
    }
    else {
        return false;
    }
};

export {
    validatorLogin,
    //validatorRegister
};