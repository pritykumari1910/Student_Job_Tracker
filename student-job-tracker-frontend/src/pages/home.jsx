// import React, { useEffect, useState } from 'react';
// import JobForm from '../components/JobForm';
// import JobCard from '../components/JobCard';
// import Filter from '../components/Filter';
// import { getJobs, addJob, deleteJob, updateJob } from '../services/jobService';

// export default function Home() {
//   const [jobs, setJobs] = useState([]);
//   const [filter, setFilter] = useState('');

//   const fetchJobs = async () => {
//     const data = await getJobs();
//     setJobs(data);
//   };

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const handleAdd = async (job) => {
//     await addJob(job);
//     fetchJobs();
//   };

//   const handleDelete = async (id) => {
//     await deleteJob(id);
//     fetchJobs();
//   };

//   const handleUpdate = async (id) => {
//     const newStatus = prompt('Enter new status (Applied, Interview, Offer, Rejected):');
//     if (newStatus) {
//       await updateJob(id, { status: newStatus });
//       fetchJobs();
//     }
//   };

//   const filteredJobs = filter ? jobs.filter(job => job.status === filter) : jobs;

//   return (
//     <div className="max-w-xl mx-auto p-4">
//       <h1 className="text-2xl font-bold mb-4">Student Job Tracker</h1>
//       <JobForm onAdd={handleAdd} />
//       <Filter onChange={setFilter} status={filter} />
//       {filteredJobs.map(job => (
//         <JobCard key={job._id} job={job} onDelete={handleDelete} onUpdate={handleUpdate} />
//       ))}
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import './Home.css';

import JobForm from '../components/JobForm';
import JobCard from '../components/JobCard';
import Filter from '../components/Filter';
import { getJobs, addJob, deleteJob, updateJob } from '../services/jobService';

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('');

  const fetchJobs = async () => {
    const data = await getJobs();
    setJobs(data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleAdd = async (job) => {
    await addJob(job);
    fetchJobs();
  };

  const handleDelete = async (id) => {
    await deleteJob(id);
    fetchJobs();
  };

  const handleUpdate = async (id) => {
    const newStatus = prompt('Enter new status (Applied, Interview, Offer, Rejected):');
    if (newStatus) {
      await updateJob(id, { status: newStatus });
      fetchJobs();
    }
  };

  const filteredJobs = filter ? jobs.filter(job => job.status === filter) : jobs;

  return (
    <div className="home-container">
      <h1 className="home-title">Student Job Tracker</h1>
      <JobForm onAdd={handleAdd} />
      <Filter onChange={setFilter} status={filter} />
      {filteredJobs.map(job => (
        <JobCard key={job._id} job={job} onDelete={handleDelete} onUpdate={handleUpdate} />
      ))}
    </div>
  );
}
