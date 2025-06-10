const { calculateTDEE } = require('../tdeeCalculator');

test('calculateTDEE with 180 cm, 70 kg, male, moderatelyActive', () => {
  const result = calculateTDEE(180, 70, 'male', 'moderatelyActive');
  expect(result).toBeCloseTo(2642.75, 2);
});
