const fizzbuzz = require("./fizzbuzz")
describe("Fizz Buzz", () => {
	test("Fizz on multiples of 3", () => {
		expect(fizzbuzz(3)).toBe("Fizz")
		expect(fizzbuzz(6)).toBe("Fizz")
	})
	test("Buzz on multiples of 5", () => {
		expect(fizzbuzz(5)).toBe("Buzz")
		expect(fizzbuzz(25)).toBe("Buzz")
	})
	test("FizzBuzz on multiples of 3 and 5",() => {
		expect(fizzbuzz(15)).toBe("FizzBuzz")
		expect(fizzbuzz(30)).toBe("FizzBuzz")
	})
	test("return original num for all other",() => {
		expect(fizzbuzz(2)).toBe(2)
		expect(fizzbuzz(4)).toBe(4)
	})

})