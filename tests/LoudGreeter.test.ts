import { LoudGreeter } from "../src/LoudGreeter";

describe("LoudGreeter class", () => {
  test("Hello Amelia!!", () => {
    let greeter: LoudGreeter = new LoudGreeter("Hello");
    expect(greeter.greet("Amelia")).toBe("Hello, Amelia!!");
  });

  test("Hello Kenneth!!!!", () => {
    let greeter: LoudGreeter = new LoudGreeter("Hello");
    greeter.addVolume();
    greeter.addVolume();
    expect(greeter.greet("Kenneth")).toBe("Hello, Kenneth!!!!");
  });
});
