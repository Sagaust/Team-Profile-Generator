// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.


const Employee = require("./Employee");

// Defines a new class called Intern that extends the Employee class.
class Intern extends Employee { 
    // Defines a constructor function that takes in name, id, email and school as arguments.
  constructor(name, id, email, school) { 
    // Calls the constructor of the parent class (Employee) with the name, id, and email arguments.
    super(name, id, email); 
    // Assigns the value of the school argument to the school property of the Intern instance.
    this.school = school; 
  }

// Defines a method called getSchool on the Intern class.
  getSchool() {
     // Returns the value of the school property of the Intern instance.
    return this.school;
  }

  // Overrides the getRole method defined in the Employee class.
  getRole() { 

    // Returns the string "Intern".
    return "Intern";
  }
}

 // Exports the Intern class to be used in other modules.
module.exports = Intern;
