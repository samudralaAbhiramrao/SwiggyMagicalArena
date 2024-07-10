import { Die } from "../models/die";
import { Player } from "../models/player";

export class DefendPlayer{
 private  player: Player;

 private  die: Die;

 constructor(player: Player) {
   this.player = player;
   this.die = new Die();
 }

 public defend(): number {
   const dieRoll = this.die.roll();
   return dieRoll * this.player.strength;
 }
 
}