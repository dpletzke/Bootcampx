SELECT  cohorts.name 
       ,COUNT(students.id)
FROM cohorts
LEFT JOIN students
ON cohorts.id = students.cohort_id
GROUP BY  cohorts.name
HAVING COUNT(students.id) >= 18
ORDER BY COUNT(students.id);