// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AssetToken is ERC20, Ownable {
    constructor(
        string memory name,
        string memory symbol,
        uint256 initialSupply
    ) ERC20(name, symbol) Ownable(msg.sender) { // Especifica msg.sender como el dueño inicial
        _mint(msg.sender, initialSupply * (10 ** decimals()));
    }

    function mintTokens(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burnTokens(address from, uint256 amount) public onlyOwner {
        _burn(from, amount);
    }
}
