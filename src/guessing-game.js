class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.result = (this.min + this.max)/2;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
    return result;
    }

    lower() {
    this.min = (this.min + this.max)/2;
    }

    greater() {
    this.max = (this.min + this.max)/2;
    }
}

//test
// const number = 7
// let rezult

// const a = new GuessingGame();
// a.setRange(5, 0)

// a.greater()
// a.lower()
// a.greater()
// a.lower()
// a.lower()
// a.greater()

// rezult = a.guess()

// console.log(number === rezult)

module.exports = GuessingGame;
