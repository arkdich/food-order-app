import { useEffect } from 'react';

export default function useDisableScroll() {
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => (document.body.style.overflow = 'auto');
  }, []);
}
