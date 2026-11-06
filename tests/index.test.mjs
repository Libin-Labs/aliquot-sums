import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('divisor references', () => {
  assert.deepEqual(api.properDivisors(36), [1, 2, 3, 4, 6, 9, 12, 18]);
  assert.equal(api.aliquotSum(36), 55);
});
test('perfect and abundant', () => {
  assert.equal(api.classifyAliquot(28), 'perfect');
  assert.equal(api.classifyAliquot(12), 'abundant');
});
test('prime and unit', () => {
  assert.deepEqual(api.properDivisors(1), []);
  assert.equal(api.classifyAliquot(13), 'deficient');
});
test('amicable pairs', () => {
  assert.ok(api.areAmicable(220, 284));
  assert.ok(!api.areAmicable(6, 6));
  assert.ok(!api.areAmicable(12, 18));
});
test('invalid bounded inputs', () => {
  for (const n of [0, -1, 2.5, NaN, 1e12 + 1]) assert.throws(() => api.properDivisors(n));
});
test('brute force divisor oracle', () => {
  for (let n = 1; n <= 300; n++) {
    const ds = [];
    for (let d = 1; d < n; d++) if (n % d === 0) ds.push(d);
    assert.deepEqual(api.properDivisors(n), ds);
  }
});
