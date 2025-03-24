
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PrivacyPolicyStatic from "./pages/PrivacyPolicyStatic";
import ContactUs from "./pages/ContactUs";
import SearchHistory from "./pages/SearchHistory";
import BottomNavigation from "./components/BottomNavigation";
import SplashScreen from "./components/SplashScreen";
import GDPRConsent from "./components/GDPRConsent";
import BannerAd from "./components/BannerAd";
import { initializeAdMob, showAppOpenAd } from "./services/AdMobService";
import { Capacitor } from "@capacitor/core";

// Create a new AppDownload component for web users
const AppDownload = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="text-center max-w-md bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 android-elevation-3">
        <h1 className="text-2xl font-bold mb-4">Global Remote Jobs Finder</h1>
        <p className="mb-6 text-gray-600 dark:text-gray-300">This application is only available as a mobile app. Please download it from the Google Play Store.</p>
        
        <a 
          href="https://play.google.com/store/apps/details?id=com.multiple.cozmo" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
        >
          Download from Google Play
        </a>
        
        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
          <a href="/privacy-policy-static" className="text-blue-500 hover:underline">
            View Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
};

const queryClient = new QueryClient();

// Main app content component that handles routing
const AppContent = () => {
  const location = useLocation();
  const [showAds, setShowAds] = useState(false);
  const isNative = Capacitor.isNativePlatform();
  const isPrivacyPolicyRoute = location.pathname === '/privacy-policy-static';
  
  // Only allow web access to privacy policy page
  if (!isNative && !isPrivacyPolicyRoute) {
    return <AppDownload />;
  }
  
  useEffect(() => {
    // Initialize AdMob for native platforms
    const setupAds = async () => {
      if (isNative) {
        await initializeAdMob();
        setShowAds(true);
        
        // Only show app open ad if not on privacy policy
        if (!location.pathname.includes('privacy-policy')) {
          await showAppOpenAd();
        }
      }
    };
    
    setupAds();
  }, [location.pathname, isNative]);

  return (
    <div className="pb-16"> {/* Add padding to account for bottom navigation */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy-policy-static" element={<PrivacyPolicyStatic />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/search-history" element={<SearchHistory />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {isNative && <BottomNavigation />}
      {showAds && <BannerAd />}
    </div>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [appReady, setAppReady] = useState(false);
  const isNative = Capacitor.isNativePlatform();

  // Check if the URL contains privacy-policy to skip splash screen
  const shouldSkipSplash = window.location.pathname.includes('privacy-policy');

  useEffect(() => {
    // Check for system dark mode preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
    
    // Skip splash screen if going directly to privacy policy or on web
    if (shouldSkipSplash || !isNative) {
      setShowSplash(false);
      setAppReady(true);
    }
  }, [shouldSkipSplash, isNative]);

  // Handle splash screen completion
  const handleSplashComplete = async () => {
    setAppReady(true);
    setShowSplash(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showSplash && !shouldSkipSplash && isNative ? (
          <SplashScreen onFinish={handleSplashComplete} />
        ) : (
          <BrowserRouter>
            <AppContent />
            {isNative && <GDPRConsent />}
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
