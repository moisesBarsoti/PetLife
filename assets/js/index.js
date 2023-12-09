var duvida = document.querySelectorAll('.duvida');

duvida.forEach(function(duvida1){
    duvida1.addEventListener('click', function(){
        duvida1.classList.toggle('ativa');
    })
})