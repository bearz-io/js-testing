# @bearz/assert

## Overview

An opinated assertion library for testing jolt9/bearz typescript/javascript
libraries. 

The library current wraps the chai assertion library
and leverages the Deno standard library's `@std/assert` module.
 
It is primarily used for testing for various bearz.io modules to make it
easier to write tests and switch between testing frameworks (deno test and vitest).

<img src="https://raw.githubusercontent.com/bearz-io/js/refs/heads/main/eng/assets/bearz.io.png" height="64" />

[![JSR](https://jsr.io/badges/@bearz/assert)](https://jsr.io/@bearz/assert)
[![npm version](https://badge.fury.io/js/@bearz%2Fassert.svg)](https://badge.fury.io/js/@bearz%2Fassert)
[![GitHub version](https://badge.fury.io/gh/bearz-io%2Fjs-assert.svg)](https://badge.fury.io/gh/bearz-io%2Fjs-assert)

## Documentation

Documentation is available on [jsr.io](https://jsr.io/@bearz/assert/doc)

## Usage
```typescript
import { equal, ok, nope } from "@bearz/assert";

equal(1, 1);
ok(true);
nope(false);
```

## Classes

- `AssertionError` the core assertion error.

## Functions

- `arrayIncludes` - asserts that an array includes values
- `assert` - asserts that a value is truthy.
- `debug` - logs a debug statement for tests. avoids polluting standard out unless debug is enabled.
- `setDebugTests` - sets debugging for writing debug statements to true or false.
- `equal` - asserts that values are deeply equal.
- `exists` - asserts that a value exists.
- `fail` - fails a test by throwing an AssertionError.
- `instanceOf` - asserts that a value is an instance of a type.
- `nope` - asserts that a value is falsy.
- `notOk` - asserts that a value is falsy.
- `notEqual` - asserts that two values are not deeply equal.
- `notInstanceOf` - asserts that a value is not an instance of a type.
- `notStrictEqual` - asserts that two values are not strictly equal (not the same ref).
- `ok` - asserts that a value is truthy.
- `rejects` - asserts that promise returns a rejection.
- `strictEqual` - asserts that two values are strictly equal (same ref).
- `stringIncludes` - asserts that a string includes a value.
- `throws` - asserts that a function throws an exception.
- `unimplemented` - asserts that a test is not yet implemented.

## TODO

## License

[MIT License](./LICENSE.md)
