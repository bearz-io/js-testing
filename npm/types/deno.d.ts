import type { TestFunction, TestParams } from "./types.js";
export declare function test(name: string, options?: TestParams, fn?: TestFunction): void;
export declare function test(name: string, fn: TestFunction): void;
