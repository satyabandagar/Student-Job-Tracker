import React from 'react';
import { updateJob, deleteJob } from '../api';

const JobItem = ({ job, onUpdate, onDelete }) => {
  const handleStatusChange = async (e) => {
    const updated = await updateJob(job._id, { status: e.target.value });
    onUpdate(updated.data);
  };

  const handleDelete = async () => {
    await deleteJob(job._id);
    onDelete(job._id);
  };

  return (
    <div className="card mb-3 shadow-sm">
  <div className="card-body">
    <h5 className="card-title">{job.company} - {job.role}</h5>

    <div className="mb-2">
      <label className="form-label me-2">Status:</label>
      <select 
        value={job.status} 
        onChange={handleStatusChange} 
        className="form-select form-select-sm d-inline w-auto"
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
    </div>

    <p className="card-text mb-1">
      <strong>Date:</strong> {new Date(job.date).toLocaleDateString()}
    </p>

    {job.link && (
      <p className="card-text mb-2">
        <a href={job.link} target="_blank" rel="noreferrer" className="btn btn-outline-secondary btn-sm">
          View Job Link
        </a>
      </p>
    )}

    <button onClick={handleDelete} className="btn btn-danger btn-sm">
      Delete
    </button>
  </div>
</div>

  );
};

export default JobItem;
