SELECT  cohorts.name                   AS cohort 
       ,SUM(completed_at - started_at) AS total_duration
from assistance_requests
join students
on students.id = assistance_requests.student_id
join cohorts
on cohorts.id = students.cohort_id
group by cohorts.name
order by total_duration;