
export interface Job {
  id?: string;
  title: string;
  company_name: string;
  location: string;
  created_at: number;
  url: string;
  remote: boolean;
}

export interface JobsResponse {
  data: Job[];
}

export type JobCategory = 'All' | 'Technology' | 'Healthcare' | 'Finance' | 'Education' | 'Remote';
export type JobLocation = 'All Locations' | 'Remote Only' | 'United States' | 'Europe' | 'Asia' | 'Australia';

export interface JobFilters {
  category: JobCategory;
  location: JobLocation;
  searchTerm: string;
}
