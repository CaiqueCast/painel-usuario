const btn = document.getElementById('atualizar')

btn.addEventListener('click',  () => {
    const dados = obterDados();
    enviarDados(dados)
})

function obterDados () {
    const inputNome = document.getElementById('nome')
    const inputIdade = document.getElementById('idade')
    const inputRua= document.getElementById('rua')
    const inputBairro = document.getElementById('bairro')
    const inputEstado = document.getElementById('estado')
    const inputBiografia = document.getElementById('biografia')

    const dados = {
        nome: inputNome.value,
        idade: inputIdade.value,
        rua: inputRua.value,
        bairro: inputBairro.value,
        estado: inputEstado.value,
        biografia: inputBiografia.value
    }
    return dados
}

async function enviarDados (dados) {
    const resposta = await fetch('http://localhost:3000/usuario', {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    })
    if(resposta.status != 200){
        console.log(erro)
    }
}