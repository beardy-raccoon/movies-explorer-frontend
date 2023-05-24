import { useEffect, useCallback, useState } from 'react';

export default function useTrackScroll() {
  const getInitialvalue = useCallback(() => window.innerHeight, []);
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    function trackScroll() {
      setCurrentValue(window.scrollY);
    }
    window.addEventListener('scroll', trackScroll, false); // при монтировании компонента ставим слушатель на скролл
    return () => window.removeEventListener('scroll', trackScroll); // убираем слушатель при размонтировании компонента
  }, [getInitialvalue]);

  return currentValue > getInitialvalue() / 2;
}