//esconder e aparecer botao sair

const btn = document.getElementById('show-or-hide')
let btnesconder = document.getElementById('botao_logout')

btn.addEventListener('click', function(){
    if(btnesconder.style.display == 'block'){
        btnesconder.style.display = 'none';
    }
    else{
        btnesconder.style.display = 'block';
    }
})
