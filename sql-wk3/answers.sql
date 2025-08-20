
/* 
Question 1 
Create a table named student with columns:
- id (integer, primary key)
- fullName (varchar(100))
- age (integer)
*/
CREATE TABLE student (
    id INT PRIMARY KEY,
    fullName VARCHAR(100),
    age INT
);

---------------------------------------------------

/*
Question 2 
Insert at least 3 records into the student table
*/
INSERT INTO student (id, fullName, age)
VALUES (1, 'Sic Mundus', 19);

INSERT INTO student (id, fullName, age)
VALUES (2, 'Bob Michael', 18);

INSERT INTO student (id, fullName, age)
VALUES (3, 'Kanye West', 21);

---------------------------------------------------

/*
Question 3 
Update the age of the student with ID = 2 to 20
*/
UPDATE student
SET age = 20
WHERE id = 2;
