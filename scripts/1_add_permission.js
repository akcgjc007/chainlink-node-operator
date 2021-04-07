const Oracle = artifacts.require("Oracle");
require("dotenv").config();

module.exports = async function (callback) {
  const oracle = await Oracle.deployed();
  await oracle.setFulfillmentPermission(process.env.NODE_ADDRESS, true);
  callback("Finished.");
};
