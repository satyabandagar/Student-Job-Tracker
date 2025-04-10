// src/components/JobTracker.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import JobForm from './JobForm';
import JobList from './JobList';

function JobTracker() {
  const [jobs, setJobs] = useState([]);
  const [filter, setFilter] = useState('');

  const fetchJobs = async () => {
    const res = await axios.get('http://localhost:5000/api/jobs');
    setJobs(res.data);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const handleAdd = async (newJob) => {
    const res = await axios.post('http://localhost:5000/api/jobs', newJob);
    setJobs([...jobs, res.data]);
  };

  const handleUpdate = async (id, status) => {
    await axios.patch(`http://localhost:5000/api/jobs/${id}`, { status });
    setJobs(jobs.map(job => job._id === id ? { ...job, status } : job));
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/jobs/${id}`);
    setJobs(jobs.filter(job => job._id !== id));
  };

  const filteredJobs = filter
    ? jobs.filter(job => job.status === filter)
    : jobs;

  return (
    <div>
      <JobForm onAdd={handleAdd} />
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
          {filteredJobs.map(job => (
            <JobList
              key={job._id}
              job={job}
              onUpdate={handleUpdate}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobTracker;
