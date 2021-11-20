import { useRef } from 'react';

export default function useMatchMedia(query) {
  return useRef(window.matchMedia(query)).current;
}
