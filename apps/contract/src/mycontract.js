const HotPocket = require("hotpocket-nodejs-contract");

const mycontract = async (ctx) => {
    // Your smart contract logic.
    console.log("Ledger number", ctx.lclSeqNo);
    console.log("Connected users", ctx.users.count());
}

const hpc = new HotPocket.Contract();
hpc.init(mycontract);