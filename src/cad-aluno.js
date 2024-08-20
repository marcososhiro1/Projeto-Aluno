//Declarando a variavel do cadastro
const cadForm = document.getElementById("cadastro")

// Ao clicar no botao cadastrar
cadForm.addEventListener("submit", (e)=>{
    //Não recarregar a página
    e.preventDefault();
    // Receber os dados do formulario
    const nomeAluno = document.getElementById("nomeUser").value;
    const emailUsuario = document.getElementById("userEmail").value;
    const dataNasci = document.getElementById("dataNascimento").value
    const generoM = document.getElementById("cad-gen-M").value
    const generoF = document.getElementById("cad-gen-F").value
    // console.log(nomeAluno);
    // console.log(emailUsuario);
    // console.log(dataNasci);
    // console.log(generoF);
    // console.log(generoM);
   

    // O array() é usado para criar array de objetos
   let alunos = new Array();

   //verificar se existe uma chave de acesso p/ armezenar os objetos no localstorage

   if(localStorage.hasOwnProperty("alunos")){
    //se tiver vai recuperar os dados do local storage
   alunos = JSON.parse(localStorage.getItem("alunos"));//dizendo local storage pegue os dados da chave alunos e converta de string para um objeto

   }

   //adicionar um novo objeto no array criado(alunos)
   alunos.push({nomeAluno:nomeAluno,emailUsuario:emailUsuario});

    // salvar os dados no local storage

    localStorage.setItem("alunos",JSON.stringify(alunos));//Vai salvar os dados da chave alunos e converter para uma string.

    //mostrar no HTML os dados de nome do aluno e email
    document.getElementById("listaDeUsuarios").insertAdjacentHTML('beforeend', "Nome Completo: " + nomeAluno + " Email: " + emailUsuario + "<hr>");
})

