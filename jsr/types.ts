export interface TestContext extends Record<string | symbol, unknown | undefined> {

}

export type TestFunction = (context: TestContext, done: (e?: unknown) => void) => Promise<void> | void;

export interface TestParams extends Record<string | symbol, unknown | undefined> {
    skip?: boolean;
    timeout?: number;
}


export interface Test {
    (name: string, fn: TestFunction): void;
    (name: string, params: TestParams, fn: TestFunction): void;
}