import { Die } from "../models/die";
import { Player } from "../models/player";

export class AttackPlayer {
  private  player: Player;

  private  die: Die;

  constructor(player: Player) {
    this.player = player;
    this.die = new Die();
  }
  public attack(): number {
    const dieRoll = this.die.roll();
    return dieRoll * this.player.attack;
  }
}
