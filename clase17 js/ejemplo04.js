const frutas = ['paltas', 'sandía', 'bananas', 'manzana'];

console.log(frutas)
console.log(frutas.sort())

const frutasordenadas = frutas.sort();
console.log(frutasordenadas)

const frutasordenadasreves = frutas.sort().reverse();
console.log(frutasordenadasreves)


// const numeros = [1,10,8,45,23,12];
// console.log(numeros)
// console.log(numeros.sort())

// const numerosordenados = numeros.sort();
// console.log(numerosordenados)

// const numerosordenadosreves = numeros.sort().reverse();
// console.log(numeros.sort())

const numeros = [1,10,8,45,53,12];
const numerosordenados = numeros.sort(function(a,b){
    return a-b
})
console.log(numerosordenados);

const numerosordenadosreves = numeros.sort(function(a,b){
    return a-b
})
console.log(numerosordenadosreves);
