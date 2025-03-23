
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hitmouse',
  appName: 'RemoteJobFinder',
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
    }
  }
};

export default config;
