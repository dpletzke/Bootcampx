SELECT  cohorts.name
       ,AVG(completed_at - started_at) AS average_assistance_time
FROM students
JOIN cohorts
ON students.cohort_id = cohorts.id
JOIN assistance_requests
ON assistance_requests.student_id = students.id
GROUP BY  cohorts.name
ORDER BY average_assistance_time;