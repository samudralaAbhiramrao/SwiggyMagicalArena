export class player {
  public health: number;
  public readonly strength: number;
  public readonly attack: number;
  public readonly name: string; 

  // Used readonly because its cannot be changed in future as compared to health

  constructor(health: number, strength: number, attack: number, name: string) {
    this.health = health;
    this.strength = strength;
    this.attack = attack;
    this.name = name;
  }
}
