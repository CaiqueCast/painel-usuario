const btn = document.getElementById('atualizar');

btn.addEventListener('click', async () => {
    const dados = obterDados();
    await enviarDados(dados);

    setTimeout(() => {
        window.location.reload();
    }, 2500);
});

function obterDados() {
    const inputNome = document.getElementById('nome');
    const inputIdade = document.getElementById('idade');
    const inputRua = document.getElementById('rua');
    const inputBairro = document.getElementById('bairro');
    const inputCidade = document.getElementById('cidade')
    const inputEstado = document.getElementById('estado');
    const inputBiografia = document.getElementById('biografia');
    const inputImagem = document.getElementById('imagem').files[0]; 

    const formData = new FormData();
    formData.append('nome', inputNome.value);
    formData.append('idade', inputIdade.value);
    formData.append('rua', inputRua.value);
    formData.append('bairro', inputBairro.value);
    formData.append('cidade', inputCidade.value);
    formData.append('estado', inputEstado.value);
    formData.append('biografia', inputBiografia.value);
    formData.append('imagem', inputImagem); 

    return formData;
}

async function enviarDados(formData) {
    try {
        const resposta = await fetch('http://localhost:3000/usuario', {
            method: 'PUT',
            body: formData
        });

        if (resposta.status !== 200) {
            throw new Error('Erro ao enviar dados');
        }
    } catch (erro) {
        console.error(erro);
    }
}
