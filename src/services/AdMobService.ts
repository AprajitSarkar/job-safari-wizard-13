
import { Capacitor } from "@capacitor/core";

// AdMob IDs - you'll need to replace these with your actual AdMob IDs
// For testing, we're using Google's test IDs
const ADMOB_APP_ID = {
  android: 'ca-app-pub-3940256099942544~3347511713', // Test App ID
  ios: 'ca-app-pub-3940256099942544~1458002511', // Test App ID
};

const BANNER_AD_ID = {
  android: 'ca-app-pub-3940256099942544/6300978111', // Test Banner ID
  ios: 'ca-app-pub-3940256099942544/2934735716', // Test Banner ID
};

const APP_OPEN_AD_ID = {
  android: 'ca-app-pub-3940256099942544/3419835294', // Test App Open Ad ID
  ios: 'ca-app-pub-3940256099942544/5662855259', // Test App Open Ad ID
};

let admobPlugin: any = null;

export const initializeAdMob = async (): Promise<void> => {
  try {
    // Skip initialization if we're not running on a mobile device
    if (!Capacitor.isNativePlatform()) {
      console.log('AdMob initialization skipped: not running on a mobile device');
      return;
    }

    // Dynamically import the Capacitor AdMob plugin
    const { AdMob } = await import('@capacitor-community/admob');
    admobPlugin = AdMob;

    // Select the appropriate App ID based on platform
    const appId = Capacitor.getPlatform() === 'android' ? ADMOB_APP_ID.android : ADMOB_APP_ID.ios;
    
    // Initialize AdMob
    await AdMob.initialize({
      // Using only the supported options
      initializeForTesting: true, // Set to false for production
      testingDevices: ['EMULATOR'],
    });
    
    console.log('AdMob initialized successfully');
    
    // Set up consent form for GDPR if needed
    await setupGDPRConsent();
    
  } catch (error) {
    console.error('Error initializing AdMob:', error);
  }
};

export const setupGDPRConsent = async (): Promise<void> => {
  try {
    if (!admobPlugin) return;
    
    // Check consent status
    const consentInfo = await admobPlugin.requestConsentInfo();
    
    // If consent is required, show the form
    if (consentInfo.isConsentFormAvailable && 
        (consentInfo.status === 'REQUIRED' || consentInfo.status === 'UNKNOWN')) {
      await admobPlugin.showConsentForm();
      console.log('Consent form shown to user');
    }
  } catch (error) {
    console.error('Error setting up GDPR consent:', error);
  }
};

export const showBannerAd = async (): Promise<void> => {
  try {
    if (!admobPlugin) return;
    
    // Select the appropriate Banner ID based on platform
    const adId = Capacitor.getPlatform() === 'android' ? BANNER_AD_ID.android : BANNER_AD_ID.ios;
    
    // Configure and show the banner
    await admobPlugin.showBanner({
      adId,
      position: 'BOTTOM_CENTER',
      margin: 0
    });
    
    console.log('Banner ad shown successfully');
  } catch (error) {
    console.error('Error showing banner ad:', error);
  }
};

export const hideBannerAd = async (): Promise<void> => {
  try {
    if (!admobPlugin) return;
    await admobPlugin.hideBanner();
    console.log('Banner ad hidden');
  } catch (error) {
    console.error('Error hiding banner ad:', error);
  }
};

export const showAppOpenAd = async (): Promise<void> => {
  try {
    if (!admobPlugin) return;
    
    // Select the appropriate App Open Ad ID based on platform
    const adId = Capacitor.getPlatform() === 'android' ? APP_OPEN_AD_ID.android : APP_OPEN_AD_ID.ios;
    
    // Prepare and show the app open ad
    await admobPlugin.prepareAppOpenAd({
      adId
    });
    
    await admobPlugin.showAppOpenAd();
    console.log('App open ad shown successfully');
  } catch (error) {
    console.error('Error showing app open ad:', error);
  }
};
