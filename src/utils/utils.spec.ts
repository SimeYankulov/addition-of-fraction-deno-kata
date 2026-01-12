import { describe, expect, it } from "vitest";
import { gcd } from "./utils.ts";

describe("GCD", () => {
  it("should return the gcd of two numbers", () => {
    //given
    const a = 6;
    const b = 8;
    //when
    //then
    expect(gcd(a, b)).toEqual(2);
  });
  it("should return the gcd of two numbers", () => {
    //given
    const a = 3;
    const b = 9;
    //when
    //then
    expect(gcd(a, b)).toEqual(3);
  });
  it("should return the gcd of two numbers", () => {
    //given
    const a = 4;
    const b = 9;
    //when
    //then
    expect(gcd(a, b)).toEqual(1);
  });
  it("should return the gcd of two numbers", () => {
    //given
    const a = 12;
    const b = 15;
    //when
    //then
    expect(gcd(a, b)).toEqual(3);
  });
});
