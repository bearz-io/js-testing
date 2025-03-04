/**
 * ## Overview
 *
 * An adapter for the builtin Deno, Bun, and NodeJs testing frameworks which is
 * useful for library authors that are targeting multiple runtimes.
 *
 * The aim is provide a standard subset to run tests against all 3 runtimes
 * rather than implement all features and test styles until node:test is available
 * in all three testing runtimes.
 *
 * [logo](https://raw.githubusercontent.com/bearz-io/js/refs/heads/main/eng/assets/bearz.io.png)
 *
 * [![JSR](https://jsr.io/badges/@bearz/testing)](https://jsr.io/@bearz/testing)
 * [![npm version](https://badge.fury.io/js/@bearz%2Ftesting.svg)](https://badge.fury.io/js/@bearz%2Ftesting)
 * [![GitHub version](https://badge.fury.io/gh/bearz-io%2Fjs-testing.svg)](https://badge.fury.io/gh/bearz-io%2Fjs-testing)
 *
 * ## Documentation
 *
 * Documentation is available on [jsr.io](https://jsr.io/@bearz/testing/doc)
 *
 * ## Usage
 *
 * psuedo code to show off the test function.
 *
 * ```typescript
 * import { test } from "@bearz/testing";
 *
 * test("simple", () => {
 *     console.log("test");
 * });
 *
 * test("use done", (_, done) => {
 *
 *     done(); // finishes the test.
 *
 *     done(new Error()) // finishes the test and throws an error.
 * });
 *
 * test("async", async () => {
 *     await Deno.writeTextFile("test.txt", test);
 *
 *     await exists("test.txt");
 * });
 *
 * test("skip", { skip: true}, () => {
 *     console.log("skipped test");
 * });
 *
 * test("timeout", { timeout: 2000 }, () => {
 *     // the test timeout will be exceeded
 *     setTimeout(() => { }, 3000);
 * });
 *
 * ```
 *
 * ## Functions
 *
 * - `test` - defines a test
 *
 * ## Notes
 *
 * This library was written with the frustration of dealing with @denoland/dnt which shims Deno.test
 * and generates alot of excess code. It is cleaner to just run `node --test` and `bun test` to ensure
 * that the tests are executed against the other runtimes.
 *
 * I also tried vitest. Vitest was failing to work with deno outside of very limit contexts.
 * Vitest is cool, but it is/was heavy on the dependencies.  The number of dependencies increased
 * times for scripts to run and and it required dealing with the headache of nodeModulesDir=auto.
 * @module
 * @license MIT
 */
import * as dntShim from "./_dnt.shims.js";
export * from "./types.js";
// deno-lint-ignore no-explicit-any
const g = dntShim.dntGlobalThis;
let testFn;
if (g.TestFn) {
    testFn = g.TestFn;
} else if (g.Bun) {
    testFn = (await import("./bun.js")).test;
} else if (g.Deno) {
    testFn = (await import("./deno.js")).test;
} else if (g.process) {
    testFn = (await import("./node.js")).test;
} else {
    throw new Error("No test runner found");
}
/**
 * The test function defines tests.
 */
export const test = testFn;
