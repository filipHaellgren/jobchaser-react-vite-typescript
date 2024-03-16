
import React from 'react';
import jobData from './data.json'; // Import JSON data directly

const App: React.FC = () => {
    return (
        <div>
            <h1>Job List</h1>
            <ul>
                {jobData.map((job, index) => (
                    <li key={index}>
                        {job.company} - {job.position}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default App;