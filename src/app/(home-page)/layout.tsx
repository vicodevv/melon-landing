/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client';
import React from 'react';
import { useAtomValue } from 'jotai';
import { AssetsLoadedAtom } from '../store';
import Loader from '@/app/components/Loader';

interface WebsiteLayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<WebsiteLayoutProps> = ({ children }) => {
  const isAssetsLoaded = useAtomValue(AssetsLoadedAtom);

  React.useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      const locomotiveScroll = new LocomotiveScroll();
      locomotiveScroll;
    })();
  }, []);

  return (
    <div className="bg-white root-container">
      {!isAssetsLoaded.isAssetsLoaded && <Loader />}
      {isAssetsLoaded.isAssetsLoaded && <div className="">{children}</div>}
    </div>
  );
};

export default Layout;