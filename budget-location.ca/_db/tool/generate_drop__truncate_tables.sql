SELECT CONCAT('DROP TABLE IF EXISTS ', table_name, ';')
FROM information_schema.tables
WHERE table_schema = 'dbdarquest17';

SELECT CONCAT('TRUNCATE TABLE ', table_name, ';')
FROM information_schema.tables
WHERE table_schema = 'dbdarquest17';