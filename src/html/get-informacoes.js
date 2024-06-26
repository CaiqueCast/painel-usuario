const divInformacoes = document.getElementById('info')
const divImagem = document.getElementById('profile-image')

async function consultarDados (){
    try {
        const retorno = await fetch('https://painel-usuario.onrender.com/usuario')
        const dados = await retorno.json();
        mostarDados(dados)
    } catch (erro) {
        console.error("Erro ao buscar os dados ");
    }
}

function mostarDados (dados) {
    for(let dado of dados) {

        const imagemHTML = `
        <img src="${dado.imagem}" alt="Imagem de Perfil">
        `
        divImagem.innerHTML = divImagem.innerHTML + imagemHTML

        const dadosHTML = `
        <div>
        <h1>Nome: ${dado.nome}</h1>
            <h4> <strong>Idade:</strong> ${dado.idade} anos</h4>
            <h4> <strong>Rua:</strong> ${dado.rua}</h4>
            <h4> <strong>Bairro:</strong> ${dado.bairro}</h4>
            <h4> <strong>Cidade:</strong> ${dado.cidade}</h4>
            <h4> <strong>Estado:</strong> ${dado.estado}</h4>
            <h4> <strong>Biografia:</strong> ${dado.biografia}</h4>
            </div>
        `;

        

        divInformacoes.innerHTML = divInformacoes.innerHTML + dadosHTML
        
    }
}

consultarDados()