// deno-lint-ignore no-explicit-any
import * as dntShim from "./_dnt.shims.js";
export const globals = dntShim.dntGlobalThis;
let timeout = undefined;
if (globals.process && globals.process.env && globals.process.env["TESTING_TIMEOUT"]) {
    const t = Number.parseInt(globals.process.env["TESTING_TIMEOUT"]);
    if (!isNaN(t)) {
        timeout = t;
    }
}
export const defaults = {
    timeout,
};
