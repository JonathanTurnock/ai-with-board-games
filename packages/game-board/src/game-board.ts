import { range } from "lodash";
import { table } from "table";
import { GamePiece } from "./game-piece";
import excelColumnName from "excel-column-name";

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
    const board = range(this.props.height + 1).map((y) => [
      y > 0 ? y : " ",
      ...range(this.props.width).map((x) => {
        if (y === 0) return excelColumnName.intToExcelCol(x + 1);
        return this.pieces[`${x},${y - 1}`]?.toString() || " ";
      }),
    ]);
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
