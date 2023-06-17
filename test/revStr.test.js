const reverseString = require('../str');

it('String rev test 1', () => {
    const str = 'otto';
    const reverse = reverseString(str);
    expect(reverse).toMatch(/otto/);
})

it('String rev test 2', () => {
    const string = 'radar';

    const reverse = reverseString(string);

    expect(reverse).toMatch(/radar/);
})