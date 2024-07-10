import { Player } from "./models/player";
import { AttackPlayer } from "./business/attackPlayer";
import { DefendPlayer } from "./business/defendPlayer";
import { Play } from "./play";
import { Validator } from "./Validations/validation";

const playerA = new Player(60, 40, 20, "Player A");
const playerB = new Player(50, 20, 20, "Player B");

const attackStrategyA = new AttackPlayer(playerA);
const attackStrategyB = new AttackPlayer(playerB);
const defendStrategyA = new DefendPlayer(playerA);
const defendStrategyB = new DefendPlayer(playerB);

try {
  if (
    Validator.validationStatus(playerA) &&
    Validator.validationStatus(playerB)
  ) {
    const play = new Play(
      playerA,
      playerB,
      attackStrategyA,
      attackStrategyB,
      defendStrategyA,
      defendStrategyB
    );

    const result = play.fight();

    console.log(`Won : ${result}`);
  } else {
    throw new Error("Invalid Player Details, Please check !!!");
  }
} catch (error: any) {
  console.log(error.message);
}
