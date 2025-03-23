
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Settings from "./pages/Settings";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ContactUs from "./pages/ContactUs";
import SearchHistory from "./pages/SearchHistory";
import BottomNavigation from "./components/BottomNavigation";
import SplashScreen from "./components/SplashScreen";
import GDPRConsent from "./components/GDPRConsent";
import BannerAd from "./components/BannerAd";
import { initializeAdMob, showAppOpenAd } from "./services/AdMobService";
import { Capacitor } from "@capacitor/core";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [appReady, setAppReady] = useState(false);
  const [showAds, setShowAds] = useState(false);

  useEffect(() => {
    // Check for system dark mode preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
    
    // Initialize AdMob when the app starts
    const setupAds = async () => {
      if (Capacitor.isNativePlatform()) {
        await initializeAdMob();
        setShowAds(true);
      }
    };
    
    setupAds();
  }, []);

  // Handle splash screen completion
  const handleSplashComplete = async () => {
    setAppReady(true);
    setShowSplash(false);
    
    // Show app open ad when splash screen completes
    if (showAds) {
      await showAppOpenAd();
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {showSplash ? (
          <SplashScreen onFinish={handleSplashComplete} />
        ) : (
          <BrowserRouter>
            <div className="pb-16"> {/* Add padding to account for bottom navigation */}
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/search-history" element={<SearchHistory />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <BottomNavigation />
              {showAds && <BannerAd />}
            </div>
            <GDPRConsent />
          </BrowserRouter>
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
