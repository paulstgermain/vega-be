const db = require('../config/db');
const { get } = require('../routes/jobRoutes');

const getJobs = () => {
  return db('jobs').select('*');
};

const getJobById = (id) => {
  return db('jobs').where({ id }).first();
};

const getJobByAuthId = (auth_id) => {
  return db('jobs').where({ auth_id });
};

const createJob = (job) => {
  return db('jobs').insert(job).returning('*');
};

const updateJob = (id, job) => {
  return db('jobs').where({ id }).update(job).returning('*');
};

const deleteJob = (id) => {
  return db('jobs').where({ id }).del();
};

module.exports = {
  getJobs,
  getJobById,
  getJobByAuthId,
  createJob,
  updateJob,
  deleteJob,
};