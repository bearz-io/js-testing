/**
 * The globals variable which is tied to `globalThis`.
 */
import * as dntShim from "./_dnt.shims.js";
export declare const globals: typeof dntShim.dntGlobalThis & Record<string, any>;
/**
 * The global defaults
 */
export declare const defaults: {
    timeout: number | undefined;
};
