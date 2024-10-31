const AssetToken = artifacts.require("AssetToken");

contract("AssetToken", (accounts) => {
  let tokenInstance;
  const TOTAL_TOKENIZED_ACTIONS = 1000000;
  before(async () => {
    tokenInstance = await AssetToken.deployed();
  });

  it("debería inicializar el contrato con la metadata correcta", async () => {
    const name = await tokenInstance.companyName();
    const symbol = await tokenInstance.stockSymbol();
    const assetValue = await tokenInstance.assetValue();
    const totalShares = await tokenInstance.totalShares();

    assert.equal(name, "Apple Inc.", "El nombre de la empresa no coincide");
    assert.equal(symbol, "AAPL", "El símbolo bursátil no coincide");
    assert.equal(
      assetValue.toString(),
      "150",
      "El valor del activo inicial no coincide"
    );
    assert.equal(
      totalShares.toString(),
      TOTAL_TOKENIZED_ACTIONS.toString(),
      "El total de acciones no coincide"
    );
  });

  it("debería calcular el valor de mercado total correctamente", async () => {
    const marketValue = await tokenInstance.getMarketValue();
    const expectedMarketValue = 150 * TOTAL_TOKENIZED_ACTIONS; // Multiplicamos el valor por la cantidad de acciones tokenizadas
    assert.equal(
      marketValue.toString(),
      expectedMarketValue.toString(),
      "El valor de mercado no coincide"
    );
  });

  it("debería permitir al propietario actualizar el valor del activo", async () => {
    await tokenInstance.updateAssetValue(200, { from: accounts[0] });
    const updatedValue = await tokenInstance.assetValue();

    assert.equal(
      updatedValue.toString(),
      "200",
      "El valor del activo no se actualizó correctamente"
    );
  });

  it("debería calcular el nuevo valor de mercado después de actualizar el valor del activo", async () => {
    const marketValue = await tokenInstance.getMarketValue();
    const expectedMarketValue = 200 * TOTAL_TOKENIZED_ACTIONS; // 200 * 1000000

    assert.equal(
      marketValue.toString(),
      expectedMarketValue,
      "El nuevo valor de mercado no coincide"
    );
  });
});
