import React, { useState } from 'react';
import { addJob } from '../api';

const JobForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    company: '',
    role: '',
    status: 'Applied',
    date: '',
    link: '',
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const newJob = await addJob(form);
    onAdd(newJob.data);
    setForm({ company: '', role: '', status: 'Applied', date: '', link: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="job-form p-4 bg-light rounded shadow-sm mb-4">
    <div className="mb-3">
      <label className="form-label">Company</label>
      <input 
        name="company" 
        placeholder="Company" 
        value={form.company} 
        onChange={handleChange} 
        required 
        className="form-control" 
      />
    </div>
  
    <div className="mb-3">
      <label className="form-label">Role</label>
      <input 
        name="role" 
        placeholder="Role" 
        value={form.role} 
        onChange={handleChange} 
        required 
        className="form-control" 
      />
    </div>
  
    <div className="mb-3">
      <label className="form-label">Status</label>
      <select 
        name="status" 
        value={form.status} 
        onChange={handleChange} 
        className="form-select"
      >
        <option>Applied</option>
        <option>Interview</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>
    </div>
  
    <div className="mb-3">
      <label className="form-label">Date of Application</label>
      <input 
        type="date" 
        name="date" 
        value={form.date} 
        onChange={handleChange} 
        required 
        className="form-control" 
      />
    </div>
  
    <div className="mb-3">
      <label className="form-label">Job Link</label>
      <input 
        name="link" 
        placeholder="Job Link" 
        value={form.link} 
        onChange={handleChange} 
        className="form-control" 
      />
    </div>
  
    <button type="submit" className="btn btn-primary w-100">
      Add Job
    </button>
  </form>
  
  );
};

export default JobForm;
