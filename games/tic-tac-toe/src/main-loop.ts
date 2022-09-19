import prompts from "prompts";
import { gameLoop } from "./game-loop";

let active = true;
const onExit = () => {
  console.log("Thanks for Playing!");
  active = false;
};

const mainMenuChoices = {
  NEW_GAME: gameLoop,
  EXIT: onExit,
};

export const mainLoop = async () => {
  active = true;
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
