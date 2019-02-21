import { BowlingGame } from "./BowlingGame";

describe("Bowling game", () => {
  let game;
  beforeEach(() => {
    game = new BowlingGame();
  });

  it("should return 0 if it's a gutter game", () => {
    rollMany(game, 20, 0);
    expect(game.score()).toBe(0);
  });
  it("should return 20 if we roll all 1's", () => {
    rollMany(game, 20, 1);
    expect(game.score()).toBe(20);
  });
  it("should take spares into account", () => {
    rollSpare(game, 3);
    rollMany(game, 17, 0);
    expect(game.score()).toBe(16);
  });
  it("should take strikes into account", () => {
    game.roll(10);
    game.roll(3);
    game.roll(4);
    expect(game.score()).toBe(24);
  });
  it("should return 300 for a perfect game", () => {
    rollMany(game, 12, 10);
    expect(game.score()).toBe(300);
  });
});

function rollSpare(game, bonus) {
  rollMany(game, 2, 5);
  game.roll(bonus);
}

function rollMany(game, howManyRolls, droppedPins) {
  for (let rollCount = 0; rollCount < howManyRolls; rollCount++) {
    game.roll(droppedPins);
  }
}
