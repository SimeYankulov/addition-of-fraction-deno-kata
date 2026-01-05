import { describe, it, expect } from "vitest";
import sum from "./index.ts";

describe("sum", () => {
  it("should add two numbers correctly", () => {
    expect(sum(2, 3)).toBe(5);
  });
});
