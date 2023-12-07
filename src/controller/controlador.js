const apresentacao = (req, res) => {
  const dataAtual = new Date();
  res.status(200).json({
    mensagem: "Olá, este é o meu primeiro servidor em express",
    data: `A data de hoje é: ${dataAtual.toISOString()}`,
  });
};

module.exports = {
  apresentacao,
};
