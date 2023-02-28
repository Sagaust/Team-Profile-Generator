// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

// Import the parent class
const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  // Get the engineer's github username
  getGithub() {
    return this.github;
  }

  // Override parent method to return Engineer as role
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;