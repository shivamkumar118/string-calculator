import { describe, expect, test } from "vitest";
import { add } from "@/utils/calculator";

describe("String Calculator", () => {
  test("returns 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });

  test("adds numbers separated by commas", () => {
    expect(add("1,2,3")).toBe(6);
    expect(add("10,20,30")).toBe(60);
  });

  test("supports newline as a delimiter", () => {
    expect(add("1\n2,3")).toBe(6);
    expect(add("4\n5\n6")).toBe(15);
  });

  test("supports custom delimiters", () => {
    expect(add("//;\n1;2;3")).toBe(6);
    expect(add("//|\n4|5|6")).toBe(15);
    expect(add("//-\n7-8-9")).toBe(24);
  });

  test("returns 0 if input is only a delimiter", () => {
    expect(add("//;\n")).toBe(0);
  });

  test("handles mixed valid and invalid numbers (ignores invalid)", () => {
    expect(add("1,a,2")).toBe(3);
    expect(add("//;\n5;abc;7")).toBe(12);
  });

  test("throws an error when negative numbers are present", () => {
    expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
    expect(() => add("//;\n-1;2;-3")).toThrow(
      "Negative numbers not allowed: -1, -3"
    );
  });

  test("handles large numbers", () => {
    expect(add("1000,2000,3000")).toBe(6000);
  });

  test("handles special character delimiters", () => {
    expect(add("//#\n1#2#3")).toBe(6);
    expect(add("//.\n4.5.6")).toBe(15);
    expect(add("//$\n7$8$9")).toBe(24);
  });

  test("ignores numbers that are not valid", () => {
    expect(add("//;\n5;NaN;7")).toBe(12);
    expect(add("1,b,2")).toBe(3);
  });
});
