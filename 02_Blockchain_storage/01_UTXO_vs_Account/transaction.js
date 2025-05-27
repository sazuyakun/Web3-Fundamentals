// inputUTXOs and outputUTXOs: Both of these objects are arrays containing instances of transaction outputs.

class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs = inputUTXOs;
        this.outputUTXOs = outputUTXOs;
    }
    execute() {
        for (const utxo of this.inputUTXOs) {
            if (utxo.spent) {
                throw new Error("Double-spending detected: Input UTXO has already been spent.");
            }
        }
    }
}

module.exports = Transaction;
