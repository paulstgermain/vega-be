const jobModel = require('../models/jobsModel');
const OpenAi = require('openai');
const { response } = require('express');

const openai = new OpenAi(process.env.OPENAI_API_KEY);

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

const gptTailorResume = async (req, res) => {

  try {
    const z = await import ('zod');
    const { zodResponseFormat } = await import ('openai/helpers/zod.mjs');
    const GenerateJobKeywords = z.object({
      keySkills: z.array(z.string()),
      keyPhrases: z.array(z.string()),
      keyTips: z.array(z.string()),
    })
  
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You are a career coach who specializes in helping people tailor their resumes for specific job postings in the tech industry. You will be given a job description and title, and you will need to generate key skills, key phrases, and key tips for tailoring a resume for that job. You should only return this result in the given format.'},
        { role: 'user', content: `Job Title: ${req.body.job_title}\nJob Description: ${req.body.job_description}`},
      ],
      response_format: zodResponseFormat(GenerateJobKeywords, "generate_job_keywords"),
    })

    res.json(completion);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getAllJobs,
  getJob,
  getJobByAuthId,
  createJob,
  updateJob,
  deleteJob,
  gptTailorResume,
};