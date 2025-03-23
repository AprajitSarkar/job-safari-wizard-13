
import React, { useEffect } from 'react';
import { showBannerAd, hideBannerAd } from '@/services/AdMobService';

const BannerAd: React.FC = () => {
  useEffect(() => {
    // Show the banner ad when the component mounts
    showBannerAd();
    
    // Hide the banner ad when the component unmounts
    return () => {
      hideBannerAd();
    };
  }, []);
  
  return (
    // This component doesn't render anything visible
    // The actual ad is rendered by the AdMob plugin in a native view
    null
  );
};

export default BannerAd;
