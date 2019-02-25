export class BowlingGame {
  constructor() {
    this.rolls = Array(21).fill(0);
    this.currentRoll = 0;
  }
  roll(pins) {
    this.rolls[this.currentRoll++] = pins;
  }

  hitsInFrame(frameIndex) {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1];
  }

  isSpare(frameIndex) {
    return this.hitsInFrame(frameIndex) == 10;
  }

  spareBonus(frameIndex) {
    return this.rolls[frameIndex + 2];
  }

  isStrike(frameIndex) {
    return this.rolls[frameIndex] == 10;
  }

  strikeBonus(frameIndex) {
    return this.hitsInFrame(frameIndex + 1);
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
        score += this.hitsInFrame(frameIndex);
        frameIndex += 2;
      }
    }
    return score;
  }
}
