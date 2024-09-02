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
    // this.result = Math.round((this.min + this.max) / 2);
    this.result = Math.round(this.min + (this.max - this.min) / 2);
    return this.result;
    }

    lower() {
    this.max = this.result;
    }

    greater() {
    this.min = this.result;
    }
}

module.exports = GuessingGame;
