export class BowlingGame {
  constructor() {
    this.rolls = Array(21).fill(0);
    this.currentRoll = 0;
  }

  roll(droppedPins) {
    this.rolls[this.currentRoll++] = droppedPins;
  }

  isSpare(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1] == 10;
  }

  isStrike(rollIndex) {
    return this.rolls[rollIndex] == 10;
  }

  sumOfPinsInFrame(rollIndex) {
    return this.rolls[rollIndex] + this.rolls[rollIndex + 1];
  }

  strikeBonus(rollIndex) {
    return this.sumOfPinsInFrame(rollIndex + 1);
  }

  spareBonus(rollIndex) {
    return this.rolls[rollIndex + 2];
  }

  score() {
    let score = 0;
    let frameIndex = 0;
    for (let frame = 0; frame < 10; frame++) {
      if (this.isStrike(frameIndex)) {
        score += 10 + this.strikeBonus(frameIndex);
        frameIndex++;
      } else if (this.isSpare(frameIndex)) {
        score += 10 + this.spareBonus(frameIndex);
        frameIndex += 2;
      } else {
        score += this.sumOfPinsInFrame(frameIndex);
        frameIndex += 2;
      }
    }
    return score;
  }
}
