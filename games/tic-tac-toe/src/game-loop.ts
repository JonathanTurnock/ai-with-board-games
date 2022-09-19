import prompts from "prompts";
import { getDefaultPlayer, getNextPlayer } from "./player";
import { TicTacToeBoard } from "./tic-tac-toe-board";

let active = true;
const onExit = () => {
  active = false;
};

export const gameLoop = async () => {
  active = true;
  const board = new TicTacToeBoard();
  console.clear();
  board.render();

  let player = getDefaultPlayer();

  const onChoice = (_, position) => {
    board.setPosition(player, position);

    console.clear();
    board.render();

    if (board.hasWon(player)) {
      console.log(`Player ${player} Wins! 🥳`);
      onExit();
    } else if (!board.hasRemainingPositions) {
      console.log("Oh No Its a Tie! 😔");
      onExit();
    }

    player = getNextPlayer(player);
  };

  while (active) {
    await prompts(
      {
        type: "select",
        message: `Player ${player} Pick a Spot...`,
        name: "position",
        choices: board.availablePositions.map((it) => ({
          title: it,
          value: it,
        })),
      },
      { onSubmit: onChoice, onCancel: onExit }
    );
  }
};
