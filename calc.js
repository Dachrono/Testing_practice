class Calculator {
    constructor(num1, num2) {
      this.val1 = num1;
      this.val2 = num2;
    }
  
    add() {
      return this.val1 + this.val2;
    }
  
    subtract() {
      return this.val1 - this.val2;
    }

    multiply() {
        return this.val1 * this.val2;
    }
  
    divide() {
      if (this.val1 !== 0){
       return this.val1 / this.val2;
      } else {
        return Infinity;
      }
    }
  }
  
  module.exports = Calculator