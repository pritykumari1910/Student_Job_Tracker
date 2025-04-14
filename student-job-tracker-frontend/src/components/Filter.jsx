// import React from 'react';

// export default function Filter({ onChange, status }) {
//   return (
//     <div className="flex gap-4 mb-4">
//       <select onChange={e => onChange(e.target.value)} value={status} className="border p-2">
//         <option value="">All</option>
//         <option value="Applied">Applied</option>
//         <option value="Interview">Interview</option>
//         <option value="Offer">Offer</option>
//         <option value="Rejected">Rejected</option>
//       </select>
//     </div>
//   );
// }



import React from 'react';
import './Filter.css'; // Make sure the path is correct

export default function Filter({ onChange, status }) {
  return (
    <div className="filter-container">
      <select
        onChange={e => onChange(e.target.value)}
        value={status}
        className="filter-select"
      >
        <option value="">All</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
}

