// import React, { useState } from 'react';

// export default function JobForm({ onAdd }) {
//   const [formData, setFormData] = useState({
//     company: '', role: '', status: 'Applied', appliedDate: '', link: ''
//   });

//   const handleChange = e => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = e => {
//     e.preventDefault();
//     onAdd(formData);
//     setFormData({ company: '', role: '', status: 'Applied', appliedDate: '', link: '' });
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-4 space-y-2">
//       <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company" className="border p-2 w-full" required />
//       <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Role" className="border p-2 w-full" required />
//       <select name="status" value={formData.status} onChange={handleChange} className="border p-2 w-full">
//         <option>Applied</option>
//         <option>Interview</option>
//         <option>Offer</option>
//         <option>Rejected</option>
//       </select>
//       <input type="date" name="appliedDate" value={formData.appliedDate} onChange={handleChange} className="border p-2 w-full" required />
//       <input type="url" name="link" value={formData.link} onChange={handleChange} placeholder="Application Link" className="border p-2 w-full" required />
//       <button type="submit" className="bg-green-500 px-4 py-2 text-white rounded">Add Job</button>
//     </form>
//   );
// }


import React, { useState } from 'react';
import './JobForm.css';

export default function JobForm({ onAdd }) {
  const [formData, setFormData] = useState({
    company: '', role: '', status: 'Applied', appliedDate: '', link: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onAdd(formData);
    setFormData({ company: '', role: '', status: 'Applied', appliedDate: '', link: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="job-form">
      <input type="text" name="company" value={formData.company} onChange={handleChange} placeholder="Company" required />
      <input type="text" name="role" value={formData.role} onChange={handleChange} placeholder="Role" required />
      <select name="status" value={formData.status} onChange={handleChange}>
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
      <input type="date" name="appliedDate" value={formData.appliedDate} onChange={handleChange} required />
      <input type="url" name="link" value={formData.link} onChange={handleChange} placeholder="Application Link" required />
      <button type="submit">Add Job</button>
    </form>
  );
}
