
import React, { useState, useEffect } from 'react';
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

const Index = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState<JobFilters>({
    category: 'All',
    location: 'All Locations',
    searchTerm: '',
  });
  const isMobile = useIsMobile();

  useEffect(() => {
    const loadJobs = async () => {
      try {
        setLoading(true);
        const response = await fetchJobs();
        
        // Add unique IDs to jobs
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

  const filteredJobs = jobs.filter(job => {
    const matchesCategory = 
      filters.category === 'All' ||
      (filters.category === 'Remote' && job.remote) ||
      job.title.toLowerCase().includes(filters.category.toLowerCase());
    
    const matchesLocation =
      filters.location === 'All Locations' ||
      (filters.location === 'Remote Only' && job.remote) ||
      job.location.toLowerCase().includes(filters.location.split(' ')[0].toLowerCase());
    
    const matchesSearch =
      !filters.searchTerm ||
      job.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      job.company_name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(filters.searchTerm.toLowerCase());
    
    return matchesCategory && matchesLocation && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          </div>
          
          <div className="container px-4 sm:px-6 relative z-10">
            <AnimatedContainer className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-balance text-shadow">
                Your Career Journey Starts Here
              </h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
                Discover opportunities that align with your skills and aspirations. We curate the best jobs from top companies around the world.
              </p>
            </AnimatedContainer>
            
            <AnimatedContainer delay={100} className="mt-8 md:mt-12">
              <SearchBar 
                value={filters.searchTerm}
                onChange={(value) => setFilters(prev => ({ ...prev, searchTerm: value }))}
                className="max-w-3xl"
              />
            </AnimatedContainer>
          </div>
        </section>
        
        {/* Filter section */}
        <section className="py-8">
          <div className="container px-4 sm:px-6">
            <FilterPanel 
              selectedCategory={filters.category}
              selectedLocation={filters.location}
              onCategoryChange={(category) => setFilters(prev => ({ ...prev, category }))}
              onLocationChange={(location) => setFilters(prev => ({ ...prev, location }))}
            />
          </div>
        </section>
        
        {/* Jobs list section */}
        <section className="py-8 md:py-12">
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
                  className="mt-4 text-primary hover:underline"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
      
      <footer className="py-6 md:py-8 border-t border-border/40">
        <div className="container px-4 sm:px-6">
          <p className="text-sm text-center text-muted-foreground">
            Job Safari — Find your next career opportunity with ease.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
