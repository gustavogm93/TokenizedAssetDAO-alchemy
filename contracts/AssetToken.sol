// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AssetToken is ERC20, Ownable {
    string public assetName;
    uint256 public assetValue;
    string public companyName;
    string public stockSymbol;
    uint256 public totalShares;

constructor(
    string memory name,
    string memory symbol,
    uint256 initialSupply,
    string memory _companyName,
    string memory _stockSymbol,
    uint256 _assetValue,
    uint256 _totalShares
) ERC20(name, symbol) Ownable(msg.sender) {
    assetName = name;
    assetValue = _assetValue;
    companyName = _companyName;
    stockSymbol = _stockSymbol;
    totalShares = _totalShares;
    _mint(msg.sender, initialSupply * (10 ** decimals()));
}


    function updateAssetValue(uint256 newValue) public onlyOwner {
        assetValue = newValue;
    }

    function mintTokens(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burnTokens(address from, uint256 amount) public onlyOwner {
        _burn(from, amount);
    }

    function getMarketValue() public view returns (uint256) {
        return totalSupply() * assetValue / (10 ** decimals());
    }
}
