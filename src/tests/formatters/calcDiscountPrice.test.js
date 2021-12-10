import calcPrice from '../../utils/formatters/calcDiscountPrice';

describe('Discount formatter', () => {
  describe('works', () => {
    test('with ints', () => {
      expect(calcPrice(100, 10)).toEqual(90);
    });

    test('with floats', () => {
      expect(calcPrice(100.1, 10.5)).toEqual(90);
    });
  });

  describe('throws', () => {
    test('with empty input', () => {
      expect(() => calcPrice()).toThrow();
    });

    test('with only first arg', () => {
      expect(() => calcPrice(100, null)).toThrow();
    });

    test('with only second arg', () => {
      expect(() => calcPrice(null, 10)).toThrow();
    });

    test('with non-number input', () => {
      expect(() => calcPrice('12', 2)).toThrow();
      expect(() => calcPrice('12', true)).toThrow();
    });
  });
});
