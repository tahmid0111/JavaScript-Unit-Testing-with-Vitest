import { describe, expect, test } from "vitest";
import { maxFinder } from "../js/main";

describe("testing To-do application", () => {
  test("checking the max number", () => {
    expect(maxFinder(4, 2)).toBe(4);
  });

  test("checking the max number2", () => {
    expect(maxFinder(2, 1)).toBe(2);
  });

  test("checking the max number3", () => {
    expect(maxFinder(9, 10)).toBe(10);
  });
});
