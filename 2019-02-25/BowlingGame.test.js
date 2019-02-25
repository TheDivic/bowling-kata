import { BowlingGame } from "./BowlingGame";

describe("BowlingGame.score()", () => {
  let game;
  beforeEach(() => {
    game = new BowlingGame();
  });

  function rollMany(n, pins) {
    for (let rollIndex = 0; rollIndex < n; rollIndex++) {
      game.roll(pins);
    }
  }

  function rollSpare() {
    game.roll(5);
    game.roll(5);
  }

  function rollStrike() {
    game.roll(10);
  }

  function perfectGame() {
    rollMany(12, 10);
  }

  it("should return 0 for a gutter game", () => {
    rollMany(20, 0);
    expect(game.score()).toBe(0);
  });

  it("should return 21 for all 1's", () => {
    rollMany(20, 1);
    expect(game.score()).toBe(20);
  });

  it("should take spares into account", () => {
    rollSpare();
    game.roll(2);
    rollMany(18, 0);
    expect(game.score()).toBe(14);
  });

  it("should take strikes into account", () => {
    rollStrike();
    game.roll(2);
    game.roll(3);
    rollMany(17, 0);
    expect(game.score()).toBe(20);
  });

  it("should return 300 for a perfect game", () => {
    perfectGame();
    expect(game.score()).toBe(300);
  });
});
