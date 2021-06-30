import { capitalize } from "../utils/capitalize";

describe("capitalize()", () => {
  test("converts first letter of string to uppercase", () => {
    const test = "test";
    const testResult = capitalize(test);

    expect(testResult).toBe("Test");
  });
});
