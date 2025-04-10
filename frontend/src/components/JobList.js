import React, { useEffect, useState } from 'react';
import { getJobs } from '../api';
import JobItem from './JobItem';

const JobList = ({ jobs, setJobs }) => {
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await getJobs(filter ? { status: filter } : {});
      setJobs(res.data);
    };
    fetchJobs();
  }, [filter, setJobs]);

  const handleUpdate = (updatedJob) => {
    setJobs(jobs.map(j => j._id === updatedJob._id ? updatedJob : j));
  };

  const handleDelete = (id) => {
    setJobs(jobs.filter(j => j._id !== id));
  };

  return (
    <div className="container my-4">
  <h2 className="mb-3">🎯 Job Applications</h2>

  <div className="mb-4 d-flex align-items-center gap-2">
    <label htmlFor="statusFilter" className="form-label mb-0">Filter by status:</label>
    <select 
      id="statusFilter"
      onChange={e => setFilter(e.target.value)} 
      value={filter} 
      className="form-select w-auto"
    >
      <option value="">All</option>
      <option>Applied</option>
      <option>Interview</option>
      <option>Offer</option>
      <option>Rejected</option>
    </select>
  </div>

  <div className="job-list">
    {jobs.map(job => (
      <JobItem key={job._id} job={job} onUpdate={handleUpdate} onDelete={handleDelete} />
    ))}
  </div>
</div>

  );
};

export default JobList;
