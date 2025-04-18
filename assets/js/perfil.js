
const sairDaPag = document.querySelector('#sair')

if(localStorage.getItem('logado') !== 'true') {
    // Se não estiver logado, redireciona para a página de login
    window.location.href = "index.html";
}

function sair() {
    localStorage.removeItem('logado');
    window.location.href = "inicio.html";
}

sairDaPag.addEventListener('click', sair)