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
    it('should return the difference between two numbers', () => {
      const math = new MathFxns();
      const num1 = 5;
      const num2 = 20;
      const diff = -15;
      assert.ok(math.subtractTwoNums(num1, num2) === diff)
    });
  });

  // More tests
  describe('multiplyTwoNums', () => {
    it('should return the product of two numbers', () => {
      const math = new MathFxns();
      const num1 = 5;
      const num2 = 8;
      const product = 40;
      assert.ok(math.multiplyTwoNums(num1, num2) === product)
    });
  });


  // More tests
  describe('divideTwoNums', () => {
    it('should return the remainder of two numbers', () => {
      const math = new MathFxns();
      const num1 = 25;
      const num2 = 5;
      const quo = 5;
      assert.ok(math.divideTwoNums(num1, num2) === quo)
    });
  });

  // More tests
  describe('addAllNums', () => {
    it('should add all given numbers together and return the sum', () => {
      const math = new MathFxns();
      const num1 = 1;
      const num2 = 2;
      const num3 = 3;
      const sum = 6;
      assert.ok(math.addAllNums(num1, num2, num3) === sum)
    });
  });

  // More tests
  describe('isPrime', () => {
    it('should return if the given number is prime or not', () => {
      const math = new MathFxns();
      const num = 3;
      assert.ok(math.isPrime(num))
    });
  });


  // More tests
  describe('factor', () => {
    it('should return the factors of the given number', () => {
      const math = new MathFxns();
      const num = 16;
      const factorNum = math.factor(num);
      const factorArray = [1, 2, 4, 8, 16];
      assert.deepEqual(factorNum, factorArray)
    });
  });

});
