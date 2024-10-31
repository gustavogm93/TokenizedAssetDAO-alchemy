const AssetToken = artifacts.require("AssetToken");

module.exports = function (deployer) {
  deployer.deploy(
    AssetToken,
    "AppleToken", // Nombre del token
    "AAPL", // Símbolo
    1000000, // Suministro inicial en tokens
    "Apple Inc.", // Nombre de la empresa
    "AAPL", // Símbolo bursátil
    150, // Valor del activo (en unidades que decidas usar)
    process.env.TOTAL_TOKENIZED_ACTIONS
  );
};
