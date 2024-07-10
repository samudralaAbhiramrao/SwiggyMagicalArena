import { Player } from "../models/player";

export class Validator {
  public static validationStatus(playerDetails: Player): boolean {
    return playerDetails.attack > 0 &&
      playerDetails.health > 0 &&
      playerDetails.strength > 0 &&
      playerDetails.name.length > 0
      ? true
      : false;
  }
}
