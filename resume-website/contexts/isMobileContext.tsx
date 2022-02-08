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
  useEffect(() => {
    const checkForMobile = () => {
      if (window.innerWidth < 750 || window.innerHeight < 750) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', checkForMobile);
    window.addEventListener('load', checkForMobile);
    checkForMobile();
  }, []);
  return <IsMobileContext.Provider value={{ isMobile, setIsMobile }}>{children}</IsMobileContext.Provider>;
}
