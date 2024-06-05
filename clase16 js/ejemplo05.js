const alternar = document.getElementsByClassName('alternar');

alternar.addEventListener('click',function(e){
    e.currentTarget.classList.toggle('activo');
})