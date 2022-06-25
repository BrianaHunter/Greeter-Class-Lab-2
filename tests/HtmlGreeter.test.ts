import { HtmlGreeter } from "../src/HtmlGreeter";

describe("HtmlGreeter class", () => {
  test("Hello Paige", () => {
    let greeter: HtmlGreeter = new HtmlGreeter("Hello");

    expect(greeter.greet("Paige")).toBe("<h1>Hello, Paige!</h1>");
  });

  test("Hello Zeke", () => {
    let greeter: HtmlGreeter = new HtmlGreeter("Hello", "p");
    let tagName = "p";
    expect(greeter.greet("Zeke")).toBe("<p>Hello, Zeke!</p>");
  });
});
