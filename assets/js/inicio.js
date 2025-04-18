const nomePessoa = document.querySelector('#nome');
const senhaPessoa = document.querySelector('#senha');
const botao = document.querySelector('#botao');

const pessoa = {
    nome: 'John',
    senha: 1234
}

function entrarNaConta(e){
    e.preventDefault();

   if(nomePessoa.value === pessoa.nome && senhaPessoa.value == pessoa.senha){
    localStorage.setItem('logado', 'true');
    window.location.href = "perfil.html";
   }else{
    alert('Usuário e senha incorretos!');
   }
}

botao.addEventListener('click', entrarNaConta);