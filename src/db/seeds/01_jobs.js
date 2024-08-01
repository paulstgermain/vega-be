exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('jobs').del()
    .then(function () {
      // Inserts seed entries
      return knex('jobs').insert([
        { 
          job_title: 'Software Engineer', 
          salary: '$100,000', 
          company_name: 'TechCorp', 
          location: 'San Francisco, CA', 
          url: 'techcorp.com',
          description: 'Develop and maintain web applications.', 
          status: 1 
        },
        { 
          job_title: 'Product Manager', 
          salary: '$120,000', 
          company_name: 'InnovateX', 
          location: 'New York, NY', 
          url: 'innovatex.ai',
          description: 'Oversee product development and strategy.', 
          status: 2 
        },
        { 
          job_title: 'Data Analyst', 
          salary: '$90,000', 
          company_name: 'DataInsights', 
          location: 'Chicago, IL', 
          url: 'datainsights.co',
          description: 'Analyze data and generate reports.', 
          status: 3 
        }
      ]);
    });
};