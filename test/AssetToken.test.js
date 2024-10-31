const AssetToken = artifacts.require("AssetToken");

contract("AssetToken", (accounts) => {
  let tokenInstance;

  before(async () => {
    tokenInstance = await AssetToken.deployed();
  });

  it("debería asignar el suministro inicial al creador del contrato", async () => {
    const balance = await tokenInstance.balanceOf(accounts[0]);
    assert.equal(
      balance.toString(),
      web3.utils.toWei("1000000", "ether"),
      "El balance inicial no coincide"
    );
  });

  it("debería permitir la emisión de nuevos tokens por el propietario", async () => {
    await tokenInstance.mintTokens(
      accounts[1],
      web3.utils.toWei("500", "ether"),
      { from: accounts[0] }
    );
    const balance = await tokenInstance.balanceOf(accounts[1]);
    assert.equal(
      balance.toString(),
      web3.utils.toWei("500", "ether"),
      "La emisión de tokens no fue correcta"
    );
  });

  it("debería permitir la quema de tokens por el propietario", async () => {
    await tokenInstance.burnTokens(
      accounts[1],
      web3.utils.toWei("100", "ether"),
      { from: accounts[0] }
    );
    const balance = await tokenInstance.balanceOf(accounts[1]);
    assert.equal(
      balance.toString(),
      web3.utils.toWei("400", "ether"),
      "La quema de tokens no fue correcta"
    );
  });
});
