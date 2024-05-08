const divInformacoes = document.getElementById('info')
const divImagem = document.getElementById('profile-image')

async function consultarDados (){
    try {
        const retorno = await fetch('http://localhost:3000/usuario')
        const dados = await retorno.json();
        mostarDados(dados)
    } catch (erro) {
        console.error("Erro ao buscar os dados: ", erro);
    }
}
async function consultarImagem (){
    try {
        const retorno = await fetch('http://localhost:3000/usuario')
        const imagem = await retorno.json();
        mostarImagem(imagem)
    } catch (erro) {
        console.error("Erro ao buscar os imagem: ", erro);
    }
}



function mostarImagem (imagem) {
    for(let foto of imagem) {

        const imagemHTML = `
        <img src="${foto.imagem}" alt="Imagem de Perfil">
        `
        divImagem.innerHTML = divImagem.innerHTML + imagemHTML
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