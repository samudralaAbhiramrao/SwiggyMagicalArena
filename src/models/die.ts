export class Die {
  // Roll() used to generated a number btw 1 to 6 and return back
  public roll(): number {
    return Math.floor(Math.random() * 6) + 1;
  }
}
