import React, { useState, useEffect, useCallback } from 'react';
import Header from '@/components/Header';
import SearchBar from '@/components/SearchBar';
import FilterPanel from '@/components/FilterPanel';
import JobCard from '@/components/JobCard';
import AnimatedContainer from '@/components/AnimatedContainer';
import { fetchJobs } from '@/utils/api';
import { Job, JobCategory, JobLocation, JobFilters } from '@/utils/types';
import { toast } from 'sonner';
import { useIsMobile } from '@/hooks/use-mobile';
import { Loader2Icon } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Index = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<JobFilters>({
    category: 'All',
    location: 'All Locations',
    searchTerm: '',
  });
  const isMobile = useIsMobile();
  const location = useLocation();

  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true);
        const response = await fetchJobs();
        
        const jobsWithIds = response.data.map((job, index) => ({
          ...job,
          id: `job-${index}`,
        }));
        
        setJobs(jobsWithIds);
      } catch (error) {
        console.error('Failed to load jobs:', error);
        toast.error('Failed to load jobs. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadJobs();
  }, []);

  useEffect(() => {
    if (location.state && location.state.searchTerm) {
      setFilters(prev => ({ ...prev, searchTerm: location.state.searchTerm }));
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  const saveSearchToHistory = useCallback((term: string) => {
    if (!term.trim()) return;
    
    try {
      const savedHistory = localStorage.getItem('searchHistory') || '[]';
      const history = JSON.parse(savedHistory) as string[];
      
      const filteredHistory = history.filter(item => item !== term);
      filteredHistory.unshift(term);
      
      const limitedHistory = filteredHistory.slice(0, 20);
      
      localStorage.setItem('searchHistory', JSON.stringify(limitedHistory));
    } catch (error) {
      console.error('Failed to save search history:', error);
    }
  }, []);

  const handleSearchChange = (value: string) => {
    setFilters(prev => ({ ...prev, searchTerm: value }));
    if (value.trim()) {
      saveSearchToHistory(value);
    }
  };

  const filteredJobs = jobs.filter(job => {
    const matchesCategory = 
      filters.category === 'All' ||
      (filters.category === 'Remote' && job.remote) ||
      (job.title && job.title.toLowerCase().includes(filters.category.toLowerCase()));
    
    const matchesLocation =
      filters.location === 'All Locations' ||
      (filters.location === 'Remote Only' && job.remote) ||
      (job.location && job.location.toLowerCase().includes(filters.location.split(' ')[0].toLowerCase()));
    
    const searchLower = filters.searchTerm.toLowerCase();
    const matchesSearch =
      !filters.searchTerm ||
      (job.title && job.title.toLowerCase().includes(searchLower)) ||
      (job.company_name && job.company_name.toLowerCase().includes(searchLower)) ||
      (job.location && job.location.toLowerCase().includes(searchLower));
    
    return matchesCategory && matchesLocation && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-background dark:bg-[#121212] pb-16">
      <Header 
        searchValue={filters.searchTerm}
        onSearchChange={handleSearchChange}
      />
      
      <main className="flex-1">
        <section className="relative py-8 md:py-12 overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 dark:from-primary/10 dark:to-accent/10"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          </div>
          
          <div className="container px-4 sm:px-6 relative z-10">
            <AnimatedContainer className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance text-shadow dark:text-white">
                International Remote Jobs
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty dark:text-muted-foreground">
                Find remote opportunities from US, India, and worldwide. We curate the best remote jobs from top companies around the globe.
              </p>
            </AnimatedContainer>
          </div>
        </section>
        
        <section className="py-4">
          <div className="container px-4 sm:px-6">
            <FilterPanel 
              selectedCategory={filters.category}
              selectedLocation={filters.location}
              onCategoryChange={(category) => setFilters(prev => ({ ...prev, category }))}
              onLocationChange={(location) => setFilters(prev => ({ ...prev, location }))}
            />
          </div>
        </section>
        
        <section className="py-6 md:py-8">
          <div className="container px-4 sm:px-6">
            {loading ? (
              <div className="flex flex-col items-center justify-center py-16">
                <Loader2Icon className="w-8 h-8 text-primary animate-spin" />
                <p className="mt-4 text-muted-foreground">Loading jobs...</p>
              </div>
            ) : filteredJobs.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {filteredJobs.map((job, index) => (
                  <JobCard 
                    key={job.id} 
                    job={job} 
                    index={index}
                  />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-16">
                <p className="text-muted-foreground">No jobs found matching your criteria.</p>
                <button 
                  onClick={() => setFilters({ category: 'All', location: 'All Locations', searchTerm: '' })}
                  className="mt-4 text-primary hover:underline android-btn px-4 py-2 bg-primary/10 dark:bg-primary/20"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
