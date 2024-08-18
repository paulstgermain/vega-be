const express = require('express');
const jobController = require('../controllers/jobController');
const checkJwt = require('../middleware/checkJwt');

const router = express.Router();

router.get('/jobs', jobController.getAllJobs);
router.get('/jobs/:id', checkJwt, jobController.getJob);
router.get('/jobs/auth/:auth_id', jobController.getJobByAuthId);
router.post('/jobs', checkJwt, jobController.createJob);
router.put('/jobs/:id', checkJwt, jobController.updateJob);
router.delete('/jobs/:id', checkJwt, jobController.deleteJob);

module.exports = router;