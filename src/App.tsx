
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
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

const queryClient = new QueryClient();

// Main app content component that handles routing
const AppContent = () => {
  const location = useLocation();
  const [showAds, setShowAds] = useState(false);
  
  useEffect(() => {
    // Initialize AdMob for native platforms
    const setupAds = async () => {
      if (Capacitor.isNativePlatform()) {
        await initializeAdMob();
        setShowAds(true);
        
        // Only show app open ad if not on privacy policy
        if (!location.pathname.includes('privacy-policy')) {
          await showAppOpenAd();
        }
      }
    };
    
    setupAds();
  }, [location.pathname]);

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
      <BottomNavigation />
      {showAds && <BannerAd />}
    </div>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [appReady, setAppReady] = useState(false);

  // Check if the URL contains privacy-policy to skip splash screen
  const shouldSkipSplash = window.location.pathname.includes('privacy-policy');

  useEffect(() => {
    // Check for system dark mode preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
    
    // Skip splash screen if going directly to privacy policy
    if (shouldSkipSplash) {
      setShowSplash(false);
      setAppReady(true);
    }
  }, [shouldSkipSplash]);

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
        {showSplash && !shouldSkipSplash ? (
          <SplashScreen onFinish={handleSplashComplete} />
        ) : (
          <BrowserRouter>
            <AppContent />
            <GDPRConsent />
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
