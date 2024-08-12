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
          status: 'discovered' 
        },
        { 
          job_title: 'UX Designer', 
          salary: '$95,000', 
          company_name: 'Creative Solutions', 
          location: 'Austin, TX', 
          url: 'creativesolutions.design',
          description: 'Design user-friendly interfaces for web and mobile applications.', 
          status: 'discovered' 
        },
        { 
          job_title: 'Product Manager', 
          salary: '$120,000', 
          company_name: 'InnovateX', 
          location: 'New York, NY', 
          url: 'innovatex.ai',
          description: 'Oversee product development and strategy.', 
          status: 'applied' 
        },
        { 
          job_title: 'Front-End Developer', 
          salary: '$110,000', 
          company_name: 'WebWorks', 
          location: 'Seattle, WA', 
          url: 'webworks.dev',
          description: 'Build responsive websites and web applications.', 
          status: 'applied' 
        },
        { 
          job_title: 'Data Analyst', 
          salary: '$90,000', 
          company_name: 'DataInsights', 
          location: 'Chicago, IL', 
          url: 'datainsights.co',
          description: 'Analyze data and generate reports.', 
          status: 'reached out' 
        },
        { 
          job_title: 'Marketing Specialist', 
          salary: '$85,000', 
          company_name: 'MarketMasters', 
          location: 'Los Angeles, CA', 
          url: 'marketmasters.agency',
          description: 'Develop and execute marketing campaigns.', 
          status: 'reached out' 
        },
        { 
          job_title: 'Backend Developer', 
          salary: '$105,000', 
          company_name: 'CodeCraft', 
          location: 'Denver, CO', 
          url: 'codecraft.io',
          description: 'Develop and maintain server-side logic and databases.', 
          status: 'interviewing' 
        },
        { 
          job_title: 'Systems Analyst', 
          salary: '$100,000', 
          company_name: 'SysTech', 
          location: 'Boston, MA', 
          url: 'systech.com',
          description: 'Analyze and improve IT systems.', 
          status: 'interviewing' 
        },
        { 
          job_title: 'Project Manager', 
          salary: '$115,000', 
          company_name: 'BuildIt', 
          location: 'Philadelphia, PA', 
          url: 'buildit.co',
          description: 'Manage and deliver construction projects.', 
          status: 'interviewing' 
        },
        { 
          job_title: 'DevOps Engineer', 
          salary: '$130,000', 
          company_name: 'CloudServices', 
          location: 'San Jose, CA', 
          url: 'cloudservices.net',
          description: 'Implement and maintain CI/CD pipelines.', 
          status: 'offer received' 
        },
        { 
          job_title: 'Sales Engineer', 
          salary: '$110,000', 
          company_name: 'TechSales', 
          location: 'Atlanta, GA', 
          url: 'techsales.io',
          description: 'Bridge the gap between technical and sales teams.', 
          status: 'offer received' 
        },
        { 
          job_title: 'Full Stack Developer', 
          salary: '$120,000', 
          company_name: 'InnovateTech', 
          location: 'Portland, OR', 
          url: 'innovatetech.com',
          description: 'Work on both front-end and back-end development.', 
          status: 'hired' 
        },
        { 
          job_title: 'Network Engineer', 
          salary: '$95,000', 
          company_name: 'NetSolutions', 
          location: 'Dallas, TX', 
          url: 'netsolutions.com',
          description: 'Design and manage network infrastructure.', 
          status: 'hired' 
        },
        { 
          job_title: 'Content Writer', 
          salary: '$70,000', 
          company_name: 'WriteRight', 
          location: 'Miami, FL', 
          url: 'writeright.co',
          description: 'Create compelling content for various platforms.', 
          status: 'ghosted' 
        }
      ]);
    });
};