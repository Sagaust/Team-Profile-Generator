// Require necessary modules
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

// Require necessary classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require('./src/page-template');

// Create an empty array to hold team members
const teamMembers = [];

// Function to prompt for manager's details
async function promptManager() {
  // Inquirer prompt to get manager's details
  const managerDetails = await inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the name of the manager?",
    },
    {
      type: "input",
      name: "id",
      message: "What is the employee ID of the manager?",
    },
    {
      type: "input",
      name: "email",
      message: "What is the email address of the manager?",
    },
    {
      type: "input",
      name: "officeNumber",
      message: "What is the office number of the manager?",
    },
  ]);

  // Create a new Manager object and push to teamMembers array
  const manager = new Manager(
    managerDetails.name,
    managerDetails.id,
    managerDetails.email,
    managerDetails.officeNumber
  );
  teamMembers.push(manager);

  // Prompt user to select team member type or finish building team
  await promptTeamMembers();
}

// Function to prompt for team members' details
async function promptTeamMembers() {
  // Inquirer prompt to get team member type or finish building team
  const teamMemberType = await inquirer.prompt([
    {
      type: "list",
      name: "type",
      message: "What type of team member do you want to add?",
      choices: ["Engineer", "Intern", "Finish building team"],
    },
  ]);

  switch (teamMemberType.type) {
    case "Engineer":
      // Prompt to get engineer's details
      const engineerDetails = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the engineer?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the employee ID of the engineer?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the email address of the engineer?",
        },
        {
          type: "input",
          name: "github",
          message: "What is the GitHub username of the engineer?",
        },
      ]);

      // Create a new Engineer object and push to teamMembers array
      const engineer = new Engineer(
        engineerDetails.name,
        engineerDetails.id,
        engineerDetails.email,
        engineerDetails.github
      );
      teamMembers.push(engineer);

      // Prompt user to select team member type or finish building team
      await promptTeamMembers();
      break;

    case "Intern":
      // Prompt to get intern's details
      const internDetails = await inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: "What is the name of the intern?",
        },
        {
          type: "input",
          name: "id",
          message: "What is the employee ID of the intern?",
        },
        {
          type: "input",
          name: "email",
          message: "What is the email address of the intern?",
        },
        {
          type: "input",
          name: "school",
          message: "What is the name of your school?"
        }, 
    ]);

      // Create a new Engineer object and push to teamMembers array
      const intern = new Intern(
        internDetails.name,
        internDetails.id,
        internDetails.email,
        internDetails.school
      );
      teamMembers.push(intern);

      // Prompt user to select team member type or finish building team
      await promptTeamMembers();
      break;

      case  "Finish building team":
        // Generate HTML file
        fs.writeFileSync(outputPath, render(teamMembers));
        console.log(`HTML file has been generated and saved to ${outputPath}`);
        break;
        default:
        break;
        


      }
    };

    promptManager()
  .then( promptTeamMembers)
  .then(teamArray => {
    return generateHTML(teamMembers);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });