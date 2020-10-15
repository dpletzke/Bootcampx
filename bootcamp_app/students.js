const cohort_name = process.argv[2];
const max_results = process.argv[3];


const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
SELECT students.id, students.name as name, cohorts.name as cohort_name
FROM students
JOIN cohorts
ON students.cohort_id = cohorts.id  
WHERE cohorts.name LIKE '%${cohort_name}%'
LIMIT ${max_results};
`)
.then(res => {
  console.log(res.rows);
})
.catch(err => console.error('query error', err.stack));