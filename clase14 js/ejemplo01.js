const nombre = prompt('ingrese su nombre','');
const nota = parseInt(prompt('Ingrese su nota',''));

if(Number.isNaN(nota)){
    document.write(`La nota ingresada no es válida`)
} else if(nota >=4){
    document.write(`${nombre} estás aprobada con un ${nota}`);
    console.log(`${nombre} estás aprobada con un ${nota}`)
}else{
    document.write(`${nombre} estás desaprobada con un ${nota}`);
}