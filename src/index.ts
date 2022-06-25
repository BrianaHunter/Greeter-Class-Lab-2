import { Greeter } from "../src/Greeter";
let greeter: Greeter = new Greeter("Hello, Everyone!");
console.log(greeter.greeting);

import { JavaScriptGreeter } from "../src/JavaScriptGreeter";
let javaGreeter: JavaScriptGreeter = new JavaScriptGreeter("Hello, Grant!");
console.log(javaGreeter.greeting);

import { LoudGreeter } from "../src/LoudGreeter";
let loudGreeter: LoudGreeter = new LoudGreeter("Hello, Amelia!!");
console.log(loudGreeter.greeting);

import { HtmlGreeter } from "../src/HtmlGreeter";
let htmlGreeter: HtmlGreeter = new HtmlGreeter("<h1>Hello, Paige</h1>");
console.log(htmlGreeter.greeting);
