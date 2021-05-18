const { assert, expect } = require('chai');
const { describe, it } = require('mocha');
const MathFxns = require('../mathfxns.js');

describe('math functions \n', () => {
  describe('addTwoNums', () => {
    it('should return the sum of two numbers', () => {
      const math = new MathFxns();
      const num1 = 5;
      const num2 = 11;
      const sum = 16;
      assert.ok(math.addTwoNums(num1, num2) === sum);
    });
  });
  // ...
  // add more tests here
  describe('subtractTwoNums', () => {
    it('should return the difference of two numbers', () => {
      const math = new MathFxns();
      const num1 = 16;
      const num2 = 5;
      const dif = 11;
      assert.ok(math.subtractTwoNums(num1, num2) === dif);
    })
  });
  describe('multiplyTwoNums', () => {
    it('should return the product of two numbers', () => {
      const math = new MathFxns();
      const num1 = 3;
      const num2 = 7;
      const pro = 21;
      assert.ok(math.multiplyTwoNums(num1, num2) === pro);
    })
  });
  describe('divideTwoNums', () => {
    it('should return the dividend of two numbers', () => {
      const math = new MathFxns();
      const num1 = 20;
      const num2 = 2;
      const div = 10;
      assert.ok(math.divideTwoNums(num1, num2) === div);
    });
  });
  describe('addAllNums', () => {
    it('should return the sum of all numbers', () => {
      const math = new MathFxns();
      const num1 = 20;
      const num2 = 2;
      const num3 = 6
      const sum = 28;
      assert.ok(math.addAllNums(num1, num2, num3) === sum);
    });
  });
 describe('isPrime', () => {
    it('determines whether a number is prime or not', () => {
      const math = new MathFxns();
      const num = 20;
      const result = false;
    
      assert.ok(math.isPrime(num) === result);
    });
  it('determines whether a number is prime or not', () => {
    const math = new MathFxns();
    const num = 7;
    const result = true;
  
    assert.ok(math.isPrime(num) === result);
  });
  it('determines whether a number is prime or not', () => {
    const math = new MathFxns();
    const num = -9;
    
    expect(() => math.isPrime(num)).to.throw(
      Error,
      'Number is not positive!'
    );
  }); 
});
   describe('factor', () => {
    it('should give all the factors of the given number', () => {
      const math = new MathFxns();
      const num = 5;
      const factors = [1,5];
      expect(math.factor(num)).to.have.same.members(factors);
    });
  });



});
