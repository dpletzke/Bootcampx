SELECT  day, count(*) as total_assignments
FROM assignments
group by day
order by day;