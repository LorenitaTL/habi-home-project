import { useLayoutEffect, useState } from 'react';

export function useIsMobile() {
  const [size, setSize] = useState(false);
  useLayoutEffect(() => {
    function updateSize() {
      const is_mobile = window.innerWidth < 900;
      setSize(is_mobile);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}
