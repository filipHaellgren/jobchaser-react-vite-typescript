// App.tsx
import React from 'react';
import JobList from './jobList';
import { jobs } from './data';

const App: React.FC = () => {
    return (
        <div className='wholeList'>
            <JobList jobs={jobs} />
        </div>
    );
};

export default App;