
Basic Select Statement
Write a query to display the names (first_name, last_name) using an alias name “First Name”, “Last Name” from the employee table.


SELECT first_name || ' ' || last_name
AS First_Name_Last_Name
from employees




Write a query to get unique departments ID from the employee table (ie. without duplicates).


SELECT DISTINCT department_id
FROM employees



Write a query to get the details of all employees from the employee table, do so in descending order by first name.

SELECT * FROM employees
ORDER BY first_name DESC

Write a query to get the names (first_name, last_name), salary and 15% of salary as PF (ie. alias) for all the employees.



Write a query to get the employee IDs, names (first_name, last_name) and salary in ascending order according to their salary.

Write a query to get the total sum of all salaries paid to the employees.

Write a query to get the maximum and minimum salaries paid to the employees.

Write a query to get the average salary paid to the employees.

Write a query to get the number of employees working in the company.

Write a query to get all the first names from the employees table in upper case.

Write a query to get the first three characters of each first name of all the employees in the employees table.

Write a query to get the full names of all the employees in the employees table. You have to include the first name and last name.

Write a query to get the first name, last name and the length of the full name of all the employees from the employees table.

Write a query to check whether the first_name column of the employees table contains any numbers.

Write a query to select the first ten records from a table.
