import { useEffect, useCallback, useState } from 'react';

export default function useWindowResize() {
  const getScreenWidth = useCallback(() => window.innerWidth, []);
  const [screenWidth, setScreenWidth] = useState(getScreenWidth());

  useEffect(() => {

    function handleScreenResize() {
      setScreenWidth(getScreenWidth());
    };

    window.addEventListener('resize', resizeController, false); // при монтировании компонента ставим слушатель на ресайз

    let resizeTimer;

    function resizeController() {
      if (!resizeTimer) {
        resizeTimer = setTimeout(() => {
          resizeTimer = null;
          handleScreenResize();
        }, 1000); // частота 1 кадр в секунду
      }
    };

    return () => window.removeEventListener('resize', handleScreenResize);  // убираем слушатель при размонтировании компонента
  }, [getScreenWidth]);

  return screenWidth;
}