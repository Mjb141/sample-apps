import { fibonacci } from "../src/index";

it("should return '1' for 1", () => {
  expect(fibonacci(1)).toBe(1);
});

it("should return 'null' for negative 'num'", () => {
  expect(fibonacci(-1)).toBe(null);
});
