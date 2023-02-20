
# Scope-based Authorization System for EdTech-Management SaaS

This project is an implementation of a Scope-based Authorization system for an EdTech-Management SaaS company, which allows users to register schools and students, and restricts access based on scopes. The project includes API routes that are allowed/denied access based on scope.
## Features

- The system defines specific roles, such as Admin, Student, and Principal, and assigns scopes to each role that are required for them to perform actions on the resources. For example, the Admin role might have scopes like user-create, user-delete, school-create, etc., while the Student role might have scopes like student-view, student-edit, etc.

- With the Scope-based Authorization system, API routes are only accessible if the user has the necessary scope assigned to their role. This ensures that users can only perform actions that they are authorized to do, and prevents unauthorized access to sensitive resources.

- Overall, this project provides a secure and efficient way for the EdTech-Management SaaS company to manage schools and students, and control access based on user roles and scopes.






## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`JWT_SECRET`



## Run Locally

- Clone the project

```bash
  git clone https://github.com/abhay2002-pro/EdTech-Management.git
```
- Go to the project directory
```bash
  cd my-project
```
- Install dependencies
```bash
  npm install
```
- Include the config.env file in the config folder and add JWT_SECRET

- Start server
```bash
  npm start
```
## Tech Stack

**Server:** Node, Express, Sequelize, ValidatorJS

**Database:** PostgreSQL


## Feedback

If you have any feedback, please reach out to me at abhayray2002@gmail.com
