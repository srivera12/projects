import React, { createContext, useState, useEffect } from 'react';

interface IsMobileContextInterface {
  isMobile: boolean;
  setIsMobile?: Function;
}

export const IsMobileContext = createContext<IsMobileContextInterface>({ isMobile: false });

type ContextProps = {
  children: React.ReactNode;
};

export function IsMobileProvider({ children }: ContextProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: 1366,
    height: 1024,
  });
  useEffect(() => {
    // const handleWindowResize = () => {
    //   setWindowSize({
    //     width: window.innerWidth,
    //     height: window.innerHeight,
    //   });
    // };
    // window.addEventListener('resize', handleWindowResize);
    // if (windowSize.width < 500 || windowSize.height < 800) {
    if (window.innerWidth < 500 || window.innerHeight < 800) {
      setIsMobile(true);
      console.log('is mobile');
    } else {
      setIsMobile(false);
      console.log('is not mobile');
    }
  }, []);
  return <IsMobileContext.Provider value={{ isMobile, setIsMobile }}>{children}</IsMobileContext.Provider>;
}
