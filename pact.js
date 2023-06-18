const pactlib = require("@pact-foundation/pact");
const Pact = pactlib.PactV3;
const path = require("path");
const process = require("process");
const consumerName = "GettingStartedOrderWeb";
const providerName = "GettingStartedOrderApi";
const pactFile = path.resolve(`./pacts/${consumerName}-${providerName}.json`);

// To Create a 'pact' between the two applications in the integration we are testing
const provider = new Pact({
  log: path.resolve(process.cwd(), "logs", "pact.log"),
  dir: path.resolve(process.cwd(), "pacts"),
  logLevel: "info",
  host: "127.0.0.1",
  consumer: consumerName,
  provider: providerName
});

// used to kill any left over mock server instances in case of errors
process.on("SIGINT", () => {
  pact.removeAllServers();
});

module.exports = {
  provider,
  pactFile,
  consumerName,
  providerName,
  consumerVersion: "1.0.0",
};
