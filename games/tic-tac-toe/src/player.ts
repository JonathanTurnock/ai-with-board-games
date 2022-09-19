export type Player = 1 | 2;

export const getDefaultPlayer = (): Player => 1;

export const getNextPlayer = (p: Player): Player => (p === 1 ? 2 : 1);

export const getPlayerSymbol = (p: Player): string => (p === 1 ? "x" : "o");

export const getPlayerColor = (p: Player): "blue" | "red" =>
  p === 1 ? "blue" : "red";
