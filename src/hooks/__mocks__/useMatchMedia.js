export default function useMatchMedia() {
  return {
    mathes: false,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
  };
}
