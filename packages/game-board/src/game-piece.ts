import { black, blue, red } from "chalk";

export interface GamePieceProps {
  x: number;
  y: number;
  symbol: string;
  color: "blue" | "red";
}

export class GamePiece {
  constructor(private readonly props: GamePieceProps) {}

  get x() {
    return this.props.x;
  }

  get y() {
    return this.props.y;
  }

  toString(): string {
    switch (this.props.color) {
      case "red":
        return red(this.props.symbol);
      case "blue":
        return blue(this.props.symbol);
      default:
        return black(this.props.symbol);
    }
  }
}
