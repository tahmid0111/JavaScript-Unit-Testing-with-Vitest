import { describe, expect, it } from "vitest";
import { fizzBuzz } from "../js/fizzBuzz";

describe("testing fizzBuzz applicatipn", () => {
  it("check fizzBuzz is divided by both 5 and 3", () => {
    expect(fizzBuzz(15)).toBe("fizzBuzz");
  });

  it("check fizzBuzz is divided by 5", () => {
    expect(fizzBuzz(20)).toBe("fizz");
  });

  it("check fizzBuzz is divided by 3", () => {
    expect(fizzBuzz(12)).toBe("Buzz");
  });

  it("check fizzBuzz is divided by none of them", () => {
    expect(fizzBuzz(29)).toBe("29");
  });
});
