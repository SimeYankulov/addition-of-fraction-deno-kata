const fractionSymbol = Symbol();

export type Fraction = {
  [fractionSymbol]: "Fraction";
  numerator: number;
  denominator: number;
};

export const createFraction = (
  numerator: number,
  denominator: number
): Fraction => {
  if (!denominator) {
    throw Error("Divison with zero");
  }
  return { numerator, denominator, [fractionSymbol]: "Fraction" };
};

export const scaleFraction =
  (mupltiplier: number) =>
  (fraction: Fraction): Fraction => ({
    numerator: fraction.numerator * mupltiplier,
    denominator: fraction.denominator * mupltiplier,
    [fractionSymbol]: "Fraction",
  });

export const simplifyFraction =
  (divisor: number) =>
  (fraction: Fraction): Fraction => ({
    numerator: fraction.numerator / divisor,
    denominator: fraction.denominator / divisor,
    [fractionSymbol]: "Fraction",
  });
