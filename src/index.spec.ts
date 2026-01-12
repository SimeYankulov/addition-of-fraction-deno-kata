import { describe, expect, it } from "vitest";
import { createFraction } from "./fraction.ts";
import { addFractions } from "./index.ts";

describe("Fraction addition", () => {
  it("should add two fraction with same denominator", () => {
    //given
    const a = createFraction(1, 5);
    const b = createFraction(1, 5);
    //when
    //then
    const expectedResult = createFraction(2, 5);
    expect(addFractions(a, b)).toEqual(expectedResult);
  });
  it(
    "should add two fraction with different denominators" +
      "and the second denominator is a multiple of the first one",
    () => {
      //given
      const a = createFraction(1, 2);
      const b = createFraction(1, 4);
      //when
      //then
      const expectedResult = createFraction(3, 4);
      expect(addFractions(a, b)).toEqual(expectedResult);
    }
  );
  it("bis", () => {
    //given
    const a = createFraction(1, 2);
    const b = createFraction(1, 6);
    //when
    //then
    const expectedResult = createFraction(2, 3);
    expect(addFractions(a, b)).toEqual(expectedResult);
  });
  it("should add two fractions with different denominators (general case)", () => {
    //given
    const a = createFraction(1, 3);
    const b = createFraction(1, 2);

    //when
    //then
    const expectedResult = createFraction(5, 6);
    expect(addFractions(a, b)).toEqual(expectedResult);
  });
  it("should add two fractions with different denominators (general case)", () => {
    //given
    const a = createFraction(1, 3);
    const b = createFraction(1, 2);
    //when
    //then
    const expectedResult = createFraction(5, 6);
    expect(addFractions(a, b)).toEqual(expectedResult);
  });
});
