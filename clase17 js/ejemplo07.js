const datosUsuarios = [
    {
        nombre: "Alma",
        password: "1234"
    },
    {
        nombre: "María",
        password: "5678"
    },
    {
        nombre: "Pía",
        password: "9101"
    },
    {
        nombre: "Ana",
        password: "1213"
    }
]
console.log(datosUsuarios)

const soloPassword = datosUsuarios.map(function(p){
    return p.nombre
})

console.log(soloPassword)