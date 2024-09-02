class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.result = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
    this.result = Math.floor((this.min + this.max) / 2);
    return this.result;
    }

    lower() {
    this.max = Math.floor((this.min + this.max) / 2);
    }

    greater() {
    this.min = Math.floor((this.min + this.max) / 2);
    }
}

module.exports = GuessingGame;
