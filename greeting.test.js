const greet = guest => `Hello, ${guest}`


describe("Greeting", () => {
	test("says hello", () => {
		expect(greet("Jest")).toBe("Hello, Jest")
	})
})