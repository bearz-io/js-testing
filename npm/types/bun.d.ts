import type { TestFunction, TestParams } from "./types.js";
export declare function test(name: string, options?: TestParams, fn?: TestFunction): Promise<void>;
export declare function test(name: string, fn: TestFunction): Promise<void>;
