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
    return this.result;
    }

    lower() {
    this.min = this.min + (this.max - this.min) / 2;
    }

    greater() {
    this.max = this.min + (this.max - this.min) / 2;
    }
}

module.exports = GuessingGame;
