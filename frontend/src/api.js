import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000/api' });

export const getJobs = (filters) => API.get('/jobs', { params: filters });
export const addJob = (jobData) => API.post('/jobs', jobData);
export const updateJob = (id, updates) => API.patch(`/jobs/${id}`, updates);
export const deleteJob = (id) => API.delete(`/jobs/${id}`);
