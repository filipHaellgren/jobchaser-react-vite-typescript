// JobList.tsx
import React from 'react';
import { Job } from './data';
import './index.css'; // Import the CSS file

interface JobListProps {
    jobs: Job[];
}

const JobList: React.FC<JobListProps> = ({ jobs }) => {
    return (
        <div className='job-container'>
             <h2>Job List</h2>
             
            {jobs.map(job => (
                <div key={job.id} className="job-item">
                          <img src={job.logo} alt={job.company} /> {/* Render the image */}
                  {/*   <p>ID: {job.id}</p> */}
                  <div className="leftSide">

                     <div className="company">
                         <h3>{job.company}</h3>
                     </div>
                     <div className="underCompany">
                        <p>{job.position}</p>
                       {/*  <p>{job.role}</p> */} 
               {/*         <p>{job.level}</p> */}
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