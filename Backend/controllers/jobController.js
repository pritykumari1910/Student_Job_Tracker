const Job = require("../models/Job");

const getJobs = async (req, res) => {
  const jobs = await Job.find().sort({ appliedDate: -1 });
  res.json(jobs);
};

const createJob = async (req, res) => {
  const { company, role, status, appliedDate, link } = req.body;
  const newJob = new Job({ company, role, status, appliedDate, link });
  const saved = await newJob.save();
  res.status(201).json(saved);
};

const updateJobStatus = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(404).json({ error: "Job not found" });

  job.status = req.body.status;
  await job.save();
  res.json(job);
};

const deleteJob = async (req, res) => {
  const job = await Job.findByIdAndDelete(req.params.id);
  if (!job) return res.status(404).json({ error: "Job not found" });

  res.json({ message: "Job deleted" });
};

module.exports = { getJobs, createJob, updateJobStatus, deleteJob };
