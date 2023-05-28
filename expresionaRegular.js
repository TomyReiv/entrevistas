function validarCorreo(e){
    let regularExp = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let expresion = e;
    return regularExp.test(expresion);
}