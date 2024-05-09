const knex = require("../connection");
const { uploadFile, excluirArquivo } = require("../services/storage");

const atualizarInformacoes = async (req, res) => {
  const { nome, idade, rua, bairro, cidade, estado, biografia } = req.body;
  try {

    const dados = async (dado, nome) => {
      const informacoes = await knex("usuarios").select(nome);
      if(dado != ""){
        return dado
        
      };
         dado = await informacoes[0][nome]
      return dado
    }

    const novasInformacoes = await knex("usuarios").update(
      { nome: await dados(nome, 'nome'), 
        idade: await dados(idade, 'idade'), 
        rua: await dados(rua, 'rua'), 
        bairro: await dados(bairro, 'bairro'), 
        cidade: await dados(cidade, 'cidade'), 
        estado: await dados(estado, 'estado'), 
        biografia: await dados(biografia, 'biografia')
      },
      "*"
    );

    let imagemUrl = null;
    if (req.file) {
      const { mimetype, originalname, buffer } = req.file;

      const imagemSalva = await knex("usuarios").select('imagem').first();
      const caminho = imagemSalva.imagem.replace(
        'https://s3.us-east-005.backblazeb2.com/painelUsuario/',
        ""
      );
  
       await excluirArquivo(caminho)

      imagemUrl = await uploadFile(
        `imagem/${originalname}`,
        buffer,
        mimetype
    )

    await knex("usuarios").update(
      { imagem: imagemUrl.url },
      "*"
    );

    }


    if (novasInformacoes.length > 0) {
      return res.status(200).json("Dados atualizados com sucesso.");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Mensagem: "Erro interno do servidor" });
  }
};

const obterInformacoes = async (req, res) => {
  try {
    const informacoes = await knex("usuarios");
    if (informacoes.length > 0) {
      return res.status(200).json(informacoes);
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({ Mensagem: "Erro interno do servidor" });
  }
};

module.exports = { atualizarInformacoes, obterInformacoes };
