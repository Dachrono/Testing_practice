const stringLength = require('../str');

it('Str length test 1', () => {
    const str = 'Friend';
    const length = stringLength(str);
    expect(length).toBe(6);
})

it('Str length test 2', () => {
    const str = 'Pedro';
    const length = stringLength(str);
    expect(length).toBe(5);
})

it('Str length test 3', () => {
    const str = 'Lupe';
    const length = stringLength(str);
    expect(length).toBe(4);
})

it('String length conditions failed', () => {
    const str = 'Hello my friend'; 
    expect(() => stringLength(str)).toThrow();
})