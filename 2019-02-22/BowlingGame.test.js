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

  it("should return zero for a gutter game", () => {
    rollMany(20, 0);
    expect(game.score()).toBe(0);
  });
  it("should return 20 for all 1's", () => {
    rollMany(20, 1);
    expect(game.score()).toBe(20);
  });
  it("should take spares into account", () => {
    rollSpare();
    game.roll(3);
    rollMany(17, 0);
    expect(game.score()).toBe(16);
  });
  it("should take strikes into account", () => {
    rollStrike();
    game.roll(3);
    game.roll(2);
    expect(game.score()).toBe(20);
  });
  it("should return 300 for a perfect game", () => {
    rollMany(12, 10);
    expect(game.score()).toBe(300);
  });
});
