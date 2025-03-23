
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.hitmouse',
  appName: 'RemoteJobFinder',
  webDir: 'dist',
  server: {
    url: 'https://490444aa-40e3-4bcf-8cc7-a9ee164dbef8.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  android: {
    buildOptions: {
      androidxCore: '1.10.1',
      androidxAppcompat: '1.6.1',
      androidxWebkit: '1.6.1'
    }
  }
};

export default config;
