const Calculator = require('../calc');

describe('add test', () => {
    it('Add 7 + 2', () => {
        const oper = new Calculator(7, 2);
        const addFun = oper.add();
        expect(addFun).toBe(9);
    })

    it('Add 15 + 40', () => {
        const oper = new Calculator(15, 40);
        const addFun = oper.add();
        expect(addFun).toBe(55);
    })

    it('Add 10 + 81', () => {
        const oper = new Calculator(10, 81);
        const addFun = oper.add();
        expect(addFun).toBe(91);
    })
})

describe('subtract test', () => {
    it('subtract 47 - 12', () => {
        const oper = new Calculator(47, 12);
        const subFun = oper.subtract();
        expect(subFun).toBe(35);
    })

    it('subtract 50 - 2', () => {
        const oper = new Calculator(50, 2);
        const subFun = oper.subtract();
        expect(subFun).toBe(48);
    })

    it('subtract 100 - 99', () => {
        const oper = new Calculator(100, 99);
        const subFun = oper.subtract();
        expect(subFun).toBe(1);
    })
})

describe('multiply test', () => {
    it('multiply 3 * 6', () => {
        const oper = new Calculator(3, 6);
        const mulFun = oper.multiply();
        expect(mulFun).toBe(18);
    })
    it('multiply 3 * 50', () => {
        const oper = new Calculator(3, 50);
        const mulFun = oper.multiply();
        expect(mulFun).toBe(150);
    })
    it('multiply 1 * 0', () => {
        const oper = new Calculator(1, 0);
        const mulFun = oper.multiply();
        expect(mulFun).toBe(0);
    })
})

describe('divide test', () => {

    it('divide 5 / 10', () => {
        const oper = new Calculator(5, 10);
        const divFun = oper.divide();
        expect(divFun).toBe(0.5);
    })
    it('divide 0 / 300', () => {
        const oper = new Calculator(0, 300);
        const divFun = oper.divide();
        expect(divFun).toBe(Infinity);
    })
    it('divide 10 / 2', () => {
        const oper = new Calculator(10, 2);
        const divFun = oper.divide();
        expect(divFun).toBe(5);
    })
})