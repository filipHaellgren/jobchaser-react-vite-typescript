import React from 'react';
import { Job } from './job'; // Import the Job interface

interface JobListProps {
    jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
    return (
        <div className='job-container'>
            <h2>Job List</h2>
            {jobs.map(job => (
                <div key={job.id} className="job-item">
                    <h3>{job.company}</h3>
                    <p>{job.position}</p>
                    {/* Render other job details as needed */}
                </div>
            ))}
        </div>
    );
};

export default JobList;