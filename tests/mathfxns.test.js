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

  describe('isPrime function', () => {
    it('string number should not be valued', () => {
      function isPrime(num) {
        if (num > 0) {
          for (var i = 2; i < num; i++) {
            if (num % i === 0) {
              return num; // if we wanted to not accept strings and compared them to numbers. We should return the num and compare to string. 
            }
          }
          return num != 1;
        } else {
          throw new Error('Number is not positive!');
        }
      }

      // Set up 
      const expected = "9";

      // Excerise 
      const result = isPrime(9)

      // Verify
      assert.equal(result, expected)
    });
  });

  describe('Multiply by two number', () => {
    it('should return the multiplication of two numbers', () => {
      const math = new MathFxns();
      const num1 = 2;
      const num2 = 2;
      const sum = 4;
      const actualResult = math.multiplyTwoNums(num1, num2)
      assert.equal(actualResult, sum);
    });
  });
});
