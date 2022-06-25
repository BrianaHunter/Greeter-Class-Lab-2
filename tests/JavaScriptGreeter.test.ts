import { JavaScriptGreeter } from "../src/JavaScriptGreeter";

describe("JavaScriptGreeter class", () => {
  test("Hello Grant", () => {
    let greeter: JavaScriptGreeter = new JavaScriptGreeter("Hello");
    expect(greeter.greet("Grant")).toBe(`console.log('Hello, Grant!')`);
  });

  test("Hello Briana", () => {
    let greeter: JavaScriptGreeter = new JavaScriptGreeter("Hello!");
    expect(greeter.greet("Briana")).toBe(`console.log('Hello!, Briana!')`);
  });
});
