
import { Job } from './job'; // Import the Job interface
import React, { useState } from 'react';


interface JobListProps {
    jobs: Job[];
}

interface Job {
    id: number;
    company: string;
    position: string;
    role: string;
    level: string;
    location: string;
    contract: string;
    languages: string[];
    tools: string[];
    postedAt: string;
    logo: string;
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
    const [searchQuery, setSearchQuery] = useState("");
    const filteredJobs = jobs.filter(job =>
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.position.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
   
        job.postedAt.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className='job-container'>
            {filteredJobs.map(job => (
                <div key={job.id} className="job-item">
                    <img src={job.logo} alt={job.company} />
                    <div className="leftSide">
                        <div className="company">
                            <h3>{job.company}</h3>
                        </div>
                        <div className="underCompany">
                            <p>{job.position}</p>
                        </div>
                    </div>
                    <div className="rightSide">
                        <p>{job.contract}</p>
                        <p>{job.location}</p>
                        {job.languages.length > 0 && (
                            <p>{job.languages.join(', ')}</p>
                        )}
                        {job.tools.length > 0 && (
                            <p>Tools: {job.tools.join(', ')}</p>
                        )}
                    </div>
                    <p id='postAt'>Posted At: {job.postedAt}</p>
                </div>
            ))}
        </div>
    );
};

export default JobList;