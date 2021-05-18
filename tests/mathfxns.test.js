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
  it('should return a string', () => {
    const math = new MathFxns();
    const num1 = 5;
    const num2 = 11;
    const sum = 16;
    assert.ok(math.addTwoNums(num1, num2) == '16');
  });
  it('subtracts two numbers', () => {
    const math = new MathFxns();
    const num1 = 11;
    const num2 = 5;
    const subtract = 6;
    assert.ok(math.subtractTwoNums(num1, num2) === subtract);
  });
  it('multiplies two numbers', () => {
    const math = new MathFxns();
    const num1 = 11;
    const num2 = 5;
    const multiply = 55;
    assert.ok(math.multiplyTwoNums(num1, num2) === multiply);
  });
  it('divides two numbers', () => {
    const math = new MathFxns();
    const num1 = 10;
    const num2 = 5;
    const divide = 2;
    assert.ok(math.divideTwoNums(num1, num2) === divide);
  });
  it('Adds all numbers, returns sum', () => {
    const math = new MathFxns();
    const num1 = 10;
    const num2 = 5;
    const num3 = 5;
    const sum = 20;
    assert.ok(math.addAllNums(num1, num2, num3) === sum);
  });
  it('Check if a number is prime', () => {
    const math = new MathFxns();
    const num = 13;
    assert.ok(math.isPrime(num));
  });
  it('return an array of factors', () => {
    const math = new MathFxns();
    const num = 5;
    assert.ok(math.factor(num));
  });
});
