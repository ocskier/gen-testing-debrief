const { assert, expect } = require('chai');
//const { describe, it } = require('mocha');
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
    it('should return the difference of two numbers', () => {
      //setup
      const math = new MathFxns();
      const num1 = 16;
      const num2 = 11;
      //excercise
      const diff = 5;
      //verify
      assert.ok(math.subtractTwoNums(num1, num2) === diff);
    });

  });
  describe('multiplyTwoNums', () => {
    it('should return product of two numbers', () => {
      //setup
      const math = new MathFxns();
      const num1 = 5;
      const num2 = 11;
      //excercise
      const multiply = 55;
      //verify
      assert.ok(math.multiplyTwoNums(num1, num2) === multiply);
    });

  });
  describe('divideTwoNums', () => {
    it('should return division of two numbers', () => {
      //setup
      const math = new MathFxns();
      const num1 = 50;
      const num2 = 5;
      //excercise
      const division = 10;
      //verify
      assert.ok(math.divideTwoNums(num1, num2) === division);
    });
  });
  describe('addAllNums', () => {
    it('should return sum of any numbers', () => {
      //setup
      const math = new MathFxns();
      const val = [2,4,5,8,9];
      //excercise
      sum = 28;
      //verify
      assert.ok(math.addAllNums(...val) === sum);
    });
  });
  
  // ...
  // add more tests here
});
