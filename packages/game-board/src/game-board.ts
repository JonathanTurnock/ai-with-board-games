import { range } from "lodash";
import { table } from "table";
import { GamePiece } from "./game-piece";

export interface GameBoardProps {
  height: number;
  width: number;
}

export class GameBoard {
  private pieces: Record<string, GamePiece> = {};

  constructor(private readonly props: GameBoardProps) {}

  setPiece(piece: GamePiece) {
    this.pieces[`${piece.x},${piece.y}`] = piece;
  }

  render() {
    const board = range(this.props.height).map((y) =>
      range(this.props.width).map(
        (x) => this.pieces[`${x},${y}`]?.toString() || " "
      )
    );
    console.log(
      table(board, {
        columnDefault: {
          paddingLeft: 2,
          paddingRight: 2,
        },
      })
    );
  }
}
