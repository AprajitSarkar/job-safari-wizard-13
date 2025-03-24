
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.multiple.cozmo',
  appName: 'Global Remote Jobs Finder',
  webDir: 'dist',
  server: {
    url: 'https://7e26981a-d013-46a9-8b84-6acca36c4a79.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      androidxCore: '1.10.1',
      androidxAppcompat: '1.6.1',
      androidxWebkit: '1.6.1'
    }
  },
  plugins: {
    CapacitorCookies: {
      enabled: true
    },
    WebView: {
      allowNavigation: ['*']
    },
    AdMob: {
      androidAppId: 'ca-app-pub-3940256099942544~3347511713', // Test App ID
      iosAppId: 'ca-app-pub-3940256099942544~1458002511', // Test App ID
      publisherDataConsentPersonalizedAds: true
    }
  }
};

export default config;
