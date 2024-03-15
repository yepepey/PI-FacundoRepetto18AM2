export default function validator (dataErrors)  {

    let errors = {};
    let re = [0,1,2,3,4,5,6,7,8,9]

    if (!dataErrors.email.includes('@')) {
        errors.e1 = 'Ingresa un email valido'
    }
    if (!dataErrors.email) {
        errors.e2 = 'Ingrea un email'
    }
    if (dataErrors.email.length > 35) {
        errors.e3 = 'Debe tener menos de 35 caracteres'
    }
    if (dataErrors.password.includes(re)) {
        errors.p1 = 'El password debe de tener al menos 1 numero'
    }
    if (dataErrors.password.length < 6 || dataErrors.password.length > 10) {
        errors.p2 = 'Debe de tener mas de 6 y menos de 10 caracteres'
    }

    return errors;
}