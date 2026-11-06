# @lp-labs/aliquot-sums

Proper divisor sums and exact bounded integer classification.

Original, standalone MIT TypeScript implementation with **zero runtime or peer dependencies**. ESM/CommonJS exports and separate declarations; Node18+ and compatible ES2022 browsers. No service, filesystem, network, clock or browser globals accessed on import. Compiler/formatter dependencies are development-only.

## Install

```sh
npm install @lp-labs/aliquot-sums
```

## Working example

```js
import { classifyAliquot, areAmicable } from '@lp-labs/aliquot-sums';
if (classifyAliquot(28) !== 'perfect' || !areAmicable(220, 284)) throw new Error('Divisors');
```

CommonJS: `const api = require('@lp-labs/aliquot-sums')`.

## Behavior, customization and limits

properDivisors enumerates ascending proper divisors (1 excluded for n1). aliquotSum sums them; classifyAliquot returns deficient/perfect/abundant; areAmicable requires distinct positive integers with mutual sums. Inputs1..1e12, sums checked safe integer. O(sqrt n) time and divisor-count space. No primality certification or unbounded sequence traversal.

Use the explicit function arguments and public types below to customize the documented behavior. There are no hidden environment settings or sibling-library requirements. Array inputs must be dense; sparse entries are invalid. Inputs are validated before a successful result is returned. Outputs do not mutate caller-owned inputs. Hostile proxies/getters and concurrent mutation are outside the contract.

## Errors and integration

Invalid data never produces an empty success-shaped substitute. TypeError reports incompatible runtime types/nonfinite numbers; RangeError reports unsupported ranges, invalid syntax, inconsistent states and exceeded budgets. Functions that explicitly return null, false or empty arrays describe those legitimate outcomes above. Errors propagate to callers; UI applications should catch at their boundary and visibly notify users. Numerical calculations use JavaScript IEEE754 unless the API explicitly uses bigint; compare approximate numerical results with application-appropriate tolerances.

## Complete public API

```ts
export declare function properDivisors(value: number): number[];
export declare function aliquotSum(value: number): number;
export declare function classifyAliquot(value: number): 'deficient' | 'perfect' | 'abundant';
export declare function areAmicable(a: number, b: number): boolean;
```

## Performance and portability

Complexity and resource ceilings are specified above. Buffered synchronous algorithms do not create workers or timers; callers can move expensive work to their own worker. Limits are enforced, not silently truncated. No runtime imports from any other library. No compatibility or completeness claims beyond the stated scope.

## Support

If this library is useful to you, consider supporting its maintenance with a [donation via PayPal](https://www.paypal.me/LibinPrasanth).

## Author

Created by [Libin Prasanth](https://www.linkedin.com/in/libinprasanth/). Connect on LinkedIn for updates and discussion.
