const db = require('../config/db');

const getJobs = () => {
  return db('jobs').select('*');
};

const getJobById = (id) => {
  return db('jobs').where({ id }).first();
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
  createJob,
  updateJob,
  deleteJob,
};