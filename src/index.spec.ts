import { describe, expect, it } from "vitest";
import { addFractions, Fraction } from "./index.ts";

describe("Fraction addition", () => {
  it("should add two fraction", () => {
    //given
    const a: Fraction = { numerator: 1, denominator: 5 };
    const b: Fraction = { numerator: 1, denominator: 5 };
    //when
    //then
    const expectedResult: Fraction = { numerator: 2, denominator: 5 };
    expect(addFractions(a, b)).toEqual(expectedResult);
  });
  it("should add two fraction with different denominators", () => {
    //given
    const a: Fraction = { numerator: 1, denominator: 2 };
    const b: Fraction = { numerator: 1, denominator: 4 };
    //when
    //then
    const expectedResult: Fraction = { numerator: 3, denominator: 4 };
    expect(addFractions(a, b)).toEqual(expectedResult);
  });
  it("should add two fraction with different denominators", () => {
    //given
    const a: Fraction = { numerator: 1, denominator: 2 };
    const b: Fraction = { numerator: 1, denominator: 6 };
    //when
    //then
    const expectedResult: Fraction = { numerator: 4, denominator: 6 };
    expect(addFractions(a, b)).toEqual(expectedResult);
  });
});
