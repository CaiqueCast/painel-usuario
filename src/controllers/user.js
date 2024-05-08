const knex = require("../connection");
const { uploadFile, excluirArquivo } = require("../services/storage");

const updateInformation = async (req, res) => {
  const { nome, idade, rua, bairro, cidade, estado, biografia } = req.body;
  try {

    const newInformations = await knex("usuarios").update(
      { nome, idade, rua, bairro, cidade, estado, biografia},
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


    if (newInformations.length > 0) {
      return res.status(200).json("Dados atualizados com sucesso.");
    }
  } catch (error) {
    console.log(error);
    return res.status(500).json({ Mensagem: "Erro interno do servidor" });
  }
};

const getInformation = async (req, res) => {
  try {
    const informations = await knex("usuarios");
    if (informations.length > 0) {
      return res.status(200).json(informations);
    }

  } catch (error) {
    console.log(error);
    return res.status(500).json({ Mensagem: "Erro interno do servidor" });
  }
};

module.exports = { updateInformation, getInformation };
