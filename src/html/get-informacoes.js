const divInformacoes = document.getElementById('info')

async function consultarDados (){
    try {
        const retorno = await fetch('http://localhost:3000/usuario')
        const dados = await retorno.json();
        mostarDados(dados)
    } catch (erro) {
        console.error("Erro ao buscar os dados: ", erro);
    }
}

function mostarDados (dados) {
    for(let dado of dados) {
        const dadosHTML = `
        <div>
        <h1>Nome: ${dado.nome}</h1>
            <h4> <strong>Idade:</strong> ${dado.idade} anos</h4>
            <h4> <strong>Rua:</strong> ${dado.rua}</h4>
            <h4> <strong>Bairro:</strong> ${dado.bairro}</h4>
            <h4> <strong>Estado:</strong> ${dado.estado}</h4>
            <h4> <strong>Biografia:</strong> ${dado.biografia}</h4>
            </div>
        `
        divInformacoes.innerHTML = divInformacoes.innerHTML + dadosHTML
    }
}

consultarDados()