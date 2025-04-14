import axios from 'axios';

const API = import.meta.env.VITE_API_BASE_URL;

export const getJobs = async () => {
  const res = await axios.get(`${API}/api/jobs`);
  return res.data;
};

export const addJob = async (job) => {
  const res = await axios.post(`${API}/api/jobs`, job);
  return res.data;
};

export const deleteJob = async (id) => {
  const res = await axios.delete(`${API}/api/jobs/${id}`);
  return res.data;
};

export const updateJob = async (id, data) => {
  const res = await axios.put(`${API}/api/jobs/${id}`, data);
  return res.data;
};
