import { Greeter } from "../src/Greeter";

export class JavaScriptGreeter extends Greeter {
  greet(name: string) {
    return `console.log('${this.greeting}, ${name}!')`;
  }
}
