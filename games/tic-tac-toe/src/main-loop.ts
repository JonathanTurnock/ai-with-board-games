import * as console from "console";
import * as prompts from "prompts";
import { onNewGame } from "./on-new-game";

let active = true;
const onExit = () => {
  console.log("Thanks for Playing!");
  active = false;
};

const mainMenuChoices = {
  NEW_GAME: onNewGame,
  EXIT: onExit,
};

export const main = async () => {
  while (active) {
    await prompts(
      {
        type: "select",
        message: "Welcome to Tic Tac Toe!",
        name: "action",
        choices: [
          { title: "New Game", value: "NEW_GAME" },
          { title: "Exit", value: "EXIT" },
        ],
      },
      { onSubmit: (_, answer) => mainMenuChoices[answer](), onCancel: onExit }
    );
  }
};
