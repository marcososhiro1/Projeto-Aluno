

//CRUD -Gestao

// enviar o array para o local storage
//pegar os dados do local e transportar para o html
// estilizar os dados 

let pessoa = [
    {ID:"0000", nome: "Amanda"},
    {ID:"0001", nome: "Marcos"},
    {ID:"0002", nome: "Daniela"},
    {ID:"0003", nome: "Jurandi"},
    {ID:"0004", nome: "Maria"}
]





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