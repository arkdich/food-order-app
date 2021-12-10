export default function calcDiscountPrice(price, discount) {
  if (typeof price !== 'number' || typeof discount !== 'number')
    throw new Error('Arguments must be of type number');

  return Math.round(price * (1 - discount / 100));
}
