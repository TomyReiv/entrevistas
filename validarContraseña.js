function validarContraceña(pass){
    let caracteres = [ "-", "*", "?", "!", "@", "#", "$", "/", "()", "{}", "=", ".", ",", ";", ":"];
    let mayusculas = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "Ñ", "R", "S", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let minusculas = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k","l", "m", "n", "ñ", "r", "s", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    let cumpleRequisitos = pass.length >= 8 &&
    caracteres.some(caracter => pass.includes(caracter)) &&
    mayusculas.some(letra => pass.includes(letra)) &&
    minusculas.some(letra => pass.includes(letra));

  return cumpleRequisitos;
}


function validarContrasena2(contrasena) {
  const tieneMinimo8Caracteres = contrasena.length >= 8;
  const tieneLetraMayuscula = /[A-Z]/.test(contrasena);
  const tieneLetraMinuscula = /[a-z]/.test(contrasena);
  const tieneNumero = /[0-9]/.test(contrasena);
  const noTieneCaracteresEspeciales = /^[a-zA-Z0-9]+$/.test(contrasena);

  return (
    tieneMinimo8Caracteres &&
    tieneLetraMayuscula &&
    tieneLetraMinuscula &&
    tieneNumero &&
    noTieneCaracteresEspeciales
  );
}