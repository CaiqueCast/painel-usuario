const knex = require("../connection");
// const path = require('path');

const updateInformation = async (req, res) => {
  try {
    const { nome, idade, rua, bairro, estado, biografia } = req.body;

    const newInformations = await knex("usuarios").update(
      { nome, idade, rua, bairro, estado, biografia },
      "*"
    );

    if (newInformations.length > 0) {
      return res.status(200).json("Dados atualizados com sucesso.");
    }
    return newInformations;
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
      // return res.sendFile(path.join(__dirname, '../html/index.html'));
    }
    return informations;

  } catch (error) {
    console.log(error);
    return res.status(500).json({ Mensagem: "Erro interno do servidor" });
  }
};

module.exports = { updateInformation, getInformation };
