import { Greeter } from "../src/Greeter";

export class LoudGreeter extends Greeter {
  private extra: string = "!";

  constructor(greeting: string) {
    super(greeting);
  }

  // METHOD
  greet(name: string) {
    return super.greet(name) + this.extra;
  }
  addVolume(): void {
    this.extra += "!";
  }
}
