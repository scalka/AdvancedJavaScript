
/* From exercice B0, write the SQL query/ies to retrieve the list of all subjects with the teacher’s
information. */
SELECT *
FROM Subjects
WHERE teacher_id = 'id';

/* From exercise B0, write the SQL query/ies to retrieve a list with all students that have an
average grade > 6. Display what the average is, and the name and grade of the subject they
have the highest grade. Sort the result by the teacher’s identification number (the teacher of
the subject with the highest grade). */

SELECT subject_id, AVG(grade)
FROM Grades
GROUP BY student_id
HAVING AVG(grade) > 6
ORDER BY AVG(grade);
