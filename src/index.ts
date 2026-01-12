import {
  createFraction,
  Fraction,
  scaleFraction,
  simplifyFraction,
} from "./fraction.ts";
import { gcd } from "./utils/utils.ts";

export const addFractions = (a: Fraction, b: Fraction): Fraction => {
  if (a.denominator !== b.denominator) {
    const multipliedA = scaleFraction(b.denominator)(a);
    const multipliedB = scaleFraction(a.denominator)(b);

    return addFractions(multipliedA, multipliedB);
  }

  const resultBeforeSimplification = createFraction(
    a.numerator + b.numerator,
    a.denominator
  );

  const dividor = gcd(
    resultBeforeSimplification.numerator,
    resultBeforeSimplification.denominator
  );

  return simplifyFraction(dividor)(resultBeforeSimplification);
};
