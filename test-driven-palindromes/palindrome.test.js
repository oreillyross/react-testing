const palindromes = require("./palindrome");

describe("palindromes", () => {
  test("correctly identifies one palindrome", () => {
    expect(palindromes("madam")).toEqual(["madam"]);
  });
});
