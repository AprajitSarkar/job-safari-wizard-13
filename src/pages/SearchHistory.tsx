
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import { SearchIcon, XIcon, TrashIcon } from 'lucide-react';
import AnimatedContainer from '@/components/AnimatedContainer';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const SearchHistory = () => {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);
  const navigate = useNavigate();

  // Load search history from localStorage on component mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory');
    if (savedHistory) {
      try {
        setSearchHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Failed to parse search history:', error);
        setSearchHistory([]);
      }
    }
  }, []);

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.setItem('searchHistory', JSON.stringify([]));
    toast.success('Search history cleared');
  };

  const removeHistoryItem = (index: number) => {
    const newHistory = [...searchHistory];
    newHistory.splice(index, 1);
    setSearchHistory(newHistory);
    localStorage.setItem('searchHistory', JSON.stringify(newHistory));
  };

  const handleSearchClick = (term: string) => {
    // Navigate to main page with search term
    navigate('/', { state: { searchTerm: term } });
  };

  return (
    <div className="min-h-screen pb-24 bg-background dark:bg-[#121212]">
      <Header />
      
      <main className="container px-4 py-6 sm:px-6">
        <AnimatedContainer>
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Search History</h1>
            
            {searchHistory.length > 0 && (
              <button
                onClick={clearHistory}
                className="flex items-center px-3 py-1.5 text-xs rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80"
              >
                <TrashIcon className="w-3.5 h-3.5 mr-1" />
                Clear All
              </button>
            )}
          </div>
          
          {searchHistory.length > 0 ? (
            <div className="space-y-2">
              {searchHistory.map((search, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 rounded-lg bg-card android-elevation-1"
                >
                  <div 
                    className="flex items-center flex-1"
                    onClick={() => handleSearchClick(search)}
                  >
                    <SearchIcon className="w-4 h-4 mr-3 text-muted-foreground" />
                    <span className="text-sm">{search}</span>
                  </div>
                  <button
                    onClick={() => removeHistoryItem(index)}
                    className="p-1 rounded-full hover:bg-secondary/60"
                    aria-label="Remove from history"
                  >
                    <XIcon className="w-4 h-4 text-muted-foreground" />
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-8 text-center">
              <div className="p-3 mb-4 rounded-full bg-secondary/80">
                <SearchIcon className="w-6 h-6 text-muted-foreground" />
              </div>
              <h2 className="mb-2 text-lg font-medium">No search history</h2>
              <p className="text-sm text-muted-foreground">
                Your search history will appear here once you start searching for jobs.
              </p>
            </div>
          )}
        </AnimatedContainer>
      </main>
    </div>
  );
};

export default SearchHistory;
