const jobModel = require('../models/jobsModel');

// Edit getAllJobs to return all jobs from the database, sorted by their 'status value
// Example return object: { interested: [job1, job2], applied: [job3, job4], interviewing: [job5], hired: [job6], ghosted: [job7] }
// If there are no jobs in a certain status, the array should be empty
// If there are no jobs at all, the return object should be an empty object

const getAllJobs = async (req, res) => {
  try {
    const jobs = await jobModel.getJobs();
    const sortedJobs = jobs.reduce((acc, job) => {
      acc[job.status] = acc[job.status] || [];
      acc[job.status].push(job);
      return acc;
    }, {});
    res.json(sortedJobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getJobByAuthId = async (req, res) => {
  try {
    const jobs = await jobModel.getJobByAuthId(req.params.auth_id);
    const sortedJobs = jobs.reduce((acc, job) => {
      acc[job.status] = acc[job.status] || [];
      acc[job.status].push(job);
      return acc;
    }, {});
    res.json(sortedJobs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const getJob = async (req, res) => {
  try {
    const job = await jobModel.getJobById(req.params.id);
    if (job) {
      res.json(job);
    } else {
      res.status(404).json({ message: 'Job not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createJob = async (req, res) => {
  try {
    const newJob = await jobModel.createJob(req.body);
    res.status(201).json(newJob);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateJob = async (req, res) => {
  try {
    const updatedJob = await jobModel.updateJob(req.params.id, req.body);
    if (updatedJob) {
      res.json(updatedJob);
    } else {
      res.status(404).json({ message: 'Job not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteJob = async (req, res) => {
  try {
    const deletedJob = await jobModel.deleteJob(req.params.id);
    if (deletedJob) {
      res.json({ message: 'Job deleted' });
    } else {
      res.status(404).json({ message: 'Job not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllJobs,
  getJob,
  getJobByAuthId,
  createJob,
  updateJob,
  deleteJob,
};