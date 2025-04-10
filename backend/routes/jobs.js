const express = require('express');
const router = express.Router();
const Job = require('../models/job');

// Add Job
router.post('/', async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).json(job);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get All Jobs (with optional filters)
router.get('/', async (req, res) => {
  const { status, date } = req.query;
  let filter = {};
  if (status) filter.status = status;
  if (date) filter.date = { $gte: new Date(date) };

  try {
    const jobs = await Job.find(filter).sort({ date: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update Job Status
router.patch('/:id', async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(job);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete Job
router.delete('/:id', async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);
    res.json({ message: 'Job deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
