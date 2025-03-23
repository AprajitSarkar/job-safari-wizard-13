
import React from 'react';
import Header from '@/components/Header';
import { ChevronRightIcon, ShieldIcon, MailIcon, HistoryIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import AnimatedContainer from '@/components/AnimatedContainer';

const Settings = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pb-24 bg-background dark:bg-[#121212]">
      <Header />
      
      <main className="container px-4 py-6 sm:px-6">
        <AnimatedContainer>
          <h1 className="mb-6 text-2xl font-bold">Settings</h1>
          
          <div className="space-y-4">
            <div className="overflow-hidden rounded-xl bg-card android-elevation-1">
              <div 
                className="flex items-center justify-between p-4 cursor-pointer active:bg-muted/50"
                onClick={() => navigate('/search-history')}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-secondary/80 dark:bg-secondary/40">
                    <HistoryIcon className="w-5 h-5 text-foreground" />
                  </div>
                  <span>Search History</span>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
              </div>
              
              <div 
                className="flex items-center justify-between p-4 border-t cursor-pointer active:bg-muted/50 border-border/10"
                onClick={() => navigate('/privacy-policy')}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-secondary/80 dark:bg-secondary/40">
                    <ShieldIcon className="w-5 h-5 text-foreground" />
                  </div>
                  <span>Privacy Policy</span>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
              </div>
              
              <div 
                className="flex items-center justify-between p-4 border-t cursor-pointer active:bg-muted/50 border-border/10"
                onClick={() => navigate('/contact-us')}
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-secondary/80 dark:bg-secondary/40">
                    <MailIcon className="w-5 h-5 text-foreground" />
                  </div>
                  <span>Contact Us</span>
                </div>
                <ChevronRightIcon className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
            
            <div className="p-4 rounded-xl android-elevation-1 bg-card">
              <h2 className="mb-2 text-sm font-medium">App Information</h2>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Version: 1.0.0</p>
                <p>RemoteJobFinder helps you discover remote job opportunities worldwide</p>
              </div>
            </div>
          </div>
        </AnimatedContainer>
      </main>
    </div>
  );
};

export default Settings;
