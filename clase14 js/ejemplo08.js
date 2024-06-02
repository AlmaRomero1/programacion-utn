function validarForm(){
    const nombreValido = true;
    const passWordValido = validarLargo (document.forms.text1.value, 5);

    console.log(nombreValido, passWordValido);

    const resultado = nombreValido && passWordValido;
    if(resultado){
        alert ('ES VÁLIDO')
    }else{
        alert ('NOOO ES VÁLIDO')
    }
}


function validarLargo(texto, LargoRequerido){
    return texto.length >= LargoRequerido
}