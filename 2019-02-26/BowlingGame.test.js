import { BowlingGame } from "./BowlingGame";

describe("BowlingGame.score()", () => {
  let game;
  beforeEach(() => {
    game = new BowlingGame();
  });

  function rollMany(n, pins) {
    for (let i = 0; i < n; i++) {
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

  it("should return 20 for all 1's", () => {
    rollMany(20, 1);
    expect(game.score()).toBe(20);
  });

  it("should take spares into account", () => {
    rollSpare();
    game.roll(6);
    expect(game.score()).toBe(22);
  });

  it("should take strikes into account", () => {
    rollStrike();
    game.roll(2);
    game.roll(4);
    expect(game.score()).toBe(22);
  });

  it("should return 300 for a perfect game", () => {
    perfectGame();
    expect(game.score()).toBe(300);
  });
});
