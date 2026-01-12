import { describe, expect, it } from "vitest";
import { addFractions, Fraction } from "./index.ts";

describe("Fraction addition", () => {
  it("should add two fraction with same denominator", () => {
    //given
    const a: Fraction = { numerator: 1, denominator: 5 };
    const b: Fraction = { numerator: 1, denominator: 5 };
    //when
    //then
    const expectedResult: Fraction = { numerator: 2, denominator: 5 };
    expect(addFractions(a, b)).toEqual(expectedResult);
  });
  it(
    "should add two fraction with different denominators" +
      "and the second denominator is a multiple of the first one",
    () => {
      //given
      const a: Fraction = { numerator: 1, denominator: 2 };
      const b: Fraction = { numerator: 1, denominator: 4 };
      //when
      //then
      const expectedResult: Fraction = { numerator: 3, denominator: 4 };
      expect(addFractions(a, b)).toEqual(expectedResult);
    }
  );
  it("bis", () => {
    //given
    const a: Fraction = { numerator: 1, denominator: 2 };
    const b: Fraction = { numerator: 1, denominator: 6 };
    //when
    //then
    const expectedResult: Fraction = { numerator: 2, denominator: 3 };
    expect(addFractions(a, b)).toEqual(expectedResult);
  });
  it("should add two fractions with different denominators (general case)", () => {
    //given
    const a: Fraction = { numerator: 1, denominator: 3 };
    const b: Fraction = { numerator: 1, denominator: 2 };
    //when
    //then
    const expectedResult: Fraction = { numerator: 5, denominator: 6 };
    expect(addFractions(a, b)).toEqual(expectedResult);
  });
});
