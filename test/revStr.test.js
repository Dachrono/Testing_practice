const reverseString = require('../revStr');

it('String rev test 1', () => {
    const str = 'otto';
    const rev = reverseString(str);
    expect(rev).toMatch(/otto/);
})

it('String rev test 2', () => {
    const str = 'radar';
    const rev = reverseString(str);
    expect(rev).toMatch(/radar/);
})