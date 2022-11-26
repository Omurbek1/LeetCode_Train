SELECT name Customers
FROM Customers
WHERE id not in 
SELECT Customers FROM orders