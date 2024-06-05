const boton2 = document.getElementById('boton');

boton2.addEventListener('click',function(f){
    alert(f.currentTarget.innerText);
})