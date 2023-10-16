const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexNumber = /|d/;

const validations = (userData, errors, setErrors)=>{

    const newErrors = errors;

    if(!userData.email) newErrors.email = "El email es requerido"
    else if (!regexEmail.test(userData.email)) newErrors.email = "El email es incorrecto"
    else newErrors.email = '';

    if(!userData.password) newErrors.password = "El password es requerido"
    else if (!regexNumber.test(userData.password)) newErrors.password = "Debe ingresar un numero"
    else newErrors.password = '';

    setErrors(newErrors)
}

export default validations;