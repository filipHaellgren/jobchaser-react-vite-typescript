import React, { useState, useEffect } from 'react';
import JobList from './jobList'; // Import the JobList component
import jobData from './data.json'; // Import JSON data directly
import "./index.css";


const App: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredJobs, setFilteredJobs] = useState(jobData);

    // Fields to filter on
    const fieldsToFilter = ['company', 'position', 'role', 'level', 'location', 'postedAt', 'contract'];

    // Effect to update filtered jobs when search query changes
    useEffect(() => {
        const newFilteredJobs = jobData.filter(job =>
            fieldsToFilter.some(field =>
                job[field].toLowerCase().includes(searchQuery.toLowerCase())
            ) ||
            job.languages.some(language =>
                language.toLowerCase().includes(searchQuery.toLowerCase())
            ) ||
            job.tools.some(tool =>
                tool.toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
        setFilteredJobs(newFilteredJobs);
    }, [searchQuery]);

    // Event handler for updating search query
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    };

    return (
        <div className='wholeList'>
            <h1>Job List</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder={`Search by ${fieldsToFilter.concat(['tools', 'languages']).join(', ')}`}
                    value={searchQuery}
                    onChange={handleSearchChange}
                />
            </div>
            {/* Render the JobList component */}
            <JobList jobs={filteredJobs} />
        </div>
    );
};

export default App;
