// Get a reference to the #add-employees-btn element
  // This will select the unique element #add-employees-btn in the index.html 
  // Will also trigger the employee collection process when clicked
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
  // The function prompts the user for employee details and stores them in the array
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects

  // An empty array to hold all the employees
  const employees = [];
  // Control variable to continue adding employees or stop
  let add = true;

  // While loop to continuously prompt for employee details until the user sets add to false
  while(add) {
    // Prompt the user for employee name
    const firstName = prompt("What is your first name?");
    const lastName = prompt("What is your last name?");
    // Prompt the user for employee salary and convert to a number
    let salary = parseFloat(prompt("What is your salary?"));

    // If statment to check to see if salary is invalid or negative number
      // If so the salary will be assigned 0 by default
    if (isNaN(salary) || salary < 0) {
      salary = 0;
    }

    // An object to store the collected data
    const employee = {firstName, lastName, salary};
    // Add the employee object to the employees array
    employees.push(employee);

    // Ask the user if they want to add another employee. Cancel will terminate the loop
    add = confirm("Would you like to add another employee?");
  }
    // When while loop gets terminated the function will return the array of employee objects
  return employees;
}

// Display the average salary
  // The function calculates and displays the average salary of the employees
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary

  // The reduce() method is used to sum all the employee salaraies
  const totalSalary = employeesArray.reduce((sum, employee) => sum + employee.salary, 0);
  // Calculate average salary by dividing the totalSalary by the number of employees
  const averageSalary = totalSalary / employeesArray.length;

  // Console log the average salary with two decimal points and display the number of employees
  console.log(`The average salary is $${averageSalary.toFixed(2)} and there are ${employeesArray.length} employees.`);
}

// Select a random employee
  // Function to select and display a random employee from the employees array 
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee

  // Generate a ran index between 0 and the length of the employees array 
  const ran = Math.floor(Math.random() * employeesArray.length);
  // Use the random index to slect an employee object from the array
  const ranEmployee = employeesArray[ran];

  // Console log the selected employee's first and last name
  console.log(`Random Employee: ${ranEmployee.firstName} ${ranEmployee.lastName}`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
