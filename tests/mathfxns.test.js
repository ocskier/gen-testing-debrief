// const { assert, expect } = require('chai');
const { describe, it } = require('mocha');
const assert = require('assert');
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
  describe('subtractTwoNums', () => {
    it('should return the subtraction of two numbers', () => {
      const math = new MathFxns();
      const num1 = 5;
      const num2 = 11;
      const subtraction = -6;
      assert.ok(math.subtractTwoNums(num1, num2) === subtraction);
    });
  });
  describe('multiplyTwoNums', () => {
    it('should return the multipliaction of two numbers', () => {
      const math = new MathFxns();
      const num1 = 5;
      const num2 = 11;
      const result = 55;
      assert.ok(math.multiplyTwoNums(num1, num2) === result);
    });
  });
  describe('divideTwoNums', () => {
    it('should return the division of two numbers', () => {
      const math = new MathFxns();
      const num1 = 55;
      const num2 = 11;
      const result = 5;
      assert.ok(math.divideTwoNums(num1, num2) === result);
    });
  });
  describe('addAllNums', () => {
    it('should return the addition of all numbers', () => {
      const math = new MathFxns();
      const numArray = [1, 2, 3, 4, 5, 6];
      const result = 21;
      assert.ok(math.addAllNums(...numArray) === result);
    });
    it('should be a number', () => {
      const math = new MathFxns();
      const numArray = [1, 2, 3, 4, 5, 6];
      const result = 'number';
      assert.ok(typeof math.addAllNums(...numArray) === result);
    })
  });
  describe('isPrime', () => {
    it('should return if it is a prime number or not', () => {
      const math = new MathFxns();
      const num = 7;
      const result = true;
      assert.strictEqual(math.isPrime(num), result);
    });
  });
  describe('factor', () => {
    it('should return an array of factors', () => {
      const math = new MathFxns();
      const num = 5;
      const result = [1, 5];
      assert.deepStrictEqual(math.factor(num), result);
    });
  });
});
