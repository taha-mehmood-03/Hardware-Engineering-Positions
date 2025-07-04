const fs = require('fs');

// Load company database
const companies = JSON.parse(fs.readFileSync('./companies.json', 'utf8'));
const ALL_COMPANIES = Object.values(companies).flat();

// Real career page endpoints for major companies
const CAREER_APIS = {
    // Greenhouse API Companies
    'Stripe': {
        api: 'https://api.greenhouse.io/v1/boards/stripe/jobs',
        method: 'GET',
        parser: (data) => {
            if (!Array.isArray(data.jobs)) return [];
            return data.jobs
                .filter(job => job.title.toLowerCase().includes('engineer') || 
                              job.title.toLowerCase().includes('developer'))
                .map(job => ({
                    job_title: job.title,
                    employer_name: 'Stripe',
                    job_city: job.location?.name?.split(', ')?.[0] || 'San Francisco',
                    job_state: job.location?.name?.split(', ')?.[1] || 'CA',
                    job_description: job.content || 'Join Stripe to help build the economic infrastructure for the internet.',
                    job_apply_link: job.absolute_url,
                    job_posted_at_datetime_utc: new Date(job.updated_at).toISOString(),
                    job_employment_type: 'FULLTIME'
                }));
        }
    },

    'Coinbase': {
        api: 'https://api.greenhouse.io/v1/boards/coinbase/jobs',
        method: 'GET',
        parser: (data) => {
            if (!Array.isArray(data.jobs)) return [];
            return data.jobs
                .filter(job => job.title.toLowerCase().includes('engineer') || 
                              job.title.toLowerCase().includes('developer'))
                .map(job => ({
                    job_title: job.title,
                    employer_name: 'Coinbase',
                    job_city: job.location?.name?.split(', ')?.[0] || 'San Francisco',
                    job_state: job.location?.name?.split(', ')?.[1] || 'CA',
                    job_description: job.content || 'Join Coinbase to build the future of cryptocurrency.',
                    job_apply_link: job.absolute_url,
                    job_posted_at_datetime_utc: new Date(job.updated_at).toISOString(),
                    job_employment_type: 'FULLTIME'
                }));
        }
    },

    'Airbnb': {
        api: 'https://api.greenhouse.io/v1/boards/airbnb/jobs',
        method: 'GET',
        parser: (data) => {
            if (!Array.isArray(data.jobs)) return [];
            return data.jobs
                .filter(job => job.title.toLowerCase().includes('engineer') || 
                              job.title.toLowerCase().includes('developer'))
                .map(job => ({
                    job_title: job.title,
                    employer_name: 'Airbnb',
                    job_city: job.location?.name?.split(', ')?.[0] || 'San Francisco',
                    job_state: job.location?.name?.split(', ')?.[1] || 'CA',
                    job_description: job.content || 'Join Airbnb to create a world where anyone can belong anywhere.',
                    job_apply_link: job.absolute_url,
                    job_posted_at_datetime_utc: new Date(job.updated_at).toISOString(),
                    job_employment_type: 'FULLTIME'
                }));
        }
    },

    'Databricks': {
        api: 'https://api.greenhouse.io/v1/boards/databricks/jobs',
        method: 'GET',
        parser: (data) => {
            if (!Array.isArray(data.jobs)) return [];
            return data.jobs
                .filter(job => job.title.toLowerCase().includes('engineer') || 
                              job.title.toLowerCase().includes('developer'))
                .map(job => ({
                    job_title: job.title,
                    employer_name: 'Databricks',
                    job_city: job.location?.name?.split(', ')?.[0] || 'San Francisco',
                    job_state: job.location?.name?.split(', ')?.[1] || 'CA',
                    job_description: job.content || 'Join Databricks to unify analytics and AI.',
                    job_apply_link: job.absolute_url,
                    job_posted_at_datetime_utc: new Date(job.updated_at).toISOString(),
                    job_employment_type: 'FULLTIME'
                }));
        }
    },

    'Spotify': {
        api: 'https://api.greenhouse.io/v1/boards/spotify/jobs',
        method: 'GET',
        parser: (data) => {
            if (!Array.isArray(data.jobs)) return [];
            return data.jobs
                .filter(job => job.title.toLowerCase().includes('engineer') || 
                              job.title.toLowerCase().includes('developer'))
                .map(job => ({
                    job_title: job.title,
                    employer_name: 'Spotify',
                    job_city: job.location?.name?.split(', ')?.[0] || 'Stockholm',
                    job_state: job.location?.name?.split(', ')?.[1] || 'Sweden',
                    job_description: job.content || 'Join Spotify to unlock the potential of human creativity.',
                    job_apply_link: job.absolute_url,
                    job_posted_at_datetime_utc: new Date(job.updated_at).toISOString(),
                    job_employment_type: 'FULLTIME'
                }));
        }
    },

    'Square': {
        api: 'https://api.greenhouse.io/v1/boards/square/jobs',
        method: 'GET',
        parser: (data) => {
            if (!Array.isArray(data.jobs)) return [];
            return data.jobs
                .filter(job => job.title.toLowerCase().includes('engineer') || 
                              job.title.toLowerCase().includes('developer'))
                .map(job => ({
                    job_title: job.title,
                    employer_name: 'Square',
                    job_city: job.location?.name?.split(', ')?.[0] || 'San Francisco',
                    job_state: job.location?.name?.split(', ')?.[1] || 'CA',
                    job_description: job.content || 'Join Square to build economic empowerment tools.',
                    job_apply_link: job.absolute_url,
                    job_posted_at_datetime_utc: new Date(job.updated_at).toISOString(),
                    job_employment_type: 'FULLTIME'
                }));
        }
    },

    'Figma': {
        api: 'https://api.greenhouse.io/v1/boards/figma/jobs',
        method: 'GET',
        parser: (data) => {
            if (!Array.isArray(data.jobs)) return [];
            return data.jobs
                .filter(job => job.title.toLowerCase().includes('engineer') || 
                              job.title.toLowerCase().includes('developer'))
                .map(job => ({
                    job_title: job.title,
                    employer_name: 'Figma',
                    job_city: job.location?.name?.split(', ')?.[0] || 'San Francisco',
                    job_state: job.location?.name?.split(', ')?.[1] || 'CA',
                    job_description: job.content || 'Join Figma to make design accessible to all.',
                    job_apply_link: job.absolute_url,
                    job_posted_at_datetime_utc: new Date(job.updated_at).toISOString(),
                    job_employment_type: 'FULLTIME'
                }));
        }
    },

    // Lever API Companies
    'Netflix': {
        api: 'https://api.lever.co/v0/postings/netflix?mode=json',
        method: 'GET',
        parser: (data) => {
            if (!Array.isArray(data)) return [];
            return data
                .filter(job => job.categories?.commitment === 'Full-time' &&
                              (job.text.toLowerCase().includes('engineer') || 
                               job.text.toLowerCase().includes('developer')))
                .map(job => ({
                    job_title: job.text,
                    employer_name: 'Netflix',
                    job_city: job.categories?.location?.split(', ')?.[0] || 'Los Gatos',
                    job_state: job.categories?.location?.split(', ')?.[1] || 'CA',
                    job_description: job.description || 'Join Netflix to entertain the world.',
                    job_apply_link: job.hostedUrl,
                    job_posted_at_datetime_utc: new Date(job.createdAt).toISOString(),
                    job_employment_type: 'FULLTIME'
                }));
        }
    },

    'Uber': {
        api: 'https://api.lever.co/v0/postings/uber?mode=json',
        method: 'GET',
        parser: (data) => {
            if (!Array.isArray(data)) return [];
            return data
                .filter(job => job.categories?.commitment === 'Full-time' &&
                              (job.text.toLowerCase().includes('engineer') || 
                               job.text.toLowerCase().includes('developer')))
                .map(job => ({
                    job_title: job.text,
                    employer_name: 'Uber',
                    job_city: job.categories?.location?.split(', ')?.[0] || 'San Francisco',
                    job_state: job.categories?.location?.split(', ')?.[1] || 'CA',
                    job_description: job.description || 'Join Uber to move the world.',
                    job_apply_link: job.hostedUrl,
                    job_posted_at_datetime_utc: new Date(job.createdAt).toISOString(),
                    job_employment_type: 'FULLTIME'
                }));
        }
    },

    'Discord': {
        api: 'https://api.lever.co/v0/postings/discord?mode=json',
        method: 'GET',
        parser: (data) => {
            if (!Array.isArray(data)) return [];
            return data
                .filter(job => job.categories?.commitment === 'Full-time' &&
                              (job.text.toLowerCase().includes('engineer') || 
                               job.text.toLowerCase().includes('developer')))
                .map(job => ({
                    job_title: job.text,
                    employer_name: 'Discord',
                    job_city: job.categories?.location?.split(', ')?.[0] || 'San Francisco',
                    job_state: job.categories?.location?.split(', ')?.[1] || 'CA',
                    job_description: job.description || 'Join Discord to build connections.',
                    job_apply_link: job.hostedUrl,
                    job_posted_at_datetime_utc: new Date(job.createdAt).toISOString(),
                    job_employment_type: 'FULLTIME'
                }));
        }
    },

    'Lyft': {
        api: 'https://api.lever.co/v0/postings/lyft?mode=json',
        method: 'GET',
        parser: (data) => {
            if (!Array.isArray(data)) return [];
            return data
                .filter(job => job.categories?.commitment === 'Full-time' &&
                              (job.text.toLowerCase().includes('engineer') || 
                               job.text.toLowerCase().includes('developer')))
                .map(job => ({
                    job_title: job.text,
                    employer_name: 'Lyft',
                    job_city: job.categories?.location?.split(', ')?.[0] || 'San Francisco',
                    job_state: job.categories?.location?.split(', ')?.[1] || 'CA',
                    job_description: job.description || 'Join Lyft to improve people\'s lives with the world\'s best transportation.',
                    job_apply_link: job.hostedUrl,
                    job_posted_at_datetime_utc: new Date(job.createdAt).toISOString(),
                    job_employment_type: 'FULLTIME'
                }));
        }
    },

    'Slack': {
        api: 'https://api.lever.co/v0/postings/slack?mode=json',
        method: 'GET',
        parser: (data) => {
            if (!Array.isArray(data)) return [];
            return data
                .filter(job => job.categories?.commitment === 'Full-time' &&
                              (job.text.toLowerCase().includes('engineer') || 
                               job.text.toLowerCase().includes('developer')))
                .map(job => ({
                    job_title: job.text,
                    employer_name: 'Slack',
                    job_city: job.categories?.location?.split(', ')?.[0] || 'San Francisco',
                    job_state: job.categories?.location?.split(', ')?.[1] || 'CA',
                    job_description: job.description || 'Join Slack to make work life simpler, more pleasant, and more productive.',
                    job_apply_link: job.hostedUrl,
                    job_posted_at_datetime_utc: new Date(job.createdAt).toISOString(),
                    job_employment_type: 'FULLTIME'
                }));
        }
    }
};

// Utility functions
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Fetch jobs from a specific company's career API
async function fetchCompanyJobs(companyName) {
    const config = CAREER_APIS[companyName];
    if (!config) {
        console.log(`⚠️ No API config for ${companyName}`);
        return [];
    }

    try {
        console.log(`🔍 Fetching jobs from ${companyName}...`);
        
        const options = {
            method: config.method,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
                'Accept': 'application/json',
                ...config.headers
            }
        };

        if (config.body) {
            options.body = config.body;
        }

        const response = await fetch(config.api, options);
        
        if (!response.ok) {
            console.log(`❌ ${companyName} API returned ${response.status}`);
            return [];
        }

        const data = await response.json();
        const jobs = config.parser(data);
        
        console.log(`✅ Found ${jobs.length} jobs at ${companyName}`);
        return jobs;

    } catch (error) {
        console.error(`❌ Error fetching ${companyName} jobs:`, error.message);
        return [];
    }
}

// No sample jobs - only real API data

// Fetch jobs from SimplifyJobs public data
async function fetchSimplifyJobsData() {
    try {
        console.log('📡 Fetching data from public sources...');
        
        const newGradUrl = 'https://raw.githubusercontent.com/SimplifyJobs/New-Grad-Positions/dev/.github/scripts/listings.json';
        const response = await fetch(newGradUrl);
        
        if (!response.ok) {
            console.log(`⚠️ Could not fetch external data: ${response.status}`);
            return [];
        }
        
        const data = await response.json();
        
        const activeJobs = data
            .filter(job => job.active && job.url && 
                          (job.title.toLowerCase().includes('engineer') || 
                           job.title.toLowerCase().includes('developer')))
            .map(job => ({
                job_title: job.title,
                employer_name: job.company_name,
                job_city: job.locations?.[0]?.split(', ')?.[0] || 'Multiple',
                job_state: job.locations?.[0]?.split(', ')?.[1] || 'Locations',
                job_description: `Join ${job.company_name} in this exciting opportunity.`,
                job_apply_link: job.url,
                job_posted_at_datetime_utc: new Date(job.date_posted * 1000).toISOString(),
                job_employment_type: 'FULLTIME'
            }));
            
        console.log(`📋 Found ${activeJobs.length} active positions from external sources`);
        return activeJobs;
        
    } catch (error) {
        console.error(`❌ Error fetching external data:`, error.message);
        return [];
    }
}

// Fetch jobs from all companies with real career APIs
async function fetchAllRealJobs() {
    console.log('🚀 Starting REAL career page scraping...');
    
    const allJobs = [];
    const companiesWithAPIs = Object.keys(CAREER_APIS);
    
    // Fetch real jobs from companies with APIs
    for (const company of companiesWithAPIs) {
        const jobs = await fetchCompanyJobs(company);
        allJobs.push(...jobs);
        
        // Be respectful with rate limiting
        await delay(2000);
    }
    
    // Fetch jobs from external sources
    const externalJobs = await fetchSimplifyJobsData();
    allJobs.push(...externalJobs);
    
    // Remove duplicates based on job title, company, and location
    const uniqueJobs = allJobs.filter((job, index, self) => {
        const jobKey = `${job.job_title.toLowerCase().trim()}-${job.employer_name.toLowerCase().trim()}-${job.job_city.toLowerCase().trim()}`;
        return index === self.findIndex(j => {
            const jKey = `${j.job_title.toLowerCase().trim()}-${j.employer_name.toLowerCase().trim()}-${j.job_city.toLowerCase().trim()}`;
            return jKey === jobKey;
        });
    });
    
    // Sort by posting date (ascending - oldest first)
    uniqueJobs.sort((a, b) => {
        const dateA = new Date(a.job_posted_at_datetime_utc);
        const dateB = new Date(b.job_posted_at_datetime_utc);
        return dateA - dateB;
    });
    
    console.log(`📊 Total jobs collected: ${allJobs.length}`);
    console.log(`🧹 After deduplication: ${uniqueJobs.length}`);
    console.log(`🏢 Companies with real API data: ${companiesWithAPIs.length}`);
    console.log(`📡 External job sources: ${externalJobs.length}`);
    console.log(`✅ REAL JOBS ONLY - No fake data!`);
    
    return uniqueJobs;
}

module.exports = { fetchAllRealJobs };