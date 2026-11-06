import { classifyAliquot, areAmicable } from '@lp-labs/aliquot-sums';
if (classifyAliquot(28) !== 'perfect' || !areAmicable(220, 284)) throw new Error('Divisors');
// @ts-expect-error invalid argument must be rejected by declarations
classifyAliquot(28n);
