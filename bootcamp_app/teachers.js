const cohort = process.argv[2];


const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT  distinct teachers.name AS teacher 
       ,cohorts.name           AS cohort
FROM teachers
JOIN assistance_requests
ON teachers.id = assistance_requests.teacher_id
JOIN students
ON assistance_requests.student_id = students.id
JOIN cohorts
ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE '%${cohort}%'
ORDER BY teacher;
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));