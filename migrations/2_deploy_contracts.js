var SimpleStorage = artifacts.require("SimpleStorage");
var Token = artifacts.require("Token");
var ERC20 = artifacts.require("ERC20");
var IERC20 = artifacts.require("IERC20.sol");
var SafeMath = artifacts.require("SafeMath");

module.exports = function (deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Token, "Bonfi_Test", "BNFv1", "18", "1000000000000000000000000", "0x1A683e7b05544E20e0F909ad3c61f27156AE8ABC");
  deployer.deploy(ERC20);
  deployer.deploy(IERC20);
  deployer.deploy(SafeMath);
};
