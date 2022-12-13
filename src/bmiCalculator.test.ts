import { bmiCalculator } from "./bmiCalculator";
describe("calculate bmi #9.1", () => {
    test("calculate Bmi has to be a function", () => {
        expect(typeof bmiCalculator).toBe("function");
    })
    test("calculate Bmi has to return Underweight", () => {
        expect(bmiCalculator(180, 50)).toBe("Underweight");
    })
    test("calculate Bmi has to return Normal (healthy weight)", () => {
        expect(bmiCalculator(180, 70)).toBe("Normal (healthy weight)");
    })
})