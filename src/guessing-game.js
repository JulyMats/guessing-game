class GuessingGame {
    constructor() {
        this.min = 1;
        this.max = 1;
        this.guessNum = 1;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.guessNum = Math.ceil((this.min + this.max) / 2);
        return this.guessNum;
    }

    lower() {
        this.max = this.guessNum;
    }

    greater() {
        this.min = this.guessNum;
    }
}

module.exports = GuessingGame;
