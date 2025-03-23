
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { setupGDPRConsent } from '@/services/AdMobService';

const GDPRConsent = () => {
  const [open, setOpen] = useState(false);
  
  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem('gdpr_consent');
    
    // If no consent record is found in EU region, show the dialog
    if (!hasConsent) {
      // You might want to add additional logic to check if user is in EU
      setOpen(true);
    }
  }, []);
  
  const handleAccept = () => {
    localStorage.setItem('gdpr_consent', 'true');
    setupGDPRConsent();
    setOpen(false);
  };
  
  const handleReject = () => {
    localStorage.setItem('gdpr_consent', 'false');
    setOpen(false);
    // In a real implementation, you would disable personalized ads here
  };
  
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Privacy Consent</DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="max-h-[60vh] mt-4">
          <div className="space-y-4 p-1">
            <p>We use cookies and similar technologies to deliver our services and to show you relevant ads.</p>
            
            <p>Our advertising partners (including Google AdMob and AppLovin) may collect and process data about your device and app usage to deliver personalized advertising.</p>
            
            <p>By consenting, you allow us to enhance your experience and provide you with personalized content and ads. You can withdraw consent at any time in the app settings.</p>
            
            <p>For more information, please review our full Privacy Policy.</p>
          </div>
        </ScrollArea>
        
        <DialogFooter className="flex-col sm:flex-row sm:justify-between gap-2 mt-4">
          <Button variant="secondary" onClick={handleReject}>
            Reject All
          </Button>
          <Button onClick={handleAccept}>
            Accept All
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default GDPRConsent;
