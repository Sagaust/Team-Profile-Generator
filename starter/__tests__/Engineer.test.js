const Engineer = require("../lib/Engineer");

test("Can set GitHUb account via constructor", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.github).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
  const testValue = "Engineer";
  const e = new Engineer("Foo", 1, "test@test.com", "GitHubUser");
  expect(e.getRole()).toBe(testValue);
});

test("Can get GitHub username via getGithub()", () => {
  const testValue = "GitHubUser";
  const e = new Engineer("Foo", 1, "test@test.com", testValue);
  expect(e.getGithub()).toBe(testValue);
});

test("The engineer should extend the employee class", () => {
  
  const engineer = new Engineer();
  expect(engineer).toBeinstanceof (Employee);
});

test("ON construction, the base class is initialised with the name, id, email, and GitHub username", () => {
  //Arrange
  const name = "Jacob";
  const id = 200;
  const email = "upchh@example.com";


  //Act
  const engineer = new Engineer(name, id, email);

  //Assert
  expect(engineer.name).toBe(name);
  expect(engineer.id).toBe(id);
  expect(engineer.email).toBe(email);
 
 } )