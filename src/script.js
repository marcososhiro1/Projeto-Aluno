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

//dropdown do botão de configuração

const btndropdownConfig = document.getElementById('btndropdownConfig')
let uldropConfig = document.getElementById('uldropConfig')

btndropdownConfig.addEventListener('click', function(){
    if(uldropConfig.style.display == 'block'){
        uldropConfig.style.display = 'none';
    }
    else{
        uldropConfig.style.display = 'block';
    }
})