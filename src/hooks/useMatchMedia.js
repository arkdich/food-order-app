import { useEffect, useState } from 'react';

export default function useMatchMedia(query) {
  const [media, setMedia] = useState(null);

  useEffect(() => {
    setMedia(window.matchMedia(query));
  }, [query]);

  return media;
}
