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

        // There is no double spending
        let inputSum = 0;
        let outputSum = 0;
        for (const in_utxo of this.inputUTXOs){
            inputSum += in_utxo.amount;
        }
        for (const out_utxo of this.outputUTXOs){
            outputSum += out_utxo.amount;
        }
        if (inputSum < outputSum) {
            throw new Error("Insufficient amounts.")
        }

        // Sufficient amount present for transaction
        for (const in_utxo of this.inputUTXOs){
            in_utxo.spent = true;
        }
    }
}

module.exports = Transaction;
