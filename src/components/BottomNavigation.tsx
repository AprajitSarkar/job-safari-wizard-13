
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { HomeIcon, SearchIcon, SettingsIcon } from 'lucide-react';

const BottomNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around p-2 border-t bg-background/90 backdrop-blur-sm android-elevation-1 dark:bg-[#1A1F2C]/95 dark:border-white/5">
      <button
        onClick={() => navigate('/')}
        className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-full transition-colors ${
          currentPath === '/' ? 'text-primary' : 'text-muted-foreground'
        }`}
        aria-label="Home"
      >
        <HomeIcon className="w-5 h-5" />
        <span className="text-xs">Jobs</span>
      </button>
      
      <button
        onClick={() => navigate('/search-history')}
        className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-full transition-colors ${
          currentPath === '/search-history' ? 'text-primary' : 'text-muted-foreground'
        }`}
        aria-label="Search History"
      >
        <SearchIcon className="w-5 h-5" />
        <span className="text-xs">History</span>
      </button>
      
      <button
        onClick={() => navigate('/settings')}
        className={`flex flex-col items-center justify-center gap-1 px-4 py-2 rounded-full transition-colors ${
          currentPath.startsWith('/settings') ? 'text-primary' : 'text-muted-foreground'
        }`}
        aria-label="Settings"
      >
        <SettingsIcon className="w-5 h-5" />
        <span className="text-xs">Settings</span>
      </button>
    </div>
  );
};

export default BottomNavigation;
