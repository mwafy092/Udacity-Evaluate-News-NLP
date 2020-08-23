import { checkForName } from "../src/client/js/nameChecker"

describe('Testing Valid url', () => {
    test('it should match the expected URL', () => {
        const urlFormat = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm;
        //  the input should be presented
        const urlTest = 'http://facebook.com/';
        expect(urlFormat.test(urlTest)).toBe(true);
    });
});

describe('Testing Wrong url', () => {
    const url = "Wrong Input";    // wrong input
    test('It should return true', () => {
        const response = checkForName(url);
        expect(response).toBeDefined();
        expect(response).toBeFalsy();
    });
});  