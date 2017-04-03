/*global describe, it, before */

import chai from 'chai';
import FunctionThreshold from '../lib/FunctionThreshold.min.js';

chai.expect();

const expect = chai.expect;

let lib;
let sum = function (a, b) {
  return (a + b);
};

describe('Given an instance of my library with a limit of 5 calls in 10 seconds', () => {
  before(() => {
    lib = new FunctionThreshold(sum, 5, 10000);
  });
  describe('when I need the name', () => {
    it('should return the name', () => {
      expect(lib.name).to.be.equal('FunctionThreshold');
    });
  });
  describe('when I call my function', () => {
    it('should return the function\'s return value', () => {
      expect(lib.call(2, 4)).to.be.equal(6);
    });
  });
  describe('when I call my function six times in a loop', () => {
    it('should throw an error', () => {
      function loop() {
        for (let i = 0; i < 6; i++) {
          lib.call(i + 1, i);
        }
      }

      expect(loop).to.throw('Reached function call threshold of 5 calls in the last 10000 ms.');
    });
  });
});
