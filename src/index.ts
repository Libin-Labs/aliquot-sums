function finite(value: number, min = -Number.MAX_VALUE, max = Number.MAX_VALUE): number {
  if (typeof value !== 'number' || !Number.isFinite(value))
    throw new TypeError('Expected finite number');
  if (value < min || value > max) throw new RangeError('Number outside supported bounds');
  return value;
}
function integer(value: number, min = 0, max = 1000000): number {
  if (!Number.isSafeInteger(value)) throw new RangeError('Expected safe integer');
  return finite(value, min, max);
}
export function properDivisors(value: number): number[] {
  integer(value, 1, 1e12);
  if (value === 1) return [];
  const low = [1],
    high: number[] = [];
  for (let d = 2; d * d <= value; d++)
    if (value % d === 0) {
      low.push(d);
      if (d * d !== value) high.push(value / d);
    }
  return low.concat(high.reverse());
}
export function aliquotSum(value: number): number {
  return integer(
    properDivisors(value).reduce((a, b) => a + b, 0),
    0,
    Number.MAX_SAFE_INTEGER,
  );
}
export function classifyAliquot(value: number): 'deficient' | 'perfect' | 'abundant' {
  const sum = aliquotSum(value);
  return sum < value ? 'deficient' : sum === value ? 'perfect' : 'abundant';
}
export function areAmicable(a: number, b: number): boolean {
  integer(a, 1, 1e12);
  integer(b, 1, 1e12);
  return a !== b && aliquotSum(a) === b && aliquotSum(b) === a;
}
