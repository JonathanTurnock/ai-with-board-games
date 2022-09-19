import { GameBoard } from "./game-board";
import { GamePiece } from "./game-piece";

describe("GameBoard", () => {
  const board = new GameBoard({ height: 3, width: 3 });

  const piece1 = new GamePiece({ x: 0, y: 1, color: "blue", symbol: "x" });
  const piece2 = new GamePiece({ x: 0, y: 0, color: "blue", symbol: "x" });
  const piece3 = new GamePiece({ x: 1, y: 0, color: "red", symbol: "o" });

  board.setPiece(piece1);
  board.setPiece(piece2);
  board.setPiece(piece3);

  describe("render", () => {
    const consoleSpy = jest.spyOn(console, "log");

    it("should call console log", () => {
      board.render();
      expect(consoleSpy.mock.calls[0][0]).toMatchSnapshot();
    });
  });
});
