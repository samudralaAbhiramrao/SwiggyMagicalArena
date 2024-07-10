export class Player {
  public health: number;
  public  strength: number;
  public  attack: number;
  public  name: string; 


  constructor(health: number, strength: number, attack: number, name: string) {
    this.health = health;
    this.strength = strength;
    this.attack = attack;
    this.name = name;
  }
}
