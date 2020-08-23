import { handleSubmit } from "../src/client/js/formHandler"

describe("Testing the handleSubmit() function", () => {
    test('It should return true', () => {
        expect(handleSubmit).toBeDefined();
    });
});

describe("Testing the handleSubmit() function", () => {
    test('It should be a function', () => {
        expect(typeof handleSubmit).toBe('function');
    });
});