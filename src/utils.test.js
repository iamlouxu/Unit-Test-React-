import { describe, it, expect } from "vitest";
import { add, safeDivide, roundTo, parsePercent } from "./utils";

describe("add", () => {
  it('add(2, "5") → 7', () => {
    expect(add(2, "5")).toBe(7);
  });
  it('add("3", 3) → 6', () => {
    expect(add("3", 3)).toBe(6);
  });
});

describe("safeDivide", () => {
  it("safeDivide(7, 2) → 3.5", () => {
    expect(safeDivide(7, 2)).toBe(3.5);
  });
  it("safeDivide(10, 0) → null", () => {
    expect(safeDivide(10, 0)).toBeNull();
  });
});

describe("roundTo", () => {
  it("roundTo(1.005, 2) → 1.01", () => {
    // 浮點數誤差，建議用 toBeCloseTo
    expect(roundTo(1.005, 2)).toBeCloseTo(1.01, 12);
  });
  it("roundTo(123.4567, 3) → 123.457", () => {
    expect(roundTo(123.4567, 3)).toBe(123.457);
  });
});

describe("parsePercent", () => {
  it('parsePercent("7%") → 0.07', () => {
    expect(parsePercent("7%")).toBe(0.07);
  });
  it('parsePercent("12.5%") → 0.125', () => {
    expect(parsePercent("12.5%")).toBe(0.125);
  });
});
