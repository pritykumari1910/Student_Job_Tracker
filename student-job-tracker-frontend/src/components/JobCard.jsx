// import React from 'react';

// export default function JobCard({ job, onDelete, onUpdate }) {
//   return (
//     <div className="border p-4 rounded shadow mb-4">
//       <h2 className="text-lg font-bold">{job.company}</h2>
//       <p>{job.role}</p>
//       <p>Status: {job.status}</p>
//       <p>Date: {new Date(job.appliedDate).toLocaleDateString()}</p>
//       <a href={job.link} className="text-blue-600" target="_blank">Job Link</a>
//       <div className="flex gap-2 mt-2">
//         <button onClick={() => onUpdate(job._id)} className="bg-yellow-300 px-2 py-1">Update</button>
//         <button onClick={() => onDelete(job._id)} className="bg-red-400 px-2 py-1">Delete</button>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import './JobCard.css';

export default function JobCard({ job, onDelete, onUpdate }) {
  return (
    <div className="job-card">
      <h2 className="job-company">{job.company}</h2>
      <p>{job.role}</p>
      <p>Status: {job.status}</p>
      <p>Date: {new Date(job.appliedDate).toLocaleDateString()}</p>
      <a href={job.link} className="job-link" target="_blank" rel="noopener noreferrer">Job Link</a>
      <div className="job-actions">
        <button onClick={() => onUpdate(job._id)} className="update-button">Update</button>
        <button onClick={() => onDelete(job._id)} className="delete-button">Delete</button>
      </div>
    </div>
  );
}
