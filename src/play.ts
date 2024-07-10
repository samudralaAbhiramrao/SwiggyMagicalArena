import { AttackPlayer } from "./business/attackPlayer";
import { DefendPlayer } from "./business/defendPlayer";
import { Player } from "./models/player";

export class Play {
  private readonly playerA: Player;

  private readonly playerB: Player;

  private readonly attackPlayerA: AttackPlayer;

  private readonly attackPlayerB: AttackPlayer;

  private readonly defendPlayerA: DefendPlayer;

  private readonly defendPlayerB: DefendPlayer;

  constructor(
    playerA: Player,
    playerB: Player,
    attackPlayerA: AttackPlayer,
    attackPlayerB: AttackPlayer,
    defendPlayerA: DefendPlayer,
    defendPlayerB: DefendPlayer
  ) {
    this.playerA = playerA;
    this.attackPlayerA = attackPlayerA;
    this.defendPlayerA = defendPlayerA;
    this.playerB = playerB;
    this.attackPlayerB = attackPlayerB;
    this.defendPlayerB = defendPlayerB;
  }

  public fight(): string | undefined {
    try {
      console.log("The Magical Arena Game started 🚀🚀🚀");

      const firstAttacker = this.startAttackWith();
      const secondAttacker =
        firstAttacker === this.playerA ? this.playerB : this.playerA;

      while (this.playerA.health > 0 && this.playerB.health > 0) {
        this.executeRound(firstAttacker, secondAttacker);
        if (this.playerA.health <= 0 || this.playerB.health <= 0) break;
        this.executeRound(secondAttacker, firstAttacker);
      }

      return this.getWinner();
    } catch (error) {
      console.log(`Error Occured During the Play : ${error}`);
    }
  }

  private executeRound(attacker: Player, defender: Player): void {
    const attackDamage = this.getAttackDamage(attacker);

    const defendStrength = this.getDefendStrength(defender);

    const damageTaken = Math.max(attackDamage - defendStrength, 0);

    defender.health -= damageTaken;
  }

  private startAttackWith(): Player {
    if (this.playerA.health <= this.playerB.health) {
      return this.playerA;
    }
    return this.playerB;
  }

  private getAttackDamage(attacker: Player): number {

   if(attacker === this.playerA){
    return this.attackPlayerA.attack();
   }
   return this.attackPlayerB.attack();
  }

  private getDefendStrength(defender: Player): number {

   if(defender === this.playerA){
    return this.defendPlayerA.defend();
   }
   return this.defendPlayerB.defend();
  }

  private getWinner(): string {

   if(this.playerA.health <= 0){
    return this.playerB.name;
   }
   return this.playerA.name;

  }
}
