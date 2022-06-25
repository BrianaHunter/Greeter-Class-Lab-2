import { Greeter } from "../src/Greeter";

describe("Greeter class", () => {
  test("Hello Everyone", () => {
    const greeter: Greeter = new Greeter("Hello");
    expect(greeter.greet("Everyone")).toBe("Hello, Everyone!");
  });

  test("Hello Hunter", () => {
    const greeter: Greeter = new Greeter("Hello");
    expect(greeter.greet("Hunter")).toBe("Hello, Hunter!");
    // console.log(greeter.greet("Hunter"));
  });
});
