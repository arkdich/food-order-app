import breakpoints from '@utils/variables/breakpoints';
import { useEffect, useState } from 'react';
import useMatchMedia from './useMatchMedia';

export default function useIsTablet() {
  const media = useMatchMedia(
    `only screen and (max-width: ${breakpoints.tablet})`
  );

  const [isTablet, setIsTablet] = useState(media.matches);

  useEffect(() => {
    const callback = () => setIsTablet(media.matches);

    media.addEventListener('change', callback);

    return () => media.removeEventListener('change', callback);
  }, [media]);

  return isTablet;
}
