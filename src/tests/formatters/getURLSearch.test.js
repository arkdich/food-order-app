import getURLSearch from '@utils/formatters/getURLSearch';

describe('getURLSearch', () => {
  describe('works', () => {
    test('with correct input', () => {
      expect(
        getURLSearch(
          'http://localhost:3000/product?id=7gO5GkpRIXmbS6SLiZjs',
          'id'
        )
      ).toEqual('7gO5GkpRIXmbS6SLiZjs');
    });

    test('with bad url', () => {
      expect(getURLSearch('http://localhost:3000/product', 'id')).toEqual(null);
    });
  });

  describe('throws', () => {
    test('with non-string input', () => {
      expect(() => getURLSearch(22, 2)).toThrow();
      expect(() => getURLSearch('url', true)).toThrow();
      expect(() => getURLSearch(null, 2)).toThrow();
    });
  });
});
