# Vega
_A proof-of-concept application dedicated to helping job seekers better manage, strategize, and more efficiently pursue the next step in their careers! **Official rebuild coming soon!**_

[View the demo video](https://www.youtube.com/watch?v=NjSP83HS4bg), or watch the [Find-a-Job feature walkthrough](https://www.youtube.com/watch?v=RwPbEVoYpzU)

## Table of Contents
- [Getting Started](#getting-started)
  - [Requirements](#requirements)
  - [Installation Instructions](#installation-instructions)
  - [Usage](#usage)
- [Contribution Guidelines](#contribution-guidelines)

## Getting Started
### Requirements
Before you begin, be sure you have the following installed:
1. The most recent versions of `node` and `npm`
2. [pgAdmin 4](https://www.pgadmin.org/download/#:~:text=as%20working%20repositories.-,pgAdmin%204,-pgAdmin%204%20is)

### Installation Instructions
1. Clone the repo:
```
git clone https://github.com/paulstgermain/vega-fe.git
```
2. Install packages:
```
npm install
```
3. Open **pgAdmin 4** and create a new database
4. Rename the `.env.example` file to `.env`
5. Set up your `.env` file:
- 1. Follow the [vega-fe repo installation instructions](https://github.com/paulstgermain/vega-fe?tab=readme-ov-file#installation-instructions)
- 2. Fill in the placeholders in the `.env` file's `DATABASE_URL` value (ex: `postgresql://postgres:[PGADMIN_PASSWORD]@localhost:5432/[DATABASE_NAME]`) (Remember to remove the brackets too: `[]`)
- 3. Copy your new app's **Domain** value into the `.env` file's `AUTH0_ISSUER_BASE_URL` value
- 4. Copy your new API's **API Audience** value into the `.env` file's `AUTH0_API_AUDIENCE` value
6. Run the migration file to establish database tables:
```
npm run migrate
```
7. **(Optional)** To start with some dummy data in the database for demo purposes, replace all instances of both `auth_id` values in the `db/seeds/01_jobs.js` file with the `user_ids` of the demo users optionally created during the front-end repository's installation instructions, then run the seed file to fill the tables:
```
npm run seed
```
8. Run the app:
```
npm start
```

### Usage
#### Available scripts:
1. `start`: Starts the server
2. `migrate`: Creates your database's tables
3. `rollback`: Rolls back your database's tables (**WARNING:** This deletes all tables, be sure you don't have data you don't want to lose in your database before running.)
4. `seed`: Seeds your database with dummy data for demo purposes
5. `reset-db`: Runs `rollback`, `migrate`, and `seed` commands in sequence. Useful for resetting a demo run (**WARNING:** Same as previous warning.)

**** **_(Use the app from the front end.)_**
1. **Create an account**, or sign in with your existing Auth0 account to be taken to the **Dashboard**
2. From the dashboard, click the pink, circular `+` button to add a new Job card to the board

#### Once you have any job card on the board, you can take any of the following actions:
1. Use the `Status` dropdown to change the job's status quickly
2. Click the `To Job` button to be taken to the job's original posting URL (If a proper URL was added)
3. Click `View Job Data` to view all gathered info for that job
4. From this view, click the `Delete` button to delete the job from your database, or...
5. ... Edit the job's info, then click `Save` to save your changes

## Contribution Guidelines
Pull requests are welcome. For major changes, please open an issue first. Before writing any code, please be sure to open a feature branch.

For example, `feature/short_title_describing_feature` for a new feature, or `bugfix/short_title_describing_bugfix` for bug fixes.

**All PRs will be reviewed by the repository owner before they will be accepted and merged.**

## Screenshots
![image](https://github.com/user-attachments/assets/b7a82e1c-1f8e-4be5-91f4-a21bb8b0bade)
_Main page hero section_

![image](https://github.com/user-attachments/assets/d1f2d8ea-fc62-4223-b85f-423d71a48134)
_Main Dashboard view_

![image](https://github.com/user-attachments/assets/0f4ea9a8-c42e-4398-a953-5ff836c94926)
_Job card 'View Job Data' modal view example_
