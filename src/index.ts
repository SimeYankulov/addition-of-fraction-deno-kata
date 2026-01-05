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

export const addFractions = (a: Fraction, b: Fraction): Fraction => {
  if (a.denominator !== b.denominator) {
    const multipliedA = scaleFraction(b.denominator / a.denominator)(a);
    return addFractions(multipliedA, b);
  }

  return {
    numerator: a.numerator + b.numerator,
    denominator: a.denominator,
  };
};
