const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const GreeterModule = buildModule("GreeterModule", (deployer) => {
  const greet = deployer.contract("Greeter", ["Hola Mundo"]);
  return { greet };
});

module.exports = GreeterModule;