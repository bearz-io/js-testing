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
export const test = testFn;
