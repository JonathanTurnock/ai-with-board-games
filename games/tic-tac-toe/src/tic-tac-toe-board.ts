import { GameBoard, GamePiece } from "game-board";
import _, { isUndefined } from "lodash";
import { getPlayerColor, getPlayerSymbol, Player } from "./player";

export type Position =
  | "A1"
  | "A2"
  | "A3"
  | "B1"
  | "B2"
  | "B3"
  | "C1"
  | "C2"
  | "C3";

export class TicTacToeBoard {
  private static readonly POS_COORDS: Record<Position, [number, number]> = {
    A1: [0, 0],
    B1: [1, 0],
    C1: [2, 0],
    A2: [0, 1],
    B2: [1, 1],
    C2: [2, 1],
    A3: [0, 2],
    B3: [1, 2],
    C3: [2, 2],
  };

  private static readonly WINLINES: Position[][] = [
    ["A1", "A2", "A3"], // Top Row
    ["B1", "B2", "B3"], // Middle Row
    ["C1", "C2", "C3"], // Bottom Row
    ["A1", "B1", "C1"], // Left Column
    ["A2", "B2", "C2"], // Middle Column
    ["A3", "B3", "C3"], // Right Column
    ["A1", "B2", "C3"], // Diagonal Down
    ["A3", "B2", "C1"], // Diagonal Up
  ];

  private readonly state: Record<Position, Player | undefined>;

  private board: GameBoard;

  /**
   * Returns a list of available positions on the board
   */
  get availablePositions(): Position[] {
    return _(this.state).pickBy(isUndefined).keys().value() as Position[];
  }

  /**
   * Returns true if there is at least one position left on the board
   */
  get hasRemainingPositions(): boolean {
    return this.availablePositions.length > 0;
  }

  constructor() {
    this.board = new GameBoard({ height: 3, width: 3 });
    this.state = {
      A1: undefined,
      B1: undefined,
      C1: undefined,
      A2: undefined,
      B2: undefined,
      C2: undefined,
      A3: undefined,
      B3: undefined,
      C3: undefined,
    };
  }

  /**
   * Draws the Board to the console
   */
  render() {
    console.clear();
    this.board.render();
  }

  /**
   * Adds a new piece to the game board for given player at the given position
   * @param player
   * @param position
   */
  setPosition(player: Player, position: Position) {
    this.state[position] = player;
    this.board.setPiece(
      new GamePiece({
        x: TicTacToeBoard.POS_COORDS[position][0],
        y: TicTacToeBoard.POS_COORDS[position][1],
        symbol: getPlayerSymbol(player),
        color: getPlayerColor(player),
      })
    );
  }

  /**
   * Checks if the given player has won based on the current state by scanning each winline and
   * checking if the given player is the player located at each position
   *
   * @param player
   */
  hasWon(player: Player) {
    return TicTacToeBoard.WINLINES.some((winline) =>
      winline.every((position) => this.state[position] === player)
    );
  }
}
