
import { JobsResponse } from './types';

const API_BASE_URL = 'https://www.arbeitnow.com/api/job-board-api';

export async function fetchJobs(): Promise<JobsResponse> {
  try {
    const response = await fetch(API_BASE_URL);
    
    if (!response.ok) {
      throw new Error(`Failed to fetch jobs: ${response.status}`);
    }
    
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching jobs:', error);
    throw new Error('Failed to fetch jobs. Please try again.');
  }
}
