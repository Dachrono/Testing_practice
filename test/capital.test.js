const capital = require('../capital');

it('Capilalize first letter', () => {
    
    const str = 'microverse';
    const capitalStr = capital(str);

    expect(capitalStr).toMatch(/Microverse/);
})