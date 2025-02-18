import type { Test } from "./types.ts";
export * from "./types.ts";

// deno-lint-ignore no-explicit-any
const g = globalThis as any;
let testFn : Test 
if (g.TestFn) {
    testFn = g.TestFn;
} else if (g.Bun) {
    testFn = (await import("./bun.ts")).test;
} else if (g.Deno) {
    testFn = (await import("./deno.ts")).test;
} else if (g.process) {
    testFn = (await import("./node.ts")).test;
} else {
    throw new Error("No test runner found");
}


export const test : Test = testFn;