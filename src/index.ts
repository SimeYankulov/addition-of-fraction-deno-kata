import { gcd } from "./utils/utils.ts";

export type Fraction = {
  numerator: number;
  denominator: number;
};

const scaleFraction =
  (mupltiplier: number) =>
  (fraction: Fraction): Fraction => ({
    numerator: fraction.numerator * mupltiplier,
    denominator: fraction.denominator * mupltiplier,
  });

const simplifyFraction =
  (divisor: number) =>
  (fraction: Fraction): Fraction => ({
    numerator: fraction.numerator / divisor,
    denominator: fraction.denominator / divisor,
  });

export const addFractions = (a: Fraction, b: Fraction): Fraction => {
  if (a.denominator !== b.denominator) {
    const multipliedA = scaleFraction(b.denominator)(a);
    const multipliedB = scaleFraction(a.denominator)(b);

    return addFractions(multipliedA, multipliedB);
  }

  const resultBeforeSimplification = {
    numerator: a.numerator + b.numerator,
    denominator: a.denominator,
  };

  const dividor = gcd(
    resultBeforeSimplification.numerator,
    resultBeforeSimplification.denominator
  );

  return simplifyFraction(dividor)(resultBeforeSimplification);
};
