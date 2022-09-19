import { GameBoard } from "game-board";

/**
 * Starts a new game of Tic Tac Toe
 */
export const onNewGame = () => {
  let active = false;

  const board = new GameBoard({
    height: 3,
    width: 3,
  });

  while (active) {}
};
