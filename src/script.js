
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