const test = require('node:test');
const assert = require('node:assert/strict');
const { calculateTDEE } = require('../tdeeCalculator');

test('calculateTDEE with 180 cm, 70 kg, male, moderatelyActive', () => {
  const result = calculateTDEE(180, 70, 'male', 'moderatelyActive');
  assert.ok(Math.abs(result - 2642.75) < 0.01);
});
